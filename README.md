# alloy-node

This is a wrapper to interact with Alloy Automation's APIs. This library supports both [Alloy Embedded](https://runalloy.com/embedded/) and [Alloy Unified API](https://runalloy.com/unified-api/).

## Documentation

Visit the [Alloy Docs site](https://docs.runalloy.com/docs) for more information on how to get started with Alloy APIs.

## Installation

To get started, install `alloy-node` using npm as seen below:

```
npm install alloy-node --save
```

Or using yarn:

```
yarn add alloy-node
```

## Configuration

### Setting the Region

The `alloy-node` library allows you to configure the region for API requests using the `setRegion` method. This method sets the appropriate domain for all API calls based on the specified region (e.g., `us` or `eu`). If no region is provided, it defaults to `us`. The method updates the base URL for all services (`User`, `App`, `Integration`, `Tokens`, `Workflows`, `Events`, `Compliance`, `Logs`, `Credentials`, `Link`, `Analytics`, and `HeadlessInstallation`).

**Usage Example:**

```javascript
import { Embedded, UAPI } from 'alloy-node';

// Initialize the API client
const apiClient = new Embedded('MY_API_KEY...');

// Set the region to 'eu' / 'us'
apiClient.setRegion(<Region>);
```

**Notes:**

- Supported regions are `us` and `eu`. Attempting to set an invalid region will throw an error.
- Call `setRegion` before making any API requests to ensure the correct domain is used.
- If no region is specified, the default region (`us`) is used.

For more details, refer to the [Alloy Docs](https://docs.runalloy.com/docs).

# Usage

The package needs to be configured with your account's API key, which is available in the Alloy Dashboard under settings. You must supply the API key with each instantiation of the module.

## Unified API

To set up Alloy's Unified API, use the code snippet below:

```javascript
import { Embedded, UAPI } from 'alloy-node';

const apiClient = new UAPI('MY_API_KEY...');

// Set the region to 'eu' / 'us'
apiClient.setRegion(<Region>);
```

### Creating a User

To make API calls to Unified API, you must first [create a user](https://docs-uapi.runalloy.com/reference/create-user). To create a user, call the `User.createUser()` method as seen below. You must pass a _unique_ username.

```javascript
let bodyData = {
  username: `gregg321`,
};
let data = await apiClient.User.createUser(bodyData);
```

### Obtain a connectionId

Before you make your first API call, you will need to obtain a `connectionId`. A `connectionId` represents the unique identifier of an app you plan to make API calls to. You can obtain a connectionId by using the frontend SDK. Read more [here](https://docs-uapi.runalloy.com/docs/quick-start).

Once you have the `connectionId`, call the `connect()` method as seen below.

```javascript
await apiClient.connect(YOUR_CONNECTION_ID);
```

### Making requests to Alloy Unified API's SDK

Once you have a `connectionId`, you can start making calls to Alloy Unified API. See the example below for making a request to the Commerce Unified API:

```javascript
let data = await apiClient.Commerce.listCustomers();
```

Alloy Unified API currently offers three models:

| Model        | Docs |
| ------------ | ---: |
| `Commerce`   | here |
| `Accounting` | here |
| `CRM`        | here |

<hr />

### Alloy Embedded

To set up Alloy's Embedded iPaaS, use the code snippet below:

```javascript
import { Embedded } from 'alloy-node';

const apiClient = new Embedded('MY_API_KEY...');

// Set the region to 'eu' / 'us'
apiClient.setRegion(<Region>);
```

### Creating a User

Similar to Unified API, in order to make API calls to Alloy Embedded, you must first [create a user](https://docs.runalloy.com/reference/create-a-user). To create a user in Embedded, call the `User.createUser()` method as seen below. You must pass a _unique_ username.

```javascript
let bodyData = {
  username: `sara456`,
};
let data = await apiClient.User.createUser(body);
```

Once you've created a user, you'll need to `identify` that user each time you make a call that requires a `userId`. Fortunately, the `identify()` method exists for this purpose.

Pass a `userId` to the `identify()` method as seen below:

```javascript
await apiClient.identify('YOUR_USER_ID');
```

### Obtain a workflowId

Before you can make API calls to Alloy Embedded, you will need to install a workflow using our frontend SDK. You can read more [here](https://docs.runalloy.com/docs/embedded-quick-start#rendering-the-modal).

### Making requests to Alloy Embedded SDK

Once you have a workflowId, you can make requests

```javascript
await apiClient.identify('YOUR_USER_ID');
let data = await apiClient.Workflows.list();
```

This call will return all workflows relevant to the specified user.

### Start a Headless Installation

You can start a headless installation by using the following function:

```javascript
let data = await apiClient.HeadlessInstallation.start({
  integrationId: 'YOUR_INTEGRATION_ID',
  userId: 'YOUR_USER_ID',
});
```

### Complete a Headless Installation

You can complete a headless installation by using the following function:

```javascript
let data = await apiClient.HeadlessInstallation.complete({
  installationId: 'YOUR_INSTALLION_ID',
  data: {
    // Your installation data
  },
});
```
