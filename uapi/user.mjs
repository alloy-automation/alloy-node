import { default as axios } from 'axios';

export class User {
  headers = {};
  username = null;
  userId = null;
  connectionId = null;
  url = null;
  baseUrl = null;

  /**
   * Create a new User instance
   * @param {string} apiKey - The API key for authentication
   * @param {string} [baseUrl] - The base URL for API requests
   */
  constructor(apiKey, baseUrl) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl || 'https://embedded.runalloy.com/2024-03';
    this.url = this.baseUrl;
    
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  connect(connectionId) {
    this.connectionId = connectionId;
  }

  async listUsers() {
    const options = {
      url: `${this.url}/one/users`,
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

  async getUser(userId) {
    const options = {
      url: `${this.url}/one/users/${userId}`,
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
      url: `${this.url}/one/users/`,
      method: 'POST',
      headers: this.headers,
      data: data
    };
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
        console.log(err.response)
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updateUser(userId, data) {
    const options = {
      url: `${this.url}/one/users/${userId}`,
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

  async deleteUser(userId) {
    const options = {
      url: `${this.url}/one/users/${userId}`,
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
