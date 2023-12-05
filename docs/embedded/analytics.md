## Analytics Methods

### Get Workflow Analytics

Retrieves analytics data for the specified workflow, based on the identified user. 

```javascript
const apiClient = new Analytics(apiKey);
await apiClient.identify(userId);
let data = await apiClient.get(workflowId);
```
