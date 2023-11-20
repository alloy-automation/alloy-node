import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Token", () => {
  let userId;

  test("should create a user", async () => {
    let body = {
      username: `user-${uuidv4()}`,
    };
    const apiClient = new Embedded(apiKey);
    let data = await apiClient.User.createUser(body);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("userId");

    userId = data.userId;
  });
  
  test("should generate a token", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Tokens.get();    
    expect(data).toBeDefined();
    expect(data).toHaveProperty("token");
  });
});
