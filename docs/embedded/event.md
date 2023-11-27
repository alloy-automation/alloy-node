## Events Methods

### List Events

Lists all events associated with the user.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.Events.list();
```

### Run Event

Runs a specific event with optional data.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify(userId);
let eventName = "Get Customers";
let bodyData = { "name": "Gregg" };
let data = await apiClient.Events.run(eventName, bodyData);
```
