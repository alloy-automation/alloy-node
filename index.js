const axios = require("axios");

class Alloy {
  headers = {};
  username = null;

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  async identify(username) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users/${username}`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      this.username = responseData?.data?.username;
    } catch (err) {
      this.username = null;
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  clear() {
    this.username = null;
  }

  async event(eventName, payload) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/run/event`,
      method: "POST",
      headers: this.headers,
      data: {
        appEvent: eventName,
        userId: this.username,
        data: payload,
      },
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getUser(user) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users/${user}`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getUsers() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async createUser(data) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async updateUser(data) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users/${this.username}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async deleteUser() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users/${this.username}`,
      method: "DELETE",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getUserToken() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users/${this.username}/token`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getWorkflows() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/workflows`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async reactivate(data) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/workflows/activate`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async deactivate(data) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/workflows/deactivate`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async disableAllWorkflows() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users/${this.username}/deactivate-workflows`,
      method: "PUT",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getLogs(workflowId) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/workflows/${workflowId}/logs`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getLogs(workflowId) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/workflows/${workflowId}/logs`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async deleteLogs() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/users/${this.username}/logs`,
      method: "DELETE",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getAnalytics(workflowId) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/workflows/${workflowId}/analytics`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getIntegrations() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/Integrations`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async getApps() {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/apps`,
      method: "GET",
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }

  async run(workflow, payload) {
    const options = {
      url: `https://embedded.runalloy.com/2022-09/run/workflow`,
      method: "POST",
      headers: this.headers,
      data: {
        workflow,
        userId: this.username,
        data: payload,
      },
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      throw new Error("ERROR MESSAGE"); // Change msg here
    }
  }
}

module.exports = Alloy;
