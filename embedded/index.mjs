import { default as axios } from 'axios';
import { ObjectId } from 'mongodb';
import { baseUrl, euBaseUrl } from '../utils.mjs';

import { User } from './user.mjs';
import { App } from './app.mjs';
import { Integration } from './integration.mjs';
import { Tokens } from './token.mjs';
import { Workflows } from './workflow.mjs';
import { Events } from './event.mjs';
import { Compliance } from './compliance.mjs';
import { Logs } from './logs.mjs';
import { Credentials } from './credentials.mjs';
import { Link } from './link.mjs';
import { Analytics } from './analytics.mjs';
import { HeadlessInstallation } from './headless.mjs';

export class Embedded {
  headers = {};
  username = null;
  userId = null;
  connectionId = null;
  url = baseUrl;

  /**
   * @param {string} apiKey - The API key to use for the requests
   */

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.User = new User(this.apiKey);
    this.App = new App(this.apiKey);
    this.Integration = new Integration(this.apiKey);
    this.Tokens = new Tokens(this.apiKey);
    this.Workflows = new Workflows(this.apiKey);
    this.Events = new Events(this.apiKey);
    this.Compliance = new Compliance(this.apiKey);
    this.Logs = new Logs(this.apiKey);
    this.Credentials = new Credentials(this.apiKey);
    this.Link = new Link(this.apiKey);
    this.Analytics = new Analytics(this.apiKey);
    this.HeadlessInstallation = new HeadlessInstallation(this.apiKey);

    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  async identify(username) {
    const options = {
      url: `${this.url}/users/${username}`,
      method: 'GET',
      headers: this.headers,
      data: {},
    };

    try {
      const responseData = await axios.request(options);
      this.username = responseData?.data?.username;
      this.userId = responseData?.data?.userId;

      this.User.setUserId(responseData?.data?.userId);
      this.User.setUsername(responseData?.data?.username);
      this.App.setUserId(responseData?.data?.userId);
      this.App.setUsername(responseData?.data?.username);
      this.Integration.setUserId(responseData?.data?.userId);
      this.Integration.setUsername(responseData?.data?.username);
      this.Tokens.setUserId(responseData?.data?.userId);
      this.Tokens.setUsername(responseData?.data?.username);
      this.Workflows.setUserId(responseData?.data?.userId);
      this.Workflows.setUsername(responseData?.data?.username);
      this.Events.setUserId(responseData?.data?.userId);
      this.Events.setUsername(responseData?.data?.username);
      this.Compliance.setUserId(responseData?.data?.userId);
      this.Compliance.setUsername(responseData?.data?.username);
      this.Logs.setUserId(responseData?.data?.userId);
      this.Logs.setUsername(responseData?.data?.username);
      this.Credentials.setUserId(responseData?.data?.userId);
      this.Credentials.setUsername(responseData?.data?.username);
      this.Link.setUserId(responseData?.data?.userId);
      this.Link.setUsername(responseData?.data?.username);
      this.Analytics.setUserId(responseData?.data?.userId);
      this.Analytics.setUsername(responseData?.data?.username);
      this.HeadlessInstallation.setUserId(responseData?.data?.userId);
      this.HeadlessInstallation.setUsername(responseData?.data?.username);
    } catch (err) {
      this.username = null;
      this.userId = null;
      throw err.response.data.message;
    }
  }

  setRegion(region) {
    const regionUrl = this.getDomain(region);
    try {
      this.User.setUrl(regionUrl);
      this.App.setUrl(regionUrl);
      this.Integration.setUrl(regionUrl);
      this.Tokens.setUrl(regionUrl);
      this.Workflows.setUrl(regionUrl);
      this.Events.setUrl(regionUrl);
      this.Compliance.setUrl(regionUrl);
      this.Logs.setUrl(regionUrl);
      this.Credentials.setUrl(regionUrl);
      this.Link.setUrl(regionUrl);
      this.Analytics.setUrl(regionUrl);
      this.HeadlessInstallation.setUrl(regionUrl);
      this.url = regionUrl;
    } catch (error) {
      throw error;
    }
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
  }
}
