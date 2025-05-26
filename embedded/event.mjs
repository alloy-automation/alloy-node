import { default as axios } from "axios";
import { baseUrl } from "../utils.mjs";

export class Events {
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

  async list() {
    const options = {
      url: `${this.url}/events`,
      method: "GET",
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

  async run(event, data) {
    let bodyData = {
      event: event,
      userId: this.userId,
      data,
    };
    const options = {
      url: `${this.url}/run/event`,
      method: "POST",
      headers: this.headers,
      data: bodyData,
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
