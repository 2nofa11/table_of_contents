import axios, { AxiosResponse } from "axios";
import { openDBType } from "./opendbData";

export const fetchOpenDB = async () => {
  // APIを取得
  const query = "978-4-7853-0001-2";
  const url = `https://api.openbd.jp/v1/get?isbn=${query}&pretty`;
  const requestBookInfo = axios(url);
  const bookInfo = requestBookInfo.then(
    (response: AxiosResponse<openDBType[]>) => {
      const { data } = response;
      console.log(JSON.stringify(data[0].onix.CollateralDetail.TextContent));
      return data;
    }
  );
  return bookInfo;
};
