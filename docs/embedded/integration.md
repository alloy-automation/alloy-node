## Integration Methods

### List Integrations

Retrieves a list of integrations associated with the user.

```javascript
const apiClient = new Integration("YOUR_API_KEY");
let data = await apiClient.listIntegrations();
```

### Get Integration

Retrieves details about a specific integration.

```javascript
const apiClient = new Integration("YOUR_API_KEY");
let integrationId = "your_integration_id"; // Replace with the actual integration ID
let data = await apiClient.getIntegration(integrationId);
```

