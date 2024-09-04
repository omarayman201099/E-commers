export interface Categores {
  results: number;
  metadata: Metadata;
  data: Category[];
}

export interface Category {
sulg: string;
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}
