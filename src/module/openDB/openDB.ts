import axios, { AxiosResponse } from "axios";
import { OpenDBType, TextContent } from "./openDB-type";

export const extractTextContents = async (
  isbn: string
): Promise<TextContent[]> => {
  const isbnNumber: number = Number(isbn);
  const openDBInfo = await fetchOpenDB(isbnNumber);
  if (openDBInfo[0] === null) return [];
  const tableOfContent: TextContent[] =
    openDBInfo[0].onix.CollateralDetail.TextContent.filter((content) => {
      return content.TextType === "04";
    });
  return tableOfContent;
};

export const fetchOpenDB = async (query: number): Promise<OpenDBType[]> => {
  // APIを取得
  const url = `https://api.openbd.jp/v1/get?isbn=${query}&pretty`;
  const requestBookInfo = axios.get(url);
  const bookInfo = requestBookInfo.then(
    (response: AxiosResponse<OpenDBType[]>) => {
      const { data } = response;
      return data;
    }
  );
  return bookInfo;
};
