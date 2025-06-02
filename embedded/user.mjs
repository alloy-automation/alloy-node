import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

export class User {
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
  async getUser() {
    const options = {
      url: `${this.url}/users/${this.userId}`,
      method: 'GET',
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

  async listUsers() {
    const options = {
      url: `${this.url}/users`,
      method: 'GET',
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

  async createUser(data) {
    const options = {
      url: `${this.url}/users`,
      method: 'POST',
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

  async createBatchUsers(data) {
    const options = {
      url: `${this.url}/users/batch`,
      method: 'POST',
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

  async updateUser(data) {
    const options = {
      url: `${this.url}/users/${this.userId}`,
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

  async deleteUser() {
    const options = {
      url: `${this.url}/users/${this.userId}`,
      method: 'DELETE',
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
