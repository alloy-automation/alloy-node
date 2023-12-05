import { Embedded } from "../../index.mjs";
import { apiKey } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("[Embedded]: Logs", () => {
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

//   test("should get workflow errors", async () => {
//     const apiClient = new Embedded(apiKey);
//     await apiClient.identify(userId);
//     let data = await apiClient.Logs.getWorkflowErrors();
//     expect(data).toBeDefined();
//   });

//   test("should get workflow logs", async () => {
//     const apiClient = new Embedded(apiKey);
//     await apiClient.identify(userId);
//     let data = await apiClient.Logs.getWorkflowLogs();
//     expect(data).toBeDefined();
//   });

//   test("should rerun workflow execution", async () => {
//     const apiClient = new Embedded(apiKey);
//     await apiClient.identify(userId);
//     let data = await apiClient.Logs.rerunWorkflowExecution();
//     expect(data).toBeDefined();
//     expect(data).toHaveProperty("message");
//     expect(data).toHaveProperty("executionUuid");
//   });
});
