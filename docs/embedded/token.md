## Tokens Methods

### Get User Token

Generate a short lived user token (JSON Web Token) to pass to your fronent. This method is required in order to properly render the Alloy Modal on your frontend.

```javascript
const apiClient = new Tokens("YOUR_API_KEY");
await apiClient.identify(userId);
let data = await apiClient.get();
```
