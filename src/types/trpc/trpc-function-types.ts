import { Document } from "langchain/document";

export interface YoutubeConfig {
  videoId: string;
  language: string;
  addVideoInfo: boolean;
}

export interface VideoLoadResult {
  pageContent: string; // The content of the video page as a string
  chunks: Document<Record<string, any>>[]; // An array of document chunks
  title: string; // The title of the video
  description: string; // The description of the video
}

export interface recentMessagesOutput {
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;
  fileId: String;
}
