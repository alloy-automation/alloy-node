import { default as axios } from 'axios';
import { baseUrl, euBaseUrl } from '../utils.mjs';

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
  url = baseUrl;

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.CRM = new CRM(this.apiKey);
    this.Commerce = new Commerce(this.apiKey);
    this.Accounting = new Accounting(this.apiKey);
    this.User = new User(this.apiKey);
    this.Webhooks = new Webhooks(this.apiKey);
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  async identify(username) {
    const options = {
      url: `${url}/users/${username}`,
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

  setRegion(region) {
    const regionUrl = this.getDomain(region);
    try {
      this.CRM.setUrl(regionUrl);
      this.Commerce.setUrl(regionUrl);
      this.Accounting.setUrl(regionUrl);
      this.Webhooks.setUrl(regionUrl);
      this.url = regionUrl;
    } catch (error) {
      throw error;
    }
  }

  async connect(connectionId) {
    this.connectionId = connectionId;
    this.CRM.connect(connectionId);
    this.Commerce.connect(connectionId);
    this.Accounting.connect(connectionId);
    this.Webhooks.connect(connectionId);
  }

  getDomain(region) {
    const DEFAULT_REGION = 'us';
    const DOMAIN_MAP = {
      us: baseUrl,
      eu: euBaseUrl,
    };

    const key = region ? region.toLowerCase() : DEFAULT_REGION;

    if (!DOMAIN_MAP[key]) {
      throw new Error(`Invalid region: ${region}`);
    }

    return DOMAIN_MAP[key];
  }

  clear() {
    this.username = null;
    this.userId = null;
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
