import { UAPI } from "../../index.mjs";
import { apiKey, shopifyConnectionId } from "../../utils";
const { v4: uuidv4 } = require("uuid");

describe("Shopify Customers", () => {
  let customerId;

  test("should create a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let body = {
      firstName: "Alloy",
      lastName: "Test User",
      email: `tester+${uuidv4()}@runalloy.com`,
      phone: `21566${Math.floor(Math.random() * 90000 + 10000)}`,
    };
    let data = await apiClient.Commerce.createCustomer(body);
    expect(data.customer).toBeDefined();
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("lastName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("phone");
    expect(data.customer).toHaveProperty("firstName");
    expect(data.customer).toHaveProperty("id");
    customerId = data.customer.id;
  });

  test("should get all customers", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.listCustomers();

    expect(data.customers[0]).toBeDefined();
    expect(data.customers[0]).toHaveProperty("remoteId");
    expect(data.customers[0]).toHaveProperty("updatedTimestamp");
    expect(data.customers[0]).toHaveProperty("lastName");
    expect(data.customers[0]).toHaveProperty("email");
    expect(data.customers[0]).toHaveProperty("createdTimestamp");
    expect(data.customers[0]).toHaveProperty("createdTimestamp");
    expect(data.customers[0]).toHaveProperty("phone");
    expect(data.customers[0]).toHaveProperty("firstName");
    expect(data.customers[0]).toHaveProperty("id");
  },30000);

  test("should get customer", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.getCustomer(customerId);
    expect(data.customer).toBeDefined();
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("lastName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("phone");
    expect(data.customer).toHaveProperty("firstName");
    expect(data.customer).toHaveProperty("id");
  },30000);

  test("should update a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let body = {
      firstName: "Alloy",
      lastName: "Gregg Mojica",
      email: `tester+${uuidv4()}@runalloy.com`,
    };

    let data = await apiClient.Commerce.updateCustomer(customerId, body);
    expect(data.customer).toBeDefined();
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("lastName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("phone");
    expect(data.customer).toHaveProperty("firstName");
    expect(data.customer).toHaveProperty("id");
  },30000);

  test("should delete a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.deleteCustomer(customerId);
    expect(data).toBeDefined();
  },30000);
});

describe("Shopify Orders", () => {
  let orderId;

  test("should create a new order", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let body = {
      lineItems: [
        {
          title: "Chocolate",
          price: 1,
          quantity: 2,
          productId: "Chocolate",
        },
      ],
      currency: "USD",
      billingAddress: {
        address1: "6146 Honey Bluff Parkway",
        city: "Los Angeles",
        countryCode: "US",
        firstName: "Tj",
        lastName: "Monteclar",
        phone: "+639105801660",
        region: "Cebu",
        postalCode: "90407",
      },
      customer: {
        email: `gregg+${uuidv4()}@runalloy.com`,
        firstName: "QA",
        lastName: "TEST",
      },
    };
    let data = await apiClient.Commerce.createOrder(body);
    expect(data.order).toBeDefined();
    expect(data.order).toHaveProperty("remoteId");
    expect(data.order).toHaveProperty("createdTimestamp");
    expect(data.order).toHaveProperty("updatedTimestamp");
    expect(data.order).toHaveProperty("orderNumber");
    expect(data.order).toHaveProperty("fulfillmentStatus");
    expect(data.order).toHaveProperty("totalShipping");
    expect(data.order).toHaveProperty("totalDiscount");
    expect(data.order).toHaveProperty("totalTax");
    expect(data.order).toHaveProperty("totalPrice");
    expect(data.order).toHaveProperty("currency");
    expect(data.order).toHaveProperty("lineItems");
    expect(data.order).toHaveProperty("paymentStatus");
    expect(data.order).toHaveProperty("billingAddress");
    expect(data.order).toHaveProperty("shippingAddress");
    expect(data.order).toHaveProperty("customer");
    expect(data.order.billingAddress.address1).toEqual(
      "6146 Honey Bluff Parkway"
    );
    expect(data.order).toHaveProperty("id");
    expect(data.order).to;
    orderId = data.order.id;
  },30000);

  test("should get all orders", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.listOrders();

    expect(data.orders[0]).toBeDefined();
    expect(data.orders[0]).toHaveProperty("remoteId");
    expect(data.orders[0]).toHaveProperty("createdTimestamp");
    expect(data.orders[0]).toHaveProperty("updatedTimestamp");
    expect(data.orders[0]).toHaveProperty("orderNumber");
    expect(data.orders[0]).toHaveProperty("fulfillmentStatus");
    expect(data.orders[0]).toHaveProperty("totalShipping");
    expect(data.orders[0]).toHaveProperty("totalDiscount");
    expect(data.orders[0]).toHaveProperty("totalTax");
    expect(data.orders[0]).toHaveProperty("totalPrice");
    expect(data.orders[0]).toHaveProperty("currency");
    expect(data.orders[0]).toHaveProperty("lineItems");
    expect(data.orders[0]).toHaveProperty("paymentStatus");
    expect(data.orders[0]).toHaveProperty("billingAddress");
    expect(data.orders[0]).toHaveProperty("shippingAddress");
    expect(data.orders[0]).toHaveProperty("customer");
  },30000);

  test("should get an order", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.getOrder(orderId);
    expect(data.order).toBeDefined();
    expect(data.order).toHaveProperty("remoteId");
    expect(data.order).toHaveProperty("createdTimestamp");
    expect(data.order).toHaveProperty("updatedTimestamp");
    expect(data.order).toHaveProperty("orderNumber");
    expect(data.order).toHaveProperty("fulfillmentStatus");
    expect(data.order).toHaveProperty("totalShipping");
    expect(data.order).toHaveProperty("totalDiscount");
    expect(data.order).toHaveProperty("totalTax");
    expect(data.order).toHaveProperty("totalPrice");
    expect(data.order).toHaveProperty("currency");
    expect(data.order).toHaveProperty("lineItems");
    expect(data.order).toHaveProperty("paymentStatus");
    expect(data.order).toHaveProperty("billingAddress");
    expect(data.order).toHaveProperty("shippingAddress");
    expect(data.order).toHaveProperty("customer");
  },30000);

  test("should update an order", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let body = {
      shippingAddress: {
        address1: "1453 NW Elgin Ave",
        city: "Bend",
        postalCode: "97703",
        region: "Oregon",
        countryCode: "US",
        firstName: "Alex",
        lastName: "McVarish",
      },
    };

    let data = await apiClient.Commerce.updateOrder(orderId, body);
    expect(data.order).toBeDefined();
    expect(data.order).toHaveProperty("remoteId");
    expect(data.order).toHaveProperty("createdTimestamp");
    expect(data.order).toHaveProperty("updatedTimestamp");
    expect(data.order).toHaveProperty("orderNumber");
    expect(data.order).toHaveProperty("fulfillmentStatus");
    expect(data.order).toHaveProperty("totalShipping");
    expect(data.order).toHaveProperty("totalDiscount");
    expect(data.order).toHaveProperty("totalTax");
    expect(data.order).toHaveProperty("totalPrice");
    expect(data.order).toHaveProperty("currency");
    expect(data.order).toHaveProperty("lineItems");
    expect(data.order).toHaveProperty("paymentStatus");
    expect(data.order).toHaveProperty("billingAddress");
    expect(data.order).toHaveProperty("shippingAddress");
    expect(data.order).toHaveProperty("customer");
  },30000);

  test("should delete an order", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.deleteOrder(orderId);
    expect(data).toBeDefined();
  });
});

