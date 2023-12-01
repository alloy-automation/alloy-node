## Link Methods

### Generate Installation URL

Generate an external installation URL for a specific integration. This method is used for [Embedded Link](https://docs.runalloy.com/docs/embedded-link).

```javascript
const apiClient = new Link("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.generate(integrationId);
```

**Note:** Make sure to create a user and list integrations before calling the `generate` method to ensure a valid `userId` and `integrationId`.