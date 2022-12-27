import { extractTextContents, fetchOpenDB } from "./openDB";
// import axios from "axios";
import axios from "axios";
import { mockData, mockDataNoTOC } from "./mock_data/responseMock";
import { OpenDBType } from "./openDB-type";

jest.mock("axios");

describe("目次情報がある場合", () => {
  (axios.get as any).mockResolvedValue({ data: [mockData] });

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
  (axios.get as any).mockResolvedValue({ data: [mockDataNoTOC] });
  it("mockのデータをレスポンスで出力できているか確認", async () => {
    const res = await fetchOpenDB();
    expect(res[0]).toEqual(mockDataNoTOC);
  });
});
