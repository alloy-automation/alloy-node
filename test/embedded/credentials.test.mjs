import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Credentials", () => {
  let userId, credentialId;

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

  test("should create a credential", async () => {
    let credential = {
      credential: {
        type: "wooCommerce",
        data: {
          consumerKey: "XXX",
          consumerSecret: "XXX",
          url: "XXX",
        },
      },
    };
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Credentials.create(credential);

    expect(data).toBeDefined();
    expect(data).toHaveProperty("success");
    expect(data).toHaveProperty("credentialId");

    credentialId = data.credentialId;
  });

  test("should list user credentials", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Credentials.listUserCredentials();
    expect(data).toBeDefined();
    expect(data.data[0]).toHaveProperty("credentialId");
    expect(data.data[0]).toHaveProperty("type");
    expect(data.data[0]).toHaveProperty("createdAt");
    expect(data.data[0]).toHaveProperty("updatedAt");
  });

  test("should get metadata", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Credentials.getMetadata();
    expect(data).toBeDefined();
    expect(data.data[0]).toHaveProperty("name");
    expect(data.data[0]).toHaveProperty("icon");
    expect(data.data[0]).toHaveProperty("isOauth");
    expect(data.data[0]).toHaveProperty("properties");
  });

  test("should delete a credential", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Credentials.delete(credentialId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("success");
  });

//   test("should generate an oauth credential", async () => {
//     const apiClient = new Embedded(apiKey);
//     await apiClient.identify(userId);
//     let data = await apiClient.Credentials.generateOauthLink('shopify', 'integrationId');
//     expect(data).toBeDefined();
//     expect(data).toHaveProperty("redirectUrl");
//   });
});
