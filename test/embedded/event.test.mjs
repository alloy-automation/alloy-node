import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Events", () => {
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

  test("should list events", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Events.list();
    expect(data).toBeDefined();
    expect(data.data[0]).toHaveProperty("name");
    expect(data.data[0]).toHaveProperty("description");
    expect(data.data[0]).toHaveProperty("body");
  });

  //   test("should run event", async () => {
  //     const apiClient = new Embedded(apiKey);
  //     await apiClient.identify(userId);
  //     let eventName = "Get Customers";
  //     let bodyData = {"name": "Gregg"};
  //     let data = await apiClient.Events.run(eventName, bodyData);
  //     expect(data).toBeDefined();
  //   });
});
