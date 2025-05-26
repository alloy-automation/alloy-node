import { default as axios } from "axios";
import { baseUrl } from "../utils.mjs";

export class CRM {
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

  async listAccounts(filter) {
    const options = {
      url: `${this.url}/one/crm/accounts?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async getAccountsCount() {
    const options = {
      url: `${this.url}/one/crm/accounts/count?connectionId=${this.connectionId}`,
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

  async getAccount(accountId, filter) {
    const options = {
      url: `${this.url}/one/crm/accounts/${accountId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async createAccount(data) {
    const options = {
      url: `${this.url}/one/crm/accounts?connectionId=${this.connectionId}`,
      method: "POST",
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

  async updateAccount(accountId, data) {
    const options = {
      url: `${this.url}/one/crm/accounts/${accountId}?connectionId=${this.connectionId}`,
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

  async deleteAccount(accountId) {
    const options = {
      url: `${this.url}/one/crm/accounts/${accountId}?connectionId=${this.connectionId}`,
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

  async listContacts(filter) {
    const options = {
      url: `${this.url}/one/crm/contacts?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async getContactsCount() {
    const options = {
      url: `${this.url}/one/crm/contacts/count?connectionId=${this.connectionId}`,
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

  async getContact(contactId, filter) {
    const options = {
      url: `${this.url}/one/crm/contacts/${contactId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async createContact(data) {
    const options = {
      url: `${this.url}/one/crm/contacts?connectionId=${this.connectionId}`,
      method: "POST",
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

  async updateContact(contactId, data) {
    const options = {
      url: `${this.url}/one/crm/contacts/${contactId}?connectionId=${this.connectionId}`,
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

  async deleteContact(contactId) {
    const options = {
      url: `${this.url}/one/crm/contacts/${contactId}?connectionId=${this.connectionId}`,
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

  async listLeads(filter) {
    const options = {
      url: `${this.url}/one/crm/leads?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async getLeadsCount() {
    const options = {
      url: `${this.url}/one/crm/leads/count?connectionId=${this.connectionId}`,
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

  async getLead(leadId, filter) {
    const options = {
      url: `${this.url}/one/crm/leads/${leadId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async createLead(data) {
    const options = {
      url: `${this.url}/one/crm/leads?connectionId=${this.connectionId}`,
      method: "POST",
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

  async updateLead(leadId, data) {
    const options = {
      url: `${this.url}/one/crm/leads/${leadId}?connectionId=${this.connectionId}`,
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

  async deleteLead(leadId) {
    const options = {
      url: `${this.url}/one/crm/leads/${leadId}?connectionId=${this.connectionId}`,
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

  async listNotes(filter) {
    const options = {
      url: `${this.url}/one/crm/notes?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async getNotesCount() {
    const options = {
      url: `${this.url}/one/crm/notes/count?connectionId=${this.connectionId}`,
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

  async getNote(noteId, filter) {
    const options = {
      url: `${this.url}/one/crm/notes/${noteId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async createNote(data) {
    const options = {
      url: `${this.url}/one/crm/notes?connectionId=${this.connectionId}`,
      method: "POST",
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

  async updateNote(noteId, data) {
    const options = {
      url: `${this.url}/one/crm/notes/${noteId}?connectionId=${this.connectionId}`,
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

  async deleteNote(noteId) {
    const options = {
      url: `${this.url}/one/crm/notes/${noteId}?connectionId=${this.connectionId}`,
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

  async listTasks(filter) {
    const options = {
      url: `${this.url}/one/crm/tasks?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async getTasksCount() {
    const options = {
      url: `${this.url}/one/crm/tasks/count?connectionId=${this.connectionId}`,
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

  async getTask(taskId, filter) {
    const options = {
      url: `${this.url}/one/crm/tasks/${taskId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
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

  async createTask(data) {
    const options = {
      url: `${this.url}/one/crm/tasks?connectionId=${this.connectionId}`,
      method: "POST",
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

  async updateTask(taskId, data) {
    const options = {
      url: `${this.url}/one/crm/tasks/${taskId}?connectionId=${this.connectionId}`,
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

  async deleteTask(taskId) {
    const options = {
      url: `${this.url}/one/crm/tasks/${taskId}?connectionId=${this.connectionId}`,
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

  async listOpportunities(filter) {
    const options = {
      url: `${this.url}/one/crm/opportunities?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async getOpportunitiesCount() {
    const options = {
      url: `${this.url}/one/crm/opportunities/count?connectionId=${this.connectionId}`,
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

  async getOpportunity(opportunityId, filter) {
    const options = {
      url: `${this.url}/one/crm/opportunities/${opportunityId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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

  async createOpportunity(data) {
    const options = {
      url: `${this.url}/one/crm/opportunities?connectionId=${this.connectionId}`,
      method: "POST",
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

  async updateOpportunity(opportunityId, data) {
    const options = {
      url: `${this.url}/one/crm/opportunities/${opportunityId}?connectionId=${this.connectionId}`,
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

  async deleteOpportunity(opportunityId) {
    const options = {
      url: `${this.url}/one/crm/opportunities/${opportunityId}?connectionId=${this.connectionId}`,
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

  async listUsers(filter) {
    const options = {
      url: `${this.url}/one/crm/users?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
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

  async listUsersCount() {
    const options = {
      url: `${this.url}/one/crm/users/count?connectionId=${this.connectionId}`,
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

  async getUser(userId, filter) {
    const options = {
      url: `${this.url}/one/crm/users/${userId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

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
      url: `${this.url}/one/crm/users?connectionId=${this.connectionId}`,
      method: "POST",
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

  async updateUser(userId, data) {
    const options = {
      url: `${this.url}/one/crm/users/${userId}?connectionId=${this.connectionId}`,
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

  async deleteUser(userId) {
    const options = {
      url: `${this.url}/one/crm/users/${userId}?connectionId=${this.connectionId}`,
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
