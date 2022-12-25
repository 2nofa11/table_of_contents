import { fetchOpenDB } from "./openDB";
// import axios from "axios";
import axios from "axios";
import { mockData } from "./mock_data/responseMock";
import { TextContent } from "./openDB-type";

jest.mock("axios");

(axios.get as any).mockResolvedValue({ data: [mockData] });

describe("fetchOpenDB test", () => {
  it("", async () => {
    const res = await fetchOpenDB();
    const tableOfContent: TextContent[] =
      res[0].onix.CollateralDetail.TextContent.filter((content) => {
        return content.TextType === "04";
      });
    console.log(JSON.stringify(tableOfContent));
    expect(tableOfContent[0].Text).toBe("ここに目次情報");
  });
});
