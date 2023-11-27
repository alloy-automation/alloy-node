## User Methods

The user methods make it easy to create, update, find, and delete users in Alloy Embedded.

### Create a User


Verifies the functionality of creating a user through the `createUser` method. It sends a request to the server with a unique username, and upon success, the user ID is stored for subsequent tests.

```javascript
let body = {
  username: `user123`,
};
const apiClient = new Embedded("YOUR_API_KEY");

await apiClient.User.createUser(body);
```

### Update a User


Ensures the ability to update user details using the `updateUser` method. It first identifies the user by setting the user ID and then sends a request to update the user's full name.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify("userId");

let body = {
  fullName: `user123`,
};

await apiClient.User.updateUser(body);
```

### Get a User


Checks the functionality of retrieving user information with the `getUser` method. After identifying the user, it sends a request to the server to get the user's details.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify("userId");

await apiClient.User.getUser();
```

### List All Users


Verifies the ability to retrieve a list of all users, using the `listUsers` method after identifying the user. The server responds with a list of users, and the test ensures the expected properties are present.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify("userId");

await apiClient.User.listUsers();
```

### Batch Create Users


Validates the batch creation of users through the `createBatchUsers` method. After identifying the user, it sends a request to the server with a batch of user data and expects a success message in response.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify("userId");

let batchData = {
  users: [
    { username: `user123`, fullName: "Joe Smoe" },
    { username: `user123` },
    { username: `user123`, fullName: "Jane Doe" },
  ],
};

await apiClient.User.createBatchUsers(batchData);
```

### Delete a User


Verifies the functionality of deleting a user using the `deleteUser` method. After identifying the user, it sends a request to the server to delete the user account.

```javascript
const apiClient = new Embedded("YOUR_API_KEY");
await apiClient.identify("userId");

await apiClient.User.deleteUser();
```

