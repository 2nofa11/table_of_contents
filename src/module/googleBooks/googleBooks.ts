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
      if (!book.volumeInfo.title || !book.volumeInfo.imageLinks.thumbnail)
        return;
      return {
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks.thumbnail,
        isbn: isbn[0].identifier,
      };
    })
    .filter(Boolean) as FilteredBookInfo[];
  return filteredBooksInfo;
};

export type FilteredBookInfo = {
  title: string;
  image: string;
  isbn: string;
};

const fetchGoogleBooks = async (query: string): Promise<googleBooksType> => {
  // APIを取得
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`;
  const requestBookInfo = axios.get(url);
  const bookInfo = requestBookInfo.then(
    (response: AxiosResponse<googleBooksType>) => {
      const { data } = response;
      return data;
    }
  );
  return bookInfo;
};
