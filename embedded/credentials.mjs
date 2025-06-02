import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

export class Credentials {
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
  async listUserCredentials() {
    const options = {
      url: `${this.url}/users/${this.userId}/credentials`,
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

  async getMetadata() {
    const options = {
      url: `${this.url}/metadata/credentials`,
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

  async getMetadataByApp(app) {
    const options = {
      url: `${this.url}/metadata/credentials/${app}`,
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

  async delete(credentialId) {
    const options = {
      url: `${this.url}/users/${this.userId}/credentials/${credentialId}`,
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
  /**
   * @typedef CreateCredentialResponse
   * @property {string} credentialId
   * @property {boolean} success
   */

  /**
   * @param {Object} data
   * @param {Object} data.credential
   * @param {string} data.credential.type - App Name
   * @param {Object} data.credential.data - Credential Data
   * @returns {Promise<CreateCredentialResponse>}
   */
  async create(data) {
    if (!data.userId) {
      data.userId = this.userId;
    }
    const options = {
      url: `${this.url}/headless/credentials`,
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

  /**
   * @typedef GenerateOauthLinkResponse
   * @property {Object} data
   * @property {string} data.oauthUrl - Oauth Url
   */

  /**
   * @param {string} app - App Name
   * @returns {Promise<GenerateOauthLinkResponse>}
   */

  async generateOauthLink(app) {
    const options = {
      url: `${this.url}/headless/oauthUrl`,
      method: 'GET',
      headers: this.headers,
      params: {
        app: app,
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
