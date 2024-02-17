import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { loadQAStuffChain } from "langchain/chains";
import { QdrantVectorStore } from "@langchain/community/vectorstores/qdrant";
import { GooglePaLM } from "@langchain/community/llms/googlepalm";
import { OpenAIEmbeddings, OpenAI } from "@langchain/openai";
interface KeyConceptProps {
  concept: string;
  explanation: string;
  header: string;
}
const summaryModel = new GooglePaLM({
  apiKey: process.env.GOOGLE_PALM_API_KEY,
  temperature: 0.7,
  modelName: "models/text-bison-001",
});
const conceptModel=new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName :"gpt-3.5-turbo-0125",
  temperature: 0.7

})
const conceptChain = loadQAStuffChain(conceptModel);
const summaryChain = loadQAStuffChain(summaryModel);
const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function loadVideo(url: string): Promise<any> {
  const loader = YoutubeLoader.createFromUrl(url, {
    language: "en",
    addVideoInfo: true,
  });

  const docs = await loader.load();
  const{title, description}=docs[0].metadata
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 20,
  });

  const chunks = await textSplitter.splitDocuments(docs);

  return {chunks, title, description};
}

export async function storeToDB(chunks: any, collection: string): Promise<any> {
  const index = await QdrantVectorStore.fromDocuments(chunks, embeddings, {
    url: process.env.QDRANT_URL,
    collectionName: collection,
  });
  return index;
}

export async function summaryRetrieval(docs: any): Promise<string> {
  const SUMMARY_PROMPT = `
  You are a professional note making tool,
  who is really good at creating notes from  the transcription of video provided in brief and structured way. It should have title, description, bullet point of important concepts, etc discussed in video.
  Respond in markdown format to make key points stand out .
  Format the output by using these rules: 
  - Use # for title
  - Use - for unordered lists and bullet points
  - Use ** for bold
  - Use __ for italic
  - Use 1. for ordered lists
  - Use > for Blockquotes
  and so on.
  Use the following pieces of context to create notes of the video. If you don't have enough context then search internet and give the brief summary in at least 1000 words, if possible more.
  Note : Avoid including any pretext or context in your response and follow the rules strictly.`;

  const res = await summaryChain.invoke({
    input_documents: docs,
    question: SUMMARY_PROMPT,
  });
  return res.text;
}

export async function keyConceptRetrieval(docs: any):Promise<KeyConceptProps[]> {
  const CONCEPT_PROMPT = `
  You are a professional note taking tool,
  who is really good at taking notes from  the transcription of video provided in brief and structured way. 
  --------------------------
  Format the output into an array of json with keys: 
  concept: an important concept discussed in video,
  header: a header of the section where the concept is very shortly discussed,
  explanation: an explanation of that concept of about 100 words, using the context.
  --------------------------
  Create  6 notes from the video.
  Note : Avoid including any pretext or context in your response and follow the rules strictly.`;
  const res = await conceptChain.call({
    input_documents: docs,
    question: CONCEPT_PROMPT,
  });
  console.log(res.text);
  const result=JSON.parse(res.text);

  return result;
}
