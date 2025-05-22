import { default as axios } from 'axios';
import { getBaseUrl } from '../utils.mjs';

import { CRM } from './crm.mjs';
import { Accounting } from './erp.mjs';
import { Commerce } from './commerce.mjs';
import { Webhooks } from './webhooks.mjs';
import { User } from './user.mjs';

export class UAPI {
  headers = {};
  username = null;
  userId = null;
  connectionId = null;
  url = null;

  /**
   * Create a new UAPI instance
   * @param {string} apiKey - The API key for authentication
   * @param {string} [environment='us'] - The environment to use (us, eu)
   */
  constructor(apiKey, environment = 'us') {
    this.apiKey = apiKey;
    this.environment = environment;
    this.baseUrl = getBaseUrl(environment);
    this.url = this.baseUrl; // Set the url property to baseUrl
    
    this.CRM = new CRM(this.apiKey, this.baseUrl);
    this.Commerce = new Commerce(this.apiKey, this.baseUrl);
    this.Accounting = new Accounting(this.apiKey, this.baseUrl);
    this.User = new User(this.apiKey, this.baseUrl);
    this.Webhooks = new Webhooks(this.apiKey, this.baseUrl);
    
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  async identify(username) {
    const options = {
      url: `${this.baseUrl}/users/${username}`,
      method: 'GET',
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      this.username = responseData?.data?.username;
      this.userId = responseData?.data?.userId;
      this.CRM.setUser(responseData?.data?.userId);
      this.Commerce.setUser(responseData?.data?.userId);
      this.Accounting.setUser(responseData?.data?.userId);
      this.Webhooks.setUser(responseData?.data?.userId);
    } catch (err) {
      this.username = null;
      this.userId = null;
      this.CRM.setUser(null);
      this.Commerce.setUser(null);
      this.Accounting.setUser(null);
      this.Webhooks.setUser(null);
      throw err.response.data.message;
    }
  }

  async connect(connectionId) {
    this.connectionId = connectionId;
    this.CRM.connect(connectionId);
    this.Commerce.connect(connectionId);
    this.Accounting.connect(connectionId);
    this.Webhooks.connect(connectionId);
  }

  clear() {
    this.username = null;
    this.userId = null;
    this.baseUrl = null;
    this.connectionId = null;
    this.CRM.connect(null);
    this.Commerce.connect(null);
    this.Accounting.connect(null);
    this.Webhooks.connect(null);
    this.CRM.setUser(null);
    this.Commerce.setUser(null);
    this.Accounting.setUser(null);
    this.Webhooks.setUser(null);
  }
}
