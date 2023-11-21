import { default as axios } from "axios";
import { baseUrl } from "../utils.mjs";

export class Logs {
  headers = {};
  username = null;
  userId = null;
  connectionId = null;
  url = baseUrl;

  constructor(apiKey) {
    this.apiKey = apiKey;

    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  async setUserId(userId) {
    this.userId = userId;
  }

  async setUsername(username) {
    this.username = username;
  }

  async getWorkflowErrors(workflowId) {
    const options = {
      url: `${baseUrl}/workflows/${workflowId}/errors?userId=${this.userId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getWorkflowLogs(workflowId) {
    const options = {
      url: `${baseUrl}/workflows/${workflowId}/logs?userId=${this.userId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async rerunWorkflowExecution(workflowId, executionId) {
    const options = {
      url: `${baseUrl}/workflows/${workflowId}/rerun/${executionId}?userId=${this.userId}`,
      method: "POST",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }
}
