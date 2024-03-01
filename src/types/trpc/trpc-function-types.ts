import { Document } from "langchain/document";

export interface YoutubeConfig {
  videoId: string;
  language: string;
  addVideoInfo: boolean;
}

export interface VideoLoadResult {
  pageContent: string; 
  chunks: Document<Record<string, any>>[]; 
  title: string; 
  description: string;
}

export interface recentMessagesOutput {
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;
  fileId: String;
}
