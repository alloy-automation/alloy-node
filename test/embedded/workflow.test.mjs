import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Workflow", () => {
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

  // Cannot list workflows for the given user
  //   test("should list workflow versions", async () => {
  //     const apiClient = new Embedded(apiKey);
  //     await apiClient.identify(userId);
  //     let data = await apiClient.Workflows.listVersions(workflowId);
  //     expect(data).toBeDefined();
  //     expect(data.data[0]).toHaveProperty("versionId");
  //     expect(data.data[0]).toHaveProperty("versionName");
  //     expect(data.data[0]).toHaveProperty("lastModified");
  //     expect(data.data[0]).toHaveProperty("status");
  //   },30000);

  test("should get a workflow", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Workflows.get(workflowId);
    expect(data).toBeDefined();
    expect(data.data).toHaveProperty("workflowId");
    expect(data.data).toHaveProperty("integrationId");
    expect(data.data).toHaveProperty("name");
    expect(data.data).toHaveProperty("createdAt");
    expect(data.data).toHaveProperty("updatedAt");
    expect(data.data).toHaveProperty("installed");
    expect(data.data).toHaveProperty("active");
    expect(data.data).toHaveProperty("version");
    expect(data.data).toHaveProperty("installedVersion");
    expect(data.data).toHaveProperty("blocks");
  });

  test("should deactivate all workflows for a user", async () => {
    const apiClient = new Embedded(apiKey);
    await apiClient.identify(userId);
    let data = await apiClient.Workflows.deactivateAll(workflowId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("message");
  });

  //   test("should activate a workflow", async () => {
  //     const apiClient = new Embedded(apiKey);
  //     await apiClient.identify(userId);
  //     let data = await apiClient.Workflows.activate(workflowId);
  //     expect(data).toBeDefined();
  //     expect(data).toHaveProperty("activated");
  //   });

  //   test("should deactivate a workflow", async () => {
  //     const apiClient = new Embedded(apiKey);
  //     await apiClient.identify(userId);
  //     let data = await apiClient.Workflows.deactivate(workflowId);
  //     expect(data).toBeDefined();
  //     expect(data).toHaveProperty("activated");
  //   });

  //   test("should upgrade a workflow", async () => {
  //     const apiClient = new Embedded(apiKey);
  //     await apiClient.identify(userId);
  //     let data = await apiClient.Workflows.upgrade(workflowId);
  //     expect(data).toBeDefined();
  //     expect(data).toHaveProperty("activated");
  //   });

//   test("should delete a workflow", async () => {
//     const apiClient = new Embedded(apiKey);
//     await apiClient.identify(userId);
//     let data = await apiClient.Workflows.delete(workflowId);
//     expect(data).toBeDefined();
//     expect(data).toHaveProperty("deleted");
//   });

});
