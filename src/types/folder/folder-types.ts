export interface Folder {
    userId: string
    id: string
    name: string
    description: string
    createdAt: string
  }

  export interface CustomAlertProps {
    alert: boolean;
    onOpenChange: (isOpen: boolean) => void;
  }

  export interface FolderProps {
    id: string;
    title: string;
    description: string;
    createdAt: string;
  }