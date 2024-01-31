import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

export class HeadlessInstallation {
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

    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  /**
   * @param {string} userId - The user ID to use for the requests
   * @returns {Promise<void>}
   */
  async setUserId(userId) {
    this.userId = userId;
  }

  /**
   * @param {string} username - The username to use for the requests
   * @returns {Promise<void>}
   */
  async setUsername(username) {
    this.username = username;
  }

  /**
   * @typedef DropdownOptions
   * @property {string} displayName - The label for the dropdown option
   * @property {string|number} value - The value for the dropdown option
   */

  /**
   * @typedef BlockFields
   * @property {string} name - The name of the form field
   * @property {string} displayName - The display name of the form field
   * @property {string} type - The type of the form field
   * @property {string} [subType] - The subtype of the field
   * @property {boolean} required - Whether the form field is required
   * @property {DropdownOptions[]} options - The options for the form field, if the field is a dropdown
   */

  /**
   * @typedef Blocks
   * @property {string} workflowId - The workflow ID
   * @property {string} blockId - The Block ID
   * @property {string} app - The app name
   * @property {BlockFields[]} fields - The form fields to fill out for the installation
   */

  /** @typedef InstallationResponse
   * @property {string} installationId - The installation ID
   * @property {Blocks[]} data - The form field groups to fill out for the installation
   */

  /**
   * @param {Object} data
   * @param {string} data.integrationId - The integration ID to install
   * @param {string[]} [data.credentialIds] - The credential IDs to use for the installation, optional if user has only authorized each app once
   * @param {string[]} [data.workflowIds] - The workflow IDs to install, if you want to install specific workflows from the integration
   * @returns {Promise<InstallationResponse>} The installation ID and form fields to fill out for the installation
   */

  async start(data) {
    const options = {
      url: `${baseUrl}/headless/startInstallation`,
      method: 'POST',
      headers: this.headers,
      data: {
        userId: this.userId,
        ...data,
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

  /**
   * @typedef CompleteInstallationResponse
   * @property {string} message - Response message
   */

  /**
   * @typedef FilledBlockFields
   * @property {string} name - The name of the form field
   * @property {string|number|boolean} value - The value of the form field
   */

  /**
   * @typedef FIlledBlocks
   * @property {string} workflowId - The workflow ID
   * @property {string} blockId - The Block ID
   * @property {Array<FilledBlockFields>} fields - The filled in form field data
   */

  /**
   * @param {Object} data
   * @param {string} data.installationId - The installation ID
   * @param {Array<FIlledBlocks>} data.data - The filled in form field data
   *
   * @returns {Promise<CompleteInstallationResponse>} The response message
   */
  async complete(data) {
    const options = {
      url: `${baseUrl}/headless/completeInstallation`,
      method: 'POST',
      headers: this.headers,
      data,
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
