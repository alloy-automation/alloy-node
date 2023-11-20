import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Integrations", () => {
  let userId, integrationId;

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

  test("should list integrations", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Integration.listIntegrations();
    expect(data).toBeDefined();
    expect(data.data[0]).toHaveProperty("integrationId");
    expect(data.data[0]).toHaveProperty("app");
    expect(data.data[0]).toHaveProperty("installed");
    expect(data.data[0]).toHaveProperty("workflows");

    integrationId = data.data[0].integrationId;
  });

  test("should get an integration", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Integration.getIntegration(integrationId);
    expect(data).toBeDefined();
    expect(data.data).toHaveProperty("integrationId");
    expect(data.data).toHaveProperty("app");
    expect(data.data).toHaveProperty("installed");
    expect(data.data).toHaveProperty("workflows");
  });
});
