export interface ChatsProps {
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;
  fileId: string;
}

export interface questionProps {
  id: string;
  collection: string;
}
export interface Message {
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;

  fileId: string;
}

export interface ConversationProps {
  setAiThinking: React.Dispatch<React.SetStateAction<boolean>>;
  fileId: string;
  collection: string;
  refetchMessages: () => void;
}

export interface KeyConceptProps {
  concept: string;
  explanation: string;
  header: string;
}

export interface MainScreenProps {
  url: string;
  detailedSummary: string;
  concepts: KeyConceptProps[];
  title: string;
  description: string;
  id: string;
  collection: string;
}

export interface MarkdownRendererProps {
  content: string;
  isVideoDescription: boolean;
}

export interface TabsProps {
  url: string;
  detailedSummary: string;
  concepts: KeyConceptProps[];
  title: string;
  description: string;
}

export interface YoutubeProps {
  URL: string;
  title: string;
  description: string;
}

export interface FileDetails {
  url: string;
  summary: string;
  concepts: KeyConceptProps[];
  title: string;
  description: string;
  id: string;
  collection: string;
}
