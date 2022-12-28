import { extractTextContents, fetchOpenDB } from "./openDB";
// import axios from "axios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockData, mockDataNoTOC } from "./mock_data/responseMock";
import { OpenDBType } from "./openDB-type";

let mockAxios: MockAdapter;
const query = "978-4-7853-0001-2";
const url = `https://api.openbd.jp/v1/get?isbn=${query}&pretty`;

describe("目次情報がある場合", () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockAxios.onGet(url).reply(200, [mockData]);
  });
  it("mockのデータをレスポンスで出力できているか確認", async () => {
    const res = await fetchOpenDB();
    expect(res[0]).toEqual(mockData);
  });

  it("目次情報を抽出できるか確認", async () => {
    const res = await extractTextContents();
    expect(res[0].Text).toBe("ここに目次情報");
  });
});

describe("目次情報がない場合", () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockAxios.onGet(url).reply(200, [mockDataNoTOC]);
  });
  it("mockのデータをレスポンスで出力できているか確認", async () => {
    const res = await fetchOpenDB();
    expect(res[0]).toEqual(mockDataNoTOC);
  });
  it("目次情報を抽出できるか確認", async () => {
    const res = await extractTextContents();
    expect(res.length).toBe(0);
  });
});
