import { ChatOpenAI } from "@langchain/openai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { db } from "@/BackEnd/prisma";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { QdrantVectorStore } from "@langchain/community/vectorstores/qdrant";
import { MessagesPlaceholder } from "@langchain/core/prompts";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

interface recentMessagesOutput {
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;
  fileId: String;
}
export async function answerRetrieval(
  question: string,
  collectionName: string,
  fileId: string
): Promise<string> {
  const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-0125",
    temperature: 0.7,
  });

  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    new OpenAIEmbeddings(),
    {
      url: process.env.QDRANT_URL,
      collectionName: collectionName,
    }
  );
  const retriever = vectorStore.asRetriever({
    k: 3,
  });
  const retrieverPrompt = ChatPromptTemplate.fromMessages([
    new MessagesPlaceholder("chat_history"),
    ["user", "{input}"],
    [
      "user",
      "Given the above conversation, generate a search query to look up in order to get information relevant to the conversation",
    ],
  ]);
  const retrieverChain = await createHistoryAwareRetriever({
    llm: model,
    retriever,
    rephrasePrompt: retrieverPrompt,
  });
  const recentMessages = await getRecentMessages(fileId);
  const chatHistory = [
    new HumanMessage("Give an introduction of yours."),
    new AIMessage("Hi, I am Devscribe AI, I will help you with your queries."),
    ...recentMessages.map((message: recentMessagesOutput) =>
      !message.isUserMessage
        ? new HumanMessage(message.text as string)
        : new AIMessage(message.text as string)
    ),
  ];

  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are Devscribe AI, answer the user's questions based on the following context: 
      -----------------
      {context}
      -----------------
      If specific information is not available, you can ask the user for more details.`,
    ],
    new MessagesPlaceholder("chat_history"),
    ["user", "{input}"],
  ]);

  const chain = await createStuffDocumentsChain({
    llm: model,
    prompt: prompt,
  });
  const conversationChain = await createRetrievalChain({
    combineDocsChain: chain,
    retriever: retrieverChain,
  });

  const response = await conversationChain.invoke({
    chat_history: chatHistory,
    input: question,
  });

  return response.answer;
}

async function getRecentMessages(
  fileId: string
): Promise<recentMessagesOutput[]> {
  const messages = await db.message.findMany({
    where: {
      fileId: fileId,
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 6,
  });
  return messages;
}
