import { default as axios } from "axios";
import { baseUrl } from "../utils.mjs";

export class Link {
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

  async generate(integrationId) {
    const options = {
      url: `${baseUrl}/users/${this.userId}/integrations/${integrationId}/install-url`,
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
}
