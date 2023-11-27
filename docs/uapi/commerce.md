# Commerce SDK Documentation

## Overview

Aloy Unified API prpvides a client for interacting with our [Unified Commerce model](https://docs-uapi.runalloy.com/reference/orders). It includes methods for managing customers, orders, products, and fulfillments.

## Authentication

To use the Commerce API, you need to authenticate your requests using an API key.

```javascript
const apiClient = new UAPI("YOUR_API_KEY");
await apiClient.connect("connectionId");
```

## Products

### Create Product

Creates a new product.

**Example:**
```javascript
const newProduct = {
  name: "Product 1",
  description: "Description of Product 1",
  price: 29.99,
  // ... other product details
};

const createdProduct = await apiClient.Commerce.createProduct(newProduct);
```

### Get Product by ID

Retrieves details of a specific product by its ID.

**Example:**
```javascript
const productId = "product123";
const productDetails = await apiClient.Commerce.getProductById(productId);
```

### List Products

Retrieves a list of all products.

**Example:**
```javascript
const productList = await apiClient.Commerce.listProducts();
```

### Update Product

Updates details of a specific product by its ID.

**Example:**
```javascript
const productId = "product123";
const updatedProductDetails = {
  name: "Updated Product 1",
  price: 39.99,
  // ... other updated details
};

const updatedProduct = await apiClient.Commerce.updateProduct(productId, updatedProductDetails);
```

### Delete Product

Deletes a specific product by its ID.

**Example:**
```javascript
const productId = "product123";
const deletionResult = await apiClient.Commerce.deleteProduct(productId);
```

## Product Variants

### Create Product Variant

Creates a new variant for a product.

**Example:**
```javascript
const productId = "product123";
const newVariant = {
  option1: "Red",
  option2: "Large",
  price: 39.99,
  // ... other variant details
};

const createdVariant = await apiClient.Commerce.createProductVariant(productId, newVariant);
```

### Get Variant by ID

Retrieves details of a specific variant by its ID.

**Example:**
```javascript
const variantId = "variant456";
const variantDetails = await apiClient.Commerce.getProductVariantById(variantId);
```

### List Variants

Retrieves a list of all variants for a product.

**Example:**
```javascript
const productId = "product123";
const variantList = await apiClient.Commerce.listProductVariants(productId);
```

### Update Variant

Updates details of a specific variant by its ID.

**Example:**
```javascript
const variantId = "variant456";
const updatedVariantDetails = {
  price: 49.99,
  // ... other updated details
};

const updatedVariant = await apiClient.Commerce.updateProductVariant(variantId, updatedVariantDetails);
```

### Delete Variant

Deletes a specific variant by its ID.

**Example:**
```javascript
const variantId = "variant456";
const deletionResult = await apiClient.Commerce.deleteProductVariant(variantId);
```

## Orders

### Create Order

Creates a new order.

**Example:**
```javascript
const newOrder = {
  customerId: "customer789",
  lineItems: [
    { variantId: "variant123", quantity: 2 },
    { variantId: "variant456", quantity: 1 },
  ],
  // ... other order details
};

const createdOrder = await apiClient.Commerce.createOrder(newOrder);
```

### Get Order by ID

Retrieves details of a specific order by its ID.

**Example:**
```javascript
const orderId = "order789";
const orderDetails = await apiClient.Commerce.getOrderById(orderId);
```

### List Orders

Retrieves a list of all orders.

**Example:**
```javascript
const orderList = await apiClient.Commerce.listOrders();
```

### Update Order

Updates details of a specific order by its ID.

**Example:**
```javascript
const orderId = "order789";
const updatedOrderDetails = {
  status: "Shipped",
  trackingNumber: "TRACK123",
  // ... other updated details
};

const updatedOrder = await apiClient.Commerce.updateOrder(orderId, updatedOrderDetails);
```

### Delete Order

Deletes a specific order by its ID.

**Example:**
```javascript
const orderId = "order789";
const deletionResult = await apiClient.Commerce.deleteOrder(orderId);
```

## Customers

### Create Customer

Creates a new customer.

**Example:**
```javascript
const newCustomer = {
  name: "John Doe",
  email: "john@example.com",
  // ... other customer details
};

const createdCustomer = await apiClient.Commerce.createCustomer(newCustomer);
```

### Get Customer by ID

Retrieves details of a specific customer by their ID.

**Example:**
```javascript
const customerId = "customer789";
const customerDetails = await apiClient.Commerce.getCustomerById(customerId);
```

### List Customers

Retrieves a list of all customers.

**Example:**
```javascript
const customerList = await apiClient.Commerce.listCustomers();
```

### Update Customer

Updates details of a specific customer by their ID.

**Example:**
```javascript
const customerId = "customer789";
const updatedCustomerDetails = {
  name: "John Updated",
  // ... other updated details
};

const updatedCustomer = await apiClient.Commerce.updateCustomer(customerId, updatedCustomerDetails);
```

### Delete Customer

Deletes a specific customer by their ID.

**Example:**
```javascript
const customerId = "customer789";
const deletionResult = await apiClient.Commerce.deleteCustomer(customerId);
```

## Fulfillments

### Create Fulfillment

Creates a new fulfillment for an order.

**Example:**
```javascript
const orderNumber = "ORD123456";
const fulfillmentDetails = {
  items: [
    { variantId: "variant123", quantity: 2 },
    { variantId: "variant456", quantity: 1 },
  ],
  // ... other fulfillment details
};

const createdFulfillment = await apiClient.Commerce.createFulfillment(orderNumber, fulfillmentDetails);
```

### Get Fulfillment by ID

Retrieves details of a specific fulfillment by its ID.

**Example:**
```javascript
const fulfillmentId = "fulfillment789";
const fulfillmentDetails = await apiClient.Commerce.getFulfillmentById(fulfillmentId);
```

### List Fulfillments

Retrieves a list of all fulfillments for an order.

**Example:**
```javascript
const orderNumber = "ORD123456";
const fulfillmentList = await apiClient.Commerce.listFulfillments(orderNumber);
```

### Update Fulfillment

Updates details of a specific fulfillment by its ID.

**Example:**
```javascript
const fulfillmentId = "fulfillment789";
const updatedFulfillmentDetails = {
  status: "Shipped",
  // ... other updated details
};