describe("Shopify Products", () => {
  let productId;

  test("should create a new product", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);

    let productName = `Product ${uuidv4()}`;
    let body = {
      productName: productName,
      description: "AP2 Desc",
      productStatus: "DRAFT",
      variants: [
        {
          price: 10,
          sku: "my-variant",
          weight: {
            value: 1,
            unit: "kg",
          },
          optionValues: [
            {
              name: "test",
              value: "my-variant",
            },
          ],
        },
      ],
    };
    let data = await apiClient.Commerce.createProduct(body);
    expect(data.product).toBeDefined();
    expect(data).toHaveProperty("product");
    expect(data.product).toHaveProperty("remoteId");
    expect(data.product).toHaveProperty("createdTimestamp");
    expect(data.product).toHaveProperty("updatedTimestamp");
    expect(data.product).toHaveProperty("productType");
    expect(data.product).toHaveProperty("productName");
    expect(data.product).toHaveProperty("description");
    expect(data.product).toHaveProperty("images");
    expect(data.product).toHaveProperty("productStatus");
    expect(data.product).toHaveProperty("tags");
    expect(data.product).toHaveProperty("vendor");
    expect(data.product).toHaveProperty("productUrl");
    expect(data.product).toHaveProperty("id");
    expect(data.product).toHaveProperty("variants");
    expect(data.product.variants[0]).toHaveProperty("remoteId");
    expect(data.product.variants[0]).toHaveProperty("inventory");
    expect(data.product.variants[0]).toHaveProperty("optionValues");
    expect(data.product.variants[0]).toHaveProperty("updatedTimestamp");
    expect(data.product.variants[0]).toHaveProperty("price");
    expect(data.product.variants[0]).toHaveProperty("createdTimestamp");
    expect(data.product.variants[0]).toHaveProperty("sku");
    expect(data.product.variants[0]).toHaveProperty("title");
    expect(data.product.variants[0]).toHaveProperty("id");

    expect(data.product.productName).toEqual(productName);
    expect(Array.isArray(data.product.images)).toBe(true);
    expect(Array.isArray(data.product.tags)).toBe(true);
    expect(Array.isArray(data.product.variants)).toBe(true);

    productId = data.product.id;
  },30000);

  test("should get all products", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.listProducts();

    expect(Array.isArray(data.products[0].images)).toBe(true);
    expect(Array.isArray(data.products[0].tags)).toBe(true);
    expect(Array.isArray(data.products[0].variants)).toBe(true);

    expect(data).toHaveProperty("products");
    expect(data.products[0]).toHaveProperty("remoteId");
    expect(data.products[0]).toHaveProperty("createdTimestamp");
    expect(data.products[0]).toHaveProperty("updatedTimestamp");
    expect(data.products[0]).toHaveProperty("productType");
    expect(data.products[0]).toHaveProperty("productName");
    expect(data.products[0]).toHaveProperty("description");
    expect(data.products[0]).toHaveProperty("images");
    expect(data.products[0]).toHaveProperty("productStatus");
    expect(data.products[0]).toHaveProperty("tags");
    expect(data.products[0]).toHaveProperty("vendor");
    expect(data.products[0]).toHaveProperty("productUrl");
    expect(data.products[0]).toHaveProperty("id");
    expect(data.products[0]).toHaveProperty("variants");
    expect(data.products[0].variants[0]).toHaveProperty("remoteId");
    expect(data.products[0].variants[0]).toHaveProperty("inventory");
    expect(data.products[0].variants[0]).toHaveProperty("optionValues");
    expect(data.products[0].variants[0]).toHaveProperty("updatedTimestamp");
    expect(data.products[0].variants[0]).toHaveProperty("price");
    expect(data.products[0].variants[0]).toHaveProperty("createdTimestamp");
    expect(data.products[0].variants[0]).toHaveProperty("sku");
    expect(data.products[0].variants[0]).toHaveProperty("title");
    expect(data.products[0].variants[0]).toHaveProperty("id");
  },30000);

  test("should get a product", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.getProduct(productId);

    expect(data).toHaveProperty("product");
    expect(data.product).toHaveProperty("remoteId");
    expect(data.product).toHaveProperty("createdTimestamp");
    expect(data.product).toHaveProperty("updatedTimestamp");
    expect(data.product).toHaveProperty("productType");
    expect(data.product).toHaveProperty("productName");
    expect(data.product).toHaveProperty("description");
    expect(data.product).toHaveProperty("images");
    expect(data.product).toHaveProperty("productStatus");
    expect(data.product).toHaveProperty("tags");
    expect(data.product).toHaveProperty("vendor");
    expect(data.product).toHaveProperty("productUrl");
    expect(data.product).toHaveProperty("id");
    expect(data.product).toHaveProperty("variants");
    expect(data.product.variants[0]).toHaveProperty("remoteId");
    expect(data.product.variants[0]).toHaveProperty("inventory");
    expect(data.product.variants[0]).toHaveProperty("optionValues");
    expect(data.product.variants[0]).toHaveProperty("updatedTimestamp");
    expect(data.product.variants[0]).toHaveProperty("price");
  },30000);

  test("should update a product", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let body = {
      productName: "Hani Shampoo",
      description: "Hanis Shampoo",
      productStatus: "ACTIVE",
      tags: ["Sample", "Shampoo", "PandG"],
    };
    let data = await apiClient.Commerce.updateProduct(productId, body);

    expect(data).toHaveProperty("product");
    expect(data.product).toHaveProperty("remoteId");
    expect(data.product).toHaveProperty("createdTimestamp");
    expect(data.product).toHaveProperty("updatedTimestamp");
    expect(data.product).toHaveProperty("productType");
    expect(data.product).toHaveProperty("productName");
    expect(data.product).toHaveProperty("description");
    expect(data.product).toHaveProperty("images");
    expect(data.product).toHaveProperty("productStatus");
    expect(data.product).toHaveProperty("tags");
    expect(data.product).toHaveProperty("vendor");
    expect(data.product).toHaveProperty("productUrl");
    expect(data.product).toHaveProperty("id");
    expect(data.product).toHaveProperty("variants");
    expect(data.product.variants[0]).toHaveProperty("remoteId");
    expect(data.product.variants[0]).toHaveProperty("inventory");
    expect(data.product.variants[0]).toHaveProperty("optionValues");
    expect(data.product.variants[0]).toHaveProperty("updatedTimestamp");
    expect(data.product.variants[0]).toHaveProperty("price");
    expect(data.product.variants[0]).toHaveProperty("createdTimestamp");
    expect(data.product.variants[0]).toHaveProperty("sku");
    expect(data.product.variants[0]).toHaveProperty("title");
    expect(data.product.variants[0]).toHaveProperty("id");
  },30000);

  test("should delete a product", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.deleteProduct(productId);
    expect(data).toBeDefined();
  },30000);
});

describe("Shopify Product Variants", () => {
  let productVariantId, productId;

  test("should create a new product variant", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);

    let productName = `Product ${uuidv4()}`;
    let createProductBody = {
      productName: productName,
      description: "AP2 Desc",
      productStatus: "ACTIVE",
      variants: [
        {
          price: 10,
          sku: "my-variant",
          weight: {
            value: 1,
            unit: "kg",
          },
          optionValues: [
            {
              name: "test",
              value: "my-variant",
            },
          ],
        },
      ],
    };
    let data1 = await apiClient.Commerce.createProduct(createProductBody);
    productId = data1.product.id;

    let createVariantBody = {
      optionValues: [
        {
          name: "Color",
          value: `test ${uuidv4()}`,
        },
        {
          name: "Size",
          value: `test ${uuidv4()}`,
        },
      ],
      sku: "POT-0421",
      price: "100.00",
      weight: {
        value: 100,
      },
    };

    let data2 = await apiClient.Commerce.createProductVariant(
      productId,
      createVariantBody
    );

    expect(data2.variant).toBeDefined();
    expect(data2.variant).toHaveProperty("remoteId");
    expect(data2.variant).toHaveProperty("createdTimestamp");
    expect(data2.variant).toHaveProperty("updatedTimestamp");
    expect(data2.variant).toHaveProperty("productId");
    expect(data2.variant).toHaveProperty("title");
    expect(data2.variant).toHaveProperty("price");
    expect(data2.variant).toHaveProperty("sku");
    expect(data2.variant).toHaveProperty("optionValues");
    expect(data2.variant).toHaveProperty("inventory");
    expect(data2.variant).toHaveProperty("weight");
    expect(data2.variant).toHaveProperty("id");
    productVariantId = data2.variant.id;
  },30000);

  test("should get a product variant", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.getProductVariant(
      productId,
      productVariantId
    );

    expect(data.variant).toBeDefined();
    expect(data.variant).toHaveProperty("remoteId");
    expect(data.variant).toHaveProperty("createdTimestamp");
    expect(data.variant).toHaveProperty("updatedTimestamp");
    expect(data.variant).toHaveProperty("productId");
    expect(data.variant).toHaveProperty("title");
    expect(data.variant).toHaveProperty("price");
    expect(data.variant).toHaveProperty("sku");
    expect(data.variant).toHaveProperty("optionValues");
    expect(data.variant).toHaveProperty("inventory");
    expect(data.variant).toHaveProperty("weight");
    expect(data.variant).toHaveProperty("id");
    expect(Array.isArray(data.variant.optionValues)).toBe(true);
    expect(data.variant).toHaveProperty("id");
  },30000);

  test("should get all product variants", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.listProductVariants(productId);

    expect(data.variants[0]).toBeDefined();
    expect(data.variants[0]).toHaveProperty("remoteId");
    expect(data.variants[0]).toHaveProperty("createdTimestamp");
    expect(data.variants[0]).toHaveProperty("updatedTimestamp");
    expect(data.variants[0]).toHaveProperty("productId");
    expect(data.variants[0]).toHaveProperty("title");
    expect(data.variants[0]).toHaveProperty("price");
    expect(data.variants[0]).toHaveProperty("sku");
    expect(data.variants[0]).toHaveProperty("optionValues");
    expect(data.variants[0]).toHaveProperty("inventory");
    expect(data.variants[0]).toHaveProperty("weight");
    expect(data.variants[0]).toHaveProperty("id");
    expect(Array.isArray(data.variants[0].optionValues)).toBe(true);
    expect(data.variants[0]).toHaveProperty("id");
  },30000);

  test("should update a product variant", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let body = {
      weight: {
        value: 500,
        unit: "lb",
      },
    };
    let data = await apiClient.Commerce.updateProductVariant(
      productId,
      productVariantId,
      body
    );
    expect(data.variant).toBeDefined();
    expect(data.variant).toHaveProperty("remoteId");
    expect(data.variant).toHaveProperty("createdTimestamp");
    expect(data.variant).toHaveProperty("updatedTimestamp");
    expect(data.variant).toHaveProperty("productId");
    expect(data.variant).toHaveProperty("title");
    expect(data.variant).toHaveProperty("price");
    expect(data.variant).toHaveProperty("sku");
    expect(data.variant).toHaveProperty("optionValues");
    expect(data.variant).toHaveProperty("inventory");
    expect(data.variant).toHaveProperty("weight");
    expect(data.variant).toHaveProperty("id");
    expect(data.variant).toHaveProperty("id");
  },30000);

  test("should delete a product variant", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);
    let data = await apiClient.Commerce.deleteProductVariant(
      productId,
      productVariantId
    );
    expect(data).toBeDefined();
  },30000);
});

describe("Shopify Fulfillments", () => {
  let fulfillmentId, orderId;

  test("should list fulfllments", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);

    let orderBody = {
      lineItems: [
        {
          title: "Chocolate",
          price: 1,
          quantity: 2,
          productId: "Chocolate",
        },
      ],
      currency: "USD",
      billingAddress: {
        address1: "6146 Honey Bluff Parkway",
        city: "Los Angeles",
        countryCode: "US",
        firstName: "Tj",
        lastName: "Monteclar",
        phone: "+639105801660",
        region: "Cebu",
        postalCode: "90407",
      },
      customer: {
        email: `gregg+${uuidv4()}@runalloy.com`,
        firstName: "QA",
        lastName: "TEST",
      },
    };
    let orderData = await apiClient.Commerce.createOrder(orderBody);
    orderId = orderData.order.id;

    let data = await apiClient.Commerce.listFulfillments(orderId);
    // expect(data.fulfillments).toBeDefined();
    // expect(data.product).toHaveProperty("remoteId");
    // expect(data.product).toHaveProperty("createdTimestamp");
    // expect(data.product).toHaveProperty("updatedTimestamp");
    // expect(data.product).toHaveProperty("productType");
    // expect(data.product).toHaveProperty("productName");
    // expect(data.product).toHaveProperty("description");
    // expect(data.product).toHaveProperty("images");
    // expect(data.product.productName).toEqual(productName);
    // expect(Array.isArray(data.product.images)).toBe(true);
    // expect(Array.isArray(data.product.tags)).toBe(true);
    // expect(Array.isArray(data.product.variants)).toBe(true);
    // expect(data.product).toHaveProperty("productStatus");
    // expect(data.product).toHaveProperty("tags");
    // expect(data.product).toHaveProperty("vendor");
    // expect(data.product).toHaveProperty("productUrl");
    // expect(data.product).toHaveProperty("price");
    // expect(data.product).toHaveProperty("variants");
    // expect(data.product).toHaveProperty("id");

    // fulfillmentId = data.product.id;
  },30000);

  test("should list fulfllments", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);

    // let data = await apiClient.Commerce.getFulfillment(orderId, fulfillmentId);
    // expect(data.fulfillment).toBeDefined();
  });

  test("should get fulfllments count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(shopifyConnectionId);

    let data = await apiClient.Commerce.getFulfillmentCount(orderId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });
});
