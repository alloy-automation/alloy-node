## Compliance Methods

### Delete User Logs

Delete user logs for compliance purposes. Can be used in conjunction with a GDPR or CCPA request.

```javascript
const apiClient = new Compliance("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.deleteUserLogs();
```

