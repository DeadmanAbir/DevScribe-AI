import { createFile } from "./create-file";
import { getFiles } from "./get-files";
import { deleteFile } from "./delete-file";
import { getVideoSummary } from "./get-video-summary";
import { getConcepts } from "./get-concepts";
import { createTRPCRouter } from "../../trpc";

export const fileRouter = createTRPCRouter({
  createFile,
  getFiles,
  deleteFile,
  getVideoSummary,
  getConcepts,
});
