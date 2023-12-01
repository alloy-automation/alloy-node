## Credentials Methods

### Create Credential

Creates a new user credential.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify(userId);
let credential = {
  credential: {
    type: "wooCommerce",
    data: {
      consumerKey: "XXX",
      consumerSecret: "XXX",
      url: "XXX",
    },
  },
};
let data = await apiClient.Credentials.create(credential);
```

### List User Credentials

Lists all credentials associated with the user.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.Credentials.listUserCredentials();
```

### Get Metadata

Retrieves metadata for user credentials.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.Credentials.getMetadata();
```

### Delete Credential

Deletes a specific user credential.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.Credentials.delete(credentialId);
```

### Generate OAuth Link

Generates an OAuth link for a specific app and integration.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.Credentials.generateOauthLink('shopify', 'integrationId');
```