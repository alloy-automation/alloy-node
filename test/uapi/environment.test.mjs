import { UAPI } from '../../index.mjs';
import { ENVIRONMENTS, getBaseUrl } from '../../utils.mjs';

describe('UAPI Environment Configuration', () => {
  const API_KEY = 'test-api-key';

  test('should use US URL by default', () => {
    const client = new UAPI(API_KEY);
    expect(client.baseUrl).toBe(ENVIRONMENTS.us);
  });

  test('should use US URL when explicitly set', () => {
    const client = new UAPI(API_KEY, 'us');
    expect(client.baseUrl).toBe(ENVIRONMENTS.us);
  });

  test('should use EU URL when environment is set to eu', () => {
    const client = new UAPI(API_KEY, 'eu');
    expect(client.baseUrl).toBe(ENVIRONMENTS.eu);
  });

  test('should fall back to US for unknown environments', () => {
    const client = new UAPI(API_KEY, 'unknown');
    expect(client.baseUrl).toBe(ENVIRONMENTS.us);
  });

  test('should pass the correct base URL to service instances', () => {
    const client = new UAPI(API_KEY, 'eu');
    
    // Verify that all service instances received the correct base URL
    expect(client.CRM.url).toBe(ENVIRONMENTS.eu);
    expect(client.Commerce.url).toBe(ENVIRONMENTS.eu);
    expect(client.Accounting.url).toBe(ENVIRONMENTS.eu);
    expect(client.User.url).toBe(ENVIRONMENTS.eu);
    expect(client.Webhooks.url).toBe(ENVIRONMENTS.eu);
  });

  test('should be case insensitive for environment names', () => {
    const client1 = new UAPI(API_KEY, 'EU');
    const client2 = new UAPI(API_KEY, 'Eu');
    expect(client1.baseUrl).toBe(ENVIRONMENTS.eu);
    expect(client2.baseUrl).toBe(ENVIRONMENTS.eu);
  });
});

describe('getBaseUrl', () => {
  test('should return US URL by default', () => {
    expect(getBaseUrl()).toBe(ENVIRONMENTS.us);
  });

  test('should return US URL when explicitly set', () => {
    expect(getBaseUrl('us')).toBe(ENVIRONMENTS.us);
  });

  test('should return EU URL when environment is set to eu', () => {
    expect(getBaseUrl('eu')).toBe(ENVIRONMENTS.eu);
  });

  test('should be case insensitive', () => {
    expect(getBaseUrl('EU')).toBe(ENVIRONMENTS.eu);
    expect(getBaseUrl('Eu')).toBe(ENVIRONMENTS.eu);
  });

  test('should fall back to US for unknown environments', () => {
    expect(getBaseUrl('unknown')).toBe(ENVIRONMENTS.us);
  });
});
