# Accounting SDK Documentation

## Overview

Aloy Unified API prpvides a client for interacting with our [Unified Accounting model](https://docs-uapi.runalloy.com/reference/accounts).

## Authentication

To use the Accounting API, you need to authenticate your requests using an API key.

```javascript
const apiClient = new UAPI("YOUR_API_KEY");
await apiClient.connect("connectionId");
```

### Company Info

#### Get Company Info

Retrieve company information.

```javascript
const apiClient = new UAPI("YOUR_API_KEY");
await apiClient.connect("connectionId");
const data = await apiClient.CompanyInfo.getCompanyInfo();
```

### Account

#### Create Account

Create an account.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  accountName: "SampleAccount",
  accountType: "OTHER_ASSET",
  currency: "USD",
};

const data = await apiClient.Accounting.createAccount(body);
```

#### Update Account

Update an account.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  accountName: "UpdatedGregg",
};

const data = await apiClient.Accounting.updateAccount("sampleAccountId", body);
```

#### List Accounts

List all accounts.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listAccounts();
```

#### Get Account

Retrieve an account.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getAccount("sampleAccountId");
```

#### Delete Account

Delete an account.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteAccount("sampleAccountId");
```

### Vendors

#### Create Vendor

Create a vendor.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  vendorName: "SampleVendor",
  vendorStatus: "ACTIVE",
  addresses: [
    {
      addressType: "BILLING",
      street1: "Avenue of the Americas",
      zipCode: "90210",
      country: "US",
    },
  ],
  phoneNumbers: [
    {
      phoneNumberType: "MOBILE",
      phoneNumber: "09173210215",
    },
  ],
};

const data = await apiClient.Accounting.createVendor(body);
```

#### Update Vendor

Update a vendor.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  vendorName: "UpdatedAlloy",
};

const data = await apiClient.Accounting.updateVendor("sampleVendorId", body);
```

#### List Vendors

List all vendors.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listVendors();
```

#### Get Vendor

Retrieve a vendor.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getVendor("sampleVendorId");
```

#### Delete Vendor

Delete a vendor.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteVendor("sampleVendorId");
```

### Customers

#### Create Customer

Create a customer.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  customerName: "SampleCustomer",
  addresses: [
    {
      addressType: "BILLING",
      street1: "Beverly Hills",
      zipCode: "90210",
      country: "US",
    },
  ],
  phoneNumbers: [
    {
      phoneNumberType: "MOBILE",
      phoneNumber: "09173210215",
    },
  ],
};

const data = await apiClient.Accounting.createCustomer(body);
```

#### Update Customer

Update a customer.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  customerName: "UpdatedAlloy",
};

const data = await apiClient.Accounting.updateCustomer("sampleCustomerId", body);
```

#### List Customers

List all customers.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listCustomers();
```

#### Get Customer

Retrieve a customer.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getCustomer("sampleCustomerId");
```

#### Delete Customer

Delete a customer.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteCustomer("sampleCustomerId");
```

### Tax Rates

#### Create Tax Rate

Create a tax rate.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  taxRateName: "SampleTaxRate",
  agencyRef: "sampleAgencyRef",
  rate: 10,
  rateType: "PERCENTAGE",
};

const data = await apiClient.Accounting.createTaxRate(body);
```

#### List Tax Rates

List all tax rates.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listTaxRates();
```

#### Get Tax Rate

Retrieve a tax rate.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getTaxRate("sampleTaxRateId");
```

#### Delete Tax Rate

Delete a tax rate.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteTaxRate("sampleTaxRateId");
```

### Tracking Categories

#### Create Tracking Category

Create a tracking category.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  categoryType: "CUSTOMER",
  name: "SampleCategory",
};

const data = await apiClient.Accounting.createTrackingCategory(body);
```

#### List Tracking Categories

List all tracking categories.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listTrackingCategories();
```

#### Get Tracking Category

Retrieve a tracking category.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getTrackingCategory("sampleCategoryId");
```

#### Delete Tracking Category

Delete a tracking category.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteTrackingCategory(
  "sampleCategoryId"
);
```

### Items

#### Create Item

Create an item.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  itemName: "SampleItem",
  itemCategory: "SERVICE",
  unitPrice: 50,
};

const data = await apiClient.Accounting.createItem(body);
```


#### Update Item

Update an item.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  itemName: "UpdatedCommission",
};

const data = await apiClient.Accounting.updateItem("sampleItemId", body);
```


#### List Items

List all items.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listItems();
```

#### Get Item

Retrieve an item.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getItem("sampleItemId");
```

#### Delete Item

Delete an item.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteItem("sampleItemId");
```

### Purchase Orders

#### Create Purchase Order

Create a purchase order.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  vendorId: "sampleVendorId",
  purchaseOrderNumber: "PO-001",
  lineItems: [
    {
      description: "Item Description",
      quantity: 5,
      unitPrice: 20,
    },
  ],
};

const data = await apiClient.Accounting.createPurchaseOrder(body);
```

#### Update Purchase Order

Update a purchase order.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  purchaseOrderNumber: "UpdatedPO-001",
};

const data = await apiClient.Accounting.updatePurchaseOrder("samplePurchaseOrderId", body);
```

#### List Purchase Orders

List all purchase orders.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listPurchaseOrders();
```

#### Get Purchase Order

Retrieve a purchase order.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getPurchaseOrder(
  "samplePurchaseOrderId"
);
```

#### Delete Purchase Order

Delete a purchase order.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deletePurchaseOrder(
  "samplePurchaseOrderId"
);
```

### Bills

#### Create Bill

Create a bill.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  vendorId: "sampleVendorId",
  billNumber: "PLDT-001",
  lineItems: [
    {
      description: "Line Item 1",
      totalAmount: 100,
      accountId: "sampleAccountId",
    },
  ],
};

const data = await apiClient.Accounting.createBill(body);
```

#### Update Bill

Update a bill.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  billNumber: "UpdatedPLDT-001",
};

const data = await apiClient.Accounting.updateBill("sampleBillId", body);
```

#### List Bills

List all bills.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listBills();
```

#### Get Bill Count

Get the count of bills.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getBillCount();
```

#### Retrieve Bill

Retrieve a bill.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getBill("sampleBillId");
```

#### Delete Bill

Delete a bill.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteBill("sampleBillId");
```

### Invoices

#### List Items for Create Invoice

List items for creating an invoice.

```javascript
const apiClient = new UAPI(apiKey);

const filter = {
  itemName: "Commission",
};

const data = await apiClient.Accounting.listItems(filter);
```

#### Create Invoice

Create an invoice.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  customerId: "sampleCustomerId",
  invoiceNumber: "ALY-001",
  lineItems: [
    {
      description: "Item Description",
      totalAmount: 100,
      accountingItemId: "sampleItemId",
    },
  ],
};

const data = await apiClient.Accounting.createInvoice(body);
```

#### Update Invoice

Update an invoice.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  invoiceNumber: "UpdatedALY-001",
};

const data = await apiClient.Accounting.updateInvoice("sampleInvoiceId", body);
```

#### List Invoices

List all invoices.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listInvoices();
```

#### Retrieve Invoice

Retrieve an invoice.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getInvoice("sampleInvoiceId");
```

#### Get Invoice Count

Get the count of invoices.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getInvoiceCount();
```

#### Delete Invoice

Delete an invoice.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deleteInvoice("sampleInvoiceId");
```

### Payments

#### Create Payment

Create a payment.

```javascript
const apiClient = new UAPI(apiKey);

const body = {
  customerId: "sampleCustomerId",
  totalAmount: 10,
};

const data = await apiClient.Accounting.createPayment(body);
```


#### Update Payment

Update a payment.

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(quickbooksConnectionId);

const body = {
  paymentMethod: "CHECK",
};

const data = await apiClient.Accounting.updatePayment("samplePaymentId", body);
```


#### List Payments

List all payments.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.listPayments();
```

#### Get Payment Count

Get the count of payments.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getPaymentCount();
```

#### Retrieve Payment

Retrieve a payment.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.getPayment("samplePaymentId");
```

#### Delete Payment

Delete a payment.

```javascript
const apiClient = new UAPI(apiKey);

const data = await apiClient.Accounting.deletePayment("samplePaymentId");
```
