export interface fileProps {
  fileName: string;
  id: string;
  folderId: string;
  url: string;
  createdAt: string;
}

export interface Filefields {
  url: string;
  name: string;
}
export interface FileUploadModalProps {
  folderId: string;
  isFileLoading: boolean;
}

export interface FileTableProps {
  data: File[];
}

type File = {
  id: string;
  name: string;
  url: string;
  collection: string;
  createdAt: Date;
  summary: string;

  folderId: string;
};
