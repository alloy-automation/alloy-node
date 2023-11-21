import { default as axios } from "axios";
import { baseUrl } from "../utils.mjs";

export class Workflows {
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

  async list() {
    const options = {
      url: `${baseUrl}/workflows?userId=${this.userId}`,
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

  async listVersions(workflowId) {
    const options = {
      url: `${baseUrl}/workflows/${workflowId}/versions?userId=${this.userId}`,
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

  async get(workflowId) {
    const options = {
      url: `${baseUrl}/workflows/${workflowId}?userId=${this.userId}`,
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

  async deactivateAll() {
    const options = {
      url: `${baseUrl}/users/${this.userId}/deactivate-workflows`,
      method: "PUT",
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

  async activate(workflowId) {
    let data = {
      workflowId,
      userId: this.userId
    };
    const options = {
      url: `${baseUrl}/workflows/activate`,
      method: "PUT",
      headers: this.headers,
      data: data,
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

  async deactivate(workflowId) {
    let data = {
      workflowId,
      userId: this.userId
    };
    const options = {
      url: `${baseUrl}/workflows/deactivate`,
      method: "PUT",
      headers: this.headers,
      data: data,
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

  async upgrade(workflowId) {
    const options = {
      url: `${baseUrl}/workflows/${workflowId}/upgrade?userId=${this.userId}`,
      method: "PUT",
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

  async delete(workflowId) {
    const options = {
      url: `${baseUrl}/workflows/${workflowId}?userId=${this.userId}`,
      method: "DELETE",
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
