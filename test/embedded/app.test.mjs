import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Apps", () => {
  test("should get apps", async () => {
    const apiClient = new Embedded(apiKey);
    let data = await apiClient.App.getApps()
    expect(data).toBeDefined();
    expect(data.data[0]).toHaveProperty("name");
    expect(data.data[0]).toHaveProperty("icon");
    expect(data.data[0]).toHaveProperty("type");
  });
});
