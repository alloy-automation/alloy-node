import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Users", () => {
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

  test("should update a user", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);

    let body = {
      fullName: `user-${uuidv4()}`,
    };
    let data = await apiClient.User.updateUser(body);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("userId");
  });

  test("should get a user", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);

    let data = await apiClient.User.getUser();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("userId");
    expect(data).toHaveProperty("fullName");
    expect(data).toHaveProperty("username");
  });

  test("should list all users", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);

    let data = await apiClient.User.listUsers();
    expect(data.data).toBeDefined();
    expect(data.data[0]).toHaveProperty("userId");
    expect(data.data[0]).toHaveProperty("fullName");
    // expect(data[0]).toHaveProperty("username");
  });

  test("should batch create users", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);

    let batchData = {
      users: [
        { username: `user-${uuidv4()}`, fullName: "Joe Smoe" },
        { username: `user-${uuidv4()}` },
        { username: `user-${uuidv4()}`, fullName: "Jane Doe" },
      ],
    };
    let data = await apiClient.User.createBatchUsers(batchData);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("message");
  });

  test("should delete a user", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);

    let data = await apiClient.User.deleteUser();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("success");
  });
});
