import { UAPI } from '../../index.mjs';
import { ENVIRONMENTS } from '../../utils.mjs';

describe('UAPI Environment Configuration', () => {
  const API_KEY = 'test-api-key';

  test('should use production URL by default', () => {
    const client = new UAPI(API_KEY);
    expect(client.baseUrl).toBe(ENVIRONMENTS.production);
  });

  test('should use production URL when explicitly set', () => {
    const client = new UAPI(API_KEY, 'production');
    expect(client.baseUrl).toBe(ENVIRONMENTS.production);
  });

  test('should use staging URL when environment is staging', () => {
    const client = new UAPI(API_KEY, 'staging');
    expect(client.baseUrl).toBe(ENVIRONMENTS.staging);
  });

  test('should use development URL when environment is development', () => {
    const client = new UAPI(API_KEY, 'development');
    expect(client.baseUrl).toBe(ENVIRONMENTS.development);
  });

  test('should use local URL when environment is local', () => {
    const client = new UAPI(API_KEY, 'local');
    expect(client.baseUrl).toBe(ENVIRONMENTS.local);
  });

  test('should fall back to production for unknown environments', () => {
    const client = new UAPI(API_KEY, 'unknown');
    expect(client.baseUrl).toBe(ENVIRONMENTS.production);
  });

  test('should pass the correct base URL to service instances', () => {
    const client = new UAPI(API_KEY, 'staging');
    
    // Verify that all service instances received the correct base URL
    expect(client.CRM.url).toBe(ENVIRONMENTS.staging);
    expect(client.Commerce.url).toBe(ENVIRONMENTS.staging);
    expect(client.Accounting.url).toBe(ENVIRONMENTS.staging);
    expect(client.User.url).toBe(ENVIRONMENTS.staging);
    expect(client.Webhooks.url).toBe(ENVIRONMENTS.staging);
  });

  test('should be case insensitive for environment names', () => {
    const client1 = new UAPI(API_KEY, 'STAGING');
    const client2 = new UAPI(API_KEY, 'StAgInG');
    
    expect(client1.baseUrl).toBe(ENVIRONMENTS.staging);
    expect(client2.baseUrl).toBe(ENVIRONMENTS.staging);
  });
});
