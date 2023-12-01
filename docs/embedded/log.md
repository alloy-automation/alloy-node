## Logs Methods

### Get Workflow Errors

Retrieve errors associated with a specific workflow.

```javascript
const apiClient = new Logs("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.getWorkflowErrors();
```

### Get Workflow Logs

Retrieve logs associated with a specific workflow.

```javascript
const apiClient = new Logs("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.getWorkflowLogs();
```

### Rerun Workflow Execution

Rerun a specific workflow execution.

```javascript
const apiClient = new Logs("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.rerunWorkflowExecution();
```
