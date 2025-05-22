// Supported environments and their base URLs
export const ENVIRONMENTS = {
  us: 'https://embedded.runalloy.com/2024-03',
  eu: 'https://eu-embedded.runalloy.com/2024-03'
};

// Default to production for backward compatibility
export const baseUrl = ENVIRONMENTS.us;

export const connectionId = '';
export const apiKey = '';
export const shopifyConnectionId = '';
export const salesforceConnectionId = '';
export const zohoCRMConnectionId = '';
export const quickbooksConnectionId = '';
export const netsuiteConnectionId = '';
;

/**
 * Get base URL for a specific environment
 * @param {string} [env='us'] - Environment name (us, eu)
 * @returns {string} The base URL for the specified environment
 */
export function getBaseUrl(env = 'us') {
  const normalizedEnv = env?.toLowerCase() || 'us';
  return ENVIRONMENTS[normalizedEnv] || ENVIRONMENTS.us;
}