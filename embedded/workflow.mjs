import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

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

  setUrl(regionUrl) {
    this.url = regionUrl;
  }

  async list() {
    const options = {
      url: `${this.url}/workflows`,
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

  async listVersions(workflowId) {
    const options = {
      url: `${this.url}/workflows/${workflowId}/versions`,
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

  async get(workflowId) {
    const options = {
      url: `${this.url}/workflows/${workflowId}`,
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

  async deactivateAll() {
    const options = {
      url: `${this.url}/users/${this.userId}/deactivate-workflows`,
      method: 'PUT',
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
      userId: this.userId,
    };
    const options = {
      url: `${this.url}/workflows/activate`,
      method: 'PUT',
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
      userId: this.userId,
    };
    const options = {
      url: `${this.url}/workflows/deactivate`,
      method: 'PUT',
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
      url: `${this.url}/workflows/${workflowId}/upgrade`,
      method: 'PUT',
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

  async delete(workflowId) {
    const options = {
      url: `${this.url}/workflows/${workflowId}`,
      method: 'DELETE',
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
