import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

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

  setUrl(regionUrl) {
    this.url = regionUrl;
  }

  async getWorkflowErrors(workflowId) {
    const options = {
      url: `${this.url}/workflows/${workflowId}/errors`,
      method: 'GET',
      headers: this.headers,
      params: {
        userId: this.userId,
      },
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

  async getWorkflowLogs(workflowId, page, limit, order, error) {
    const options = {
      url: `${this.url}/workflows/${workflowId}/logs`,
      method: 'GET',
      headers: this.headers,
      params: {
        userId: this.userId,
        page,
        limit,
        order,
        error,
      },
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
      url: `${this.url}/workflows/${workflowId}/rerun/${executionId}`,
      method: 'POST',
      headers: this.headers,
      params: {
        userId: this.userId,
      },
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
