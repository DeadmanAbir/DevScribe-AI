import { TranscriptResponse, YoutubeTranscript } from "youtube-transcript";
import { Document } from "@langchain/core/documents";
import ytdl from "ytdl-core";
import { YoutubeConfig } from "@/types/trpc/trpc-function-types";

const getVideoID = (url: string): string => {
  const match = url.match(
    /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/
  );
  if (match !== null && match[1].length === 11) {
    return match[1];
  } else {
    throw new Error("Failed to get youtube video id from the url");
  }
};

const createFromUrl = (
  url: string,
  config: Omit<YoutubeConfig, "videoId">
): YoutubeConfig => {
  const videoId = getVideoID(url);
  return {
    videoId,
    language: config?.language,
    addVideoInfo: config?.addVideoInfo ?? false,
  };
};

const load = async (config: YoutubeConfig): Promise<Document[]> => {
  const videoId = config.videoId;
  let transcript: TranscriptResponse[] | undefined;
  const metadata: any = {
    source: videoId,
  };

  try {
    transcript = await YoutubeTranscript.fetchTranscript(videoId, {
      lang: config.language,
    });

    if (transcript === undefined) {
      throw new Error("Transcription not found");
    }

    if (config.addVideoInfo) {
      const info = await ytdl.getInfo(videoId);

      metadata.description = info.videoDetails.description;
      metadata.title = info.videoDetails.title;
      metadata.view_count = info.videoDetails.viewCount;
      metadata.author = info.videoDetails.author.name;
    }
  } catch (e) {
    throw new Error(
      `Failed to get YouTube video transcription: ${(e as Error).message}`
    );
  }

  const document: Document = {
    pageContent: transcript.map((item) => item.text).join(" "),
    metadata,
  };

  return [document];
};

const customLoader = async (
  url: string,
  language: string,
  addVideoInfo: boolean
): Promise<Document[]> => {
  const config = createFromUrl(url, {
    language: language,
    addVideoInfo: addVideoInfo,
  });

  try {
    const result = await load(config);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Failed to get YouTube video transcription: ${(error as Error).message}`
    );
  }
};

export default customLoader;
