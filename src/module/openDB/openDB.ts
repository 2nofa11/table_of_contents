import axios, { AxiosResponse } from "axios";
import { OpenDBType } from "./openDB-type";

export const fetchOpenDB = async () => {
  // APIを取得
  const query = "978-4-7853-0001-2";
  const url = `https://api.openbd.jp/v1/get?isbn=${query}&pretty`;
  const requestBookInfo = axios.get(url);
  const bookInfo = requestBookInfo.then(
    (response: AxiosResponse<OpenDBType[]>) => {
      const { data } = response;
      console.log(JSON.stringify(data));
      return data;
    }
  );
  return bookInfo;
};
