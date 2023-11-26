import { UAPI } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("UAPI – Create User", () => {
  let userId;

  test("should create a user", async () => {
    const apiClient = new UAPI(apiKey);
    
    let bodyData = {
        username: `gregg-${uuidv4()}`
    }
    let data = await apiClient.User.createUser(bodyData)
    expect(data).toBeDefined();
    expect(data).toHaveProperty("userId");

    userId = data.userId;
  });

  test("should get a user", async () => {
    const apiClient = new UAPI(apiKey);

    let data = await apiClient.User.getUser(userId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("userId");
    expect(data).toHaveProperty("username");
  });

  test("should list users", async () => {
    const apiClient = new UAPI(apiKey);

    let data = await apiClient.User.listUsers();
    expect(data).toBeDefined();
    expect(data.data[0]).toHaveProperty("userId");
  });


  test("should update a user", async () => {
    const apiClient = new UAPI(apiKey);

    let bodyData = {
        fullName: "Gregg"
    }
    let data = await apiClient.User.updateUser(userId, bodyData);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("userId");
    expect(data).toHaveProperty("username");
    expect(data.fullName).toEqual("Gregg");
  });


  test("should delete a user", async () => {
    const apiClient = new UAPI(apiKey);
    
    let data = await apiClient.User.deleteUser(userId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("success");
  });





});

