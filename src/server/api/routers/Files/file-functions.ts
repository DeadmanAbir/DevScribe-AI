import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { loadQAStuffChain } from "langchain/chains";
import { QdrantVectorStore } from "@langchain/community/vectorstores/qdrant";
import { OpenAIEmbeddings, OpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { encoding_for_model } from "tiktoken";
import customLoader from "./custom-loader";
interface KeyConceptProps {
  concept: string;
  explanation: string;
  header: string;
}

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  apiKey: process.env.GOOGLE_PALM_API_KEY,
  temperature : 0.7
});

const model2 = new OpenAI({
  modelName: "gpt-3.5-turbo-0125",
  openAIApiKey: process.env.OPENAI_API_KEY,
});
const chain = loadQAStuffChain(model);
const chain2 = loadQAStuffChain(model2);

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function loadVideo(url: string): Promise<any> {
  const docs = await customLoader(url, "en", true);
  const { title, description } = docs[0].metadata;
  const pageContent=docs[0].pageContent;
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 20,
  });

  const chunks = await textSplitter.splitDocuments(docs);
  return { pageContent, chunks, title, description };
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
  - Add new line after every point.
  Use the following pieces of context to create notes of the video. If you don't have enough context then search internet and give the brief summary in at least 2000 words, if possible more.
  Note : Avoid including any pretext or context in your response and follow the rules strictly.
  `;
  const res = await chain2.invoke({
    input_documents: docs,
    question: SUMMARY_PROMPT,
  });
  return res.text;
}

export async function keyConceptRetrieval(
  docs: any
): Promise<KeyConceptProps[]> {
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
  const res = await chain2.call({
    input_documents: docs,
    question: CONCEPT_PROMPT,
  });
  console.log(res.text);
  const result = JSON.parse(res.text);

  return result;
}


export async function  checkVideoContext (text: string) : Promise<boolean> {
  const encoding = encoding_for_model("gpt-3.5-turbo-0125");
  const tokens = encoding.encode(text);
  encoding.free();
  return tokens.length<=16385 ;
}