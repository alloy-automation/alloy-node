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

# Usage

The package needs to be configured with your account's API key, which is available in the Alloy Dashboard under settings. You must supply the API key with each instantiation of the module.

## Unified API

To set up Alloy's Unified API, use the code snippet below:

```javascript
import { Embedded, UAPI } from "alloy-node";

const apiClient = new UAPI("MY_API_KEY...");
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
import { Embedded } from "alloy-node";

const apiClient = new Embedded("MY_API_KEY...);
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
await apiClient.identify("YOUR_USER_ID");
```

### Obtain a workflowId

Before you can make API calls to Alloy Embedded, you will need to install a workflow using our frontend SDK. You can read more [here](https://docs.runalloy.com/docs/embedded-quick-start#rendering-the-modal).

### Making requests to Alloy Embedded SDK

Once you have a workflowId, you can make requests

```javascript
await apiClient.identify("YOUR_USER_ID");
let data = await apiClient.Workflows.list();
```

This call will return all workflows relevant to the specified user.
