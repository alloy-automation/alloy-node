import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

export class Webhooks {
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

  async setUser(userId) {
    this.userId = userId;
  }

  async connect(connectionId) {
    this.connectionId = connectionId;
  }

  async setUrl(regionUrl) {
    this.url = regionUrl;
  }

  // ------------------------------------------------------------------------------------
  // UAPI – Webhooks
  // ------------------------------------------------------------------------------------

  async listSubscriptions() {
    const options = {
      url: `${this.url}/one/webhooks?userId=${data.userId}&connectionId=${this.connectionId}`,
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

  async getSubscription(subscriptionId) {
    const options = {
      url: `${this.url}/one/webhooks/${subscriptionId}?connectionId=${this.connectionId}`,
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

  async createSubscription(data) {
    const options = {
      url: `${this.url}/one/webhooks?connectionId=${this.connectionId}`,
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

  async deleteSubscription(data) {
    const options = {
      url: `${this.url}/one/webhooks/${data.subscriptionId}?connectionId=${this.connectionId}`,
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
