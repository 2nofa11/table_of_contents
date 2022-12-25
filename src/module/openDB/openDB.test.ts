import { extractTextContents, fetchOpenDB } from "./openDB";
// import axios from "axios";
import axios from "axios";
import { mockData } from "./mock_data/responseMock";
import { TextContent } from "./openDB-type";

jest.mock("axios");

(axios.get as any).mockResolvedValue({ data: [mockData] });

describe("fetchOpenDB test", () => {
  it("mockのデータをレスポンスで出力できているか確認", async () => {
    const res = await fetchOpenDB();
    expect(res[0]).toEqual(mockData);
  });
});

describe("extractTextContents", () => {
  it("目次情報を抽出できるか確認", async () => {
    const res = await extractTextContents();
    expect(res[0].Text).toBe("ここに目次情報");
  });
});
