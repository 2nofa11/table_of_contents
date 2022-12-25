import { fetchOpenDB } from "./openDB";

describe("axiosのvさげてみた", () => {
  it("実際のデータを使用する", async () => {
    const result = await fetchOpenDB();
    expect(result.length).toBe(1);
  });
});
