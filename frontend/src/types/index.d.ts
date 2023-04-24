export interface Book {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  description: string;
}

export type RootStackParamList = {
  Home: undefined;
  BookDetails: Book;
};
