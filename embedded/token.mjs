import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

export class Tokens {
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

  async setUrl(regionUrl) {
    this.url = regionUrl;
  }

  async listIntegrations() {
    const options = {
      url: `${this.url}/integrations?userId=${this.userId}`,
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

  async get() {
    const options = {
      url: `${this.url}/users/${this.userId}/token`,
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
}
