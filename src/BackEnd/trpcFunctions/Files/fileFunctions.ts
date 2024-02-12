import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import { YoutubeTranscript } from 'youtube-transcript';
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { loadQAStuffChain } from 'langchain/chains';
import { QdrantVectorStore } from "@langchain/community/vectorstores/qdrant";
import { GooglePaLM } from "@langchain/community/llms/googlepalm";
import { GooglePaLMEmbeddings } from "@langchain/community/embeddings/googlepalm";
import { OpenAIEmbeddings } from "@langchain/openai";
// const embeddings = new GooglePaLMEmbeddings({
//     apiKey: process.env.GOOGLE_PALM_API_KEY, 
//     modelName: "models/embedding-gecko-001", 
//   });

const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY

});

export async function loadVideo(url: string): Promise<any> {
    const loader = YoutubeLoader.createFromUrl(url, {
        language: "en",
        addVideoInfo: true,
    });

    const docs = await loader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({

        chunkSize: 1000,
        chunkOverlap: 20,
    });

    const chunks = await textSplitter.splitDocuments(docs);

    return chunks;

}


export async function storeToDB(chunks : any, collection : string): Promise<any>{
    const index = await QdrantVectorStore.fromDocuments(
        chunks,
        embeddings,
        {
            url: process.env.QDRANT_URL,
            collectionName: collection,
        }
    );
    return index;
}


export async function summaryRetrieval(collection : string): Promise<string>{
    const index = await QdrantVectorStore.fromExistingCollection(
        embeddings,
        {
            url: process.env.QDRANT_URL,
            collectionName: collection,
        }
    );
    const similarDocs = await index.similaritySearch("Give me the brief and structured summary of this file", 5);
    const SUMMARY_PROMPT = `
    You are a professional summarization tool,
    who is really good at giving the summary of the transcription of video provided in brief and structured way ( in markdown format ). It should have title, description, bullet point of important concepts, etc discussed in video.
    
    Use the following pieces of context to give the summary of the video. If you don't have enough context then search internet and give the brief summary in at least 1000 words, if possible more.
    Note : Avoid including any pretext or context in your response.
    `
    
    
    const model = new GooglePaLM({
        apiKey: process.env.GOOGLE_PALM_API_KEY,
        temperature: 0, 
        modelName: "models/text-bison-001",
      });
    const chain = loadQAStuffChain(model);
    
    const res = await chain.invoke({
        input_documents: similarDocs,
        question: SUMMARY_PROMPT,
    })
    return res.text;
}



