import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { QdrantClient } from "@qdrant/js-client-rest";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const qdrant = new QdrantClient({
  url: process.env.QDRANT_URL,
  apiKey: process.env.QDRANT_API_KEY,
});
