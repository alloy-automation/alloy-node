import { Integration } from "../../embedded/integration.mjs";
import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Analytics", () => {
  let userId, workflowId;

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

  test("should list workflows", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Workflows.list();
    expect(data).toBeDefined();
    expect(data.data[0]).toHaveProperty("workflowId");
    expect(data.data[0]).toHaveProperty("integrationId");
    expect(data.data[0]).toHaveProperty("name");
    expect(data.data[0]).toHaveProperty("createdAt");
    expect(data.data[0]).toHaveProperty("updatedAt");
    expect(data.data[0]).toHaveProperty("installed");
    expect(data.data[0]).toHaveProperty("active");
    expect(data.data[0]).toHaveProperty("version");
    // expect(data.data[0]).toHaveProperty("installedVersion");
    expect(data.data[0]).toHaveProperty("blocks");

    workflowId = data.data[0].workflowId;
  });

  test("should get workflow analytics", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Analytics.get(workflowId);
    expect(data).toBeDefined();
  });
});
