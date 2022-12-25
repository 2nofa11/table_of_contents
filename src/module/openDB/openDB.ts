import axios, { AxiosResponse } from "axios";
import { OpenDBType, TextContent } from "./openDB-type";

export const extractTextContents = async (): Promise<TextContent[]> => {
  const openDBInfo = await fetchOpenDB();
  const tableOfContent: TextContent[] =
    openDBInfo[0].onix.CollateralDetail.TextContent.filter((content) => {
      return content.TextType === "04";
    });
  return tableOfContent;
};

export const fetchOpenDB = async (): Promise<OpenDBType[]> => {
  // APIを取得
  const query = "978-4-7853-0001-2";
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
