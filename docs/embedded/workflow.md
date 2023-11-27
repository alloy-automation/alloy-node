
## Workflow Methods

### List Workflows

Lists all workflows associated with the user.

```javascript
let data = await apiClient.Workflows.list();
```

### List Workflow Versions

Lists all versions of a specific workflow.

```javascript
let data = await apiClient.Workflows.listVersions(workflowId);
```

### Get Workflow Details

Gets details about a specific workflow.

```javascript
let data = await apiClient.Workflows.get(workflowId);
```

### Deactivate All Workflows

Deactivates all workflows associated with the user.

```javascript
let data = await apiClient.Workflows.deactivateAll();
```

### Activate Workflow

Activates a specific workflow.

```javascript
let data = await apiClient.Workflows.activate(workflowId);
```

### Deactivate Workflow

Deactivates a specific workflow.

```javascript
let data = await apiClient.Workflows.deactivate(workflowId);
```

### Upgrade Workflow

Upgrades a specific workflow to the latest version.

```javascript
let data = await apiClient.Workflows.upgrade(workflowId);
```

### Delete Workflow

Deletes a specific workflow.

```javascript
let data = await apiClient.Workflows.delete(workflowId);
```
