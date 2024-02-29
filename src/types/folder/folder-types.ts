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