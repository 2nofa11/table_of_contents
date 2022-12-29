import axios, { AxiosResponse } from "axios";
import { googleBooksType } from "./googleBooks-type";

export const extractBooksInfo = async (
  title: string
): Promise<FilteredBookInfo[]> => {
  const fetchDataInfo = await fetchGoogleBooks(title);
  const filteredBooksInfo: FilteredBookInfo[] = fetchDataInfo.items
    .map((book) => {
      if (!book.volumeInfo.industryIdentifiers) return;
      const isbn = book.volumeInfo.industryIdentifiers.filter(
        (industryIdentifiers) => industryIdentifiers.type === "ISBN_13"
      );
      if (isbn.length === 0) return;
      return {
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks.smallThumbnail,
        isbn: isbn[0].identifier,
      };
    })
    .filter(Boolean) as FilteredBookInfo[];
  return filteredBooksInfo;
};

type UnknownObject<T extends Object> = {
  [P in keyof T]: unknown;
};
function isFilteredBookInfo(obj: unknown): obj is FilteredBookInfo {
  if (typeof obj !== "object") {
    return false;
  }
  if (obj === null) {
    return false;
  }

  const { title, image, isbn } = obj as UnknownObject<FilteredBookInfo>;

  if (typeof title !== "string") false;
  if (typeof image !== "string") false;
  if (typeof isbn !== "string") false;

  return true;
}

export type FilteredBookInfo = {
  title: string;
  image: string;
  isbn: string;
};

const fetchGoogleBooks = async (query: string): Promise<googleBooksType> => {
  // APIを取得
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${query}&maxResults=10`;
  const requestBookInfo = axios.get(url);
  const bookInfo = requestBookInfo.then(
    (response: AxiosResponse<googleBooksType>) => {
      const { data } = response;
      return data;
    }
  );
  return bookInfo;
};
