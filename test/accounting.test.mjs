import { UAPI } from "../index.mjs";
import { apiKey, quickbooksConnectionId } from "../utils";
const { v4: uuidv4 } = require("uuid");

describe("Quickbooks Company Info", () => {
  let companyInfoId;

  test("should list company info", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      accountName: "Mojica",
    };
    let data = await apiClient.Accounting.listCompanyInfo();
    expect(data.companyInfo).toBeDefined();
    expect(data.companyInfo[0]).toBeDefined();
    expect(data.companyInfo[0]).toHaveProperty("remoteId");
    expect(data.companyInfo[0]).toHaveProperty("companyName");
    expect(data.companyInfo[0]).toHaveProperty("companyLegalName");
    expect(data.companyInfo[0]).toHaveProperty("taxNumber");
    expect(data.companyInfo[0]).toHaveProperty("fiscalYearEndMonth");
    expect(data.companyInfo[0]).toHaveProperty("fiscalYearEndDay");
    expect(data.companyInfo[0]).toHaveProperty("currency");
    expect(data.companyInfo[0]).toHaveProperty("companyUrls");
    expect(data.companyInfo[0]).toHaveProperty("companyAddresses");
    expect(data.companyInfo[0]).toHaveProperty("companyPhoneNumbers");
    expect(data.companyInfo[0]).toHaveProperty("id");

    companyInfoId = data.companyInfo[0].id;
  });

  test("should return company info count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getCompanyInfoCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should return a specific company's info", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.getCompanyInfo(companyInfoId);
    expect(data.companyInfo).toBeDefined();
    expect(data.companyInfo).toBeDefined();
    expect(data.companyInfo).toHaveProperty("remoteId");
    expect(data.companyInfo).toHaveProperty("companyName");
    expect(data.companyInfo).toHaveProperty("companyLegalName");
    expect(data.companyInfo).toHaveProperty("taxNumber");
    expect(data.companyInfo).toHaveProperty("fiscalYearEndMonth");
    expect(data.companyInfo).toHaveProperty("fiscalYearEndDay");
    expect(data.companyInfo).toHaveProperty("currency");
    expect(data.companyInfo).toHaveProperty("companyUrls");
    expect(data.companyInfo).toHaveProperty("companyAddresses");
    expect(data.companyInfo).toHaveProperty("companyPhoneNumbers");
    expect(data.companyInfo).toHaveProperty("id");
    expect(data).toBeDefined();
  });
});

describe("Quickbooks Account", () => {
  let accountId;

  test("should create an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      accountName: `Gregg-${uuidv4()}`,
      accountType: "OTHER_ASSET",
      currency: "USD",
    };
    let data = await apiClient.Accounting.createAccount(body);
    expect(data.account).toBeDefined();
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("accountDescription");
    expect(data.account).toHaveProperty("classification");
    expect(data.account).toHaveProperty("accountType");
    expect(data.account).toHaveProperty("accountStatus");
    expect(data.account).toHaveProperty("currentBalance");
    expect(data.account).toHaveProperty("accountNumber");
    expect(data.account).toHaveProperty("parentAccountId");
    expect(data.account).toHaveProperty("companyId");
    expect(data.account).toHaveProperty("id");

    accountId = data.account.id;
  });

  test("should list accounts", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listAccounts();
    expect(data).toBeDefined();
    expect(data.accounts[0]).toBeDefined();
    expect(data.accounts[0]).toBeDefined();
    expect(data.accounts[0]).toHaveProperty("remoteId");
    expect(data.accounts[0]).toHaveProperty("accountName");
    expect(data.accounts[0]).toHaveProperty("accountDescription");
    expect(data.accounts[0]).toHaveProperty("classification");
    expect(data.accounts[0]).toHaveProperty("accountType");
    expect(data.accounts[0]).toHaveProperty("accountStatus");
    expect(data.accounts[0]).toHaveProperty("currentBalance");
    expect(data.accounts[0]).toHaveProperty("accountNumber");
    expect(data.accounts[0]).toHaveProperty("parentAccountId");
    expect(data.accounts[0]).toHaveProperty("companyId");
    expect(data.accounts[0]).toHaveProperty("id");
  });

  test("should get account count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getAccountCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getAccount(accountId);
    expect(data.account).toBeDefined();
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("accountDescription");
    expect(data.account).toHaveProperty("classification");
    expect(data.account).toHaveProperty("accountType");
    expect(data.account).toHaveProperty("accountStatus");
    expect(data.account).toHaveProperty("currentBalance");
    expect(data.account).toHaveProperty("accountNumber");
    expect(data.account).toHaveProperty("parentAccountId");
    expect(data.account).toHaveProperty("companyId");
    expect(data.account).toHaveProperty("id");
  });

  test("should update an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let body = {
      accountName: `CachoChildren+${uuidv4()}}`,
    };
    let data = await apiClient.Accounting.updateAccount(accountId, body);
    expect(data.account).toBeDefined();
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("accountDescription");
    expect(data.account).toHaveProperty("classification");
    expect(data.account).toHaveProperty("accountType");
    expect(data.account).toHaveProperty("accountStatus");
    expect(data.account).toHaveProperty("currentBalance");
    expect(data.account).toHaveProperty("accountNumber");
    expect(data.account).toHaveProperty("parentAccountId");
    expect(data.account).toHaveProperty("companyId");
    expect(data.account).toHaveProperty("id");
  });

  test("should delete an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deleteAccount(accountId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});

describe("Quickbooks Vendors", () => {
  let vendorId;

  test("should create a vendor", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      vendorName: `Alloy-${uuidv4()}`,
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
    let data = await apiClient.Accounting.createVendor(body);
    expect(data).toHaveProperty("vendor");
    expect(data.vendor).toHaveProperty("remoteId");
    expect(data.vendor).toHaveProperty("vendorName");
    expect(data.vendor).toHaveProperty("email");
    expect(data.vendor).toHaveProperty("taxNumber");
    expect(data.vendor).toHaveProperty("vendorStatus");
    expect(data.vendor).toHaveProperty("currency");
    expect(data.vendor).toHaveProperty("companyId");
    expect(data.vendor).toHaveProperty("addresses");
    expect(data.vendor).toHaveProperty("phoneNumbers");
    expect(data.vendor).toHaveProperty("createdTimestamp");
    expect(data.vendor).toHaveProperty("updatedTimestamp");
    expect(data.vendor).toHaveProperty("id");
    expect(data.vendor.addresses[0]).toHaveProperty("addressType");
    expect(data.vendor.addresses[0]).toHaveProperty("street1");
    expect(data.vendor.addresses[0]).toHaveProperty("street2");
    expect(data.vendor.addresses[0]).toHaveProperty("city");
    expect(data.vendor.addresses[0]).toHaveProperty("state");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("countrySubdivision");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("zipCode");

    vendorId = data.vendor.id;
  });

  test("should list vendors", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listVendors();
    expect(data).toHaveProperty("vendors");
    expect(data.vendors[0]).toHaveProperty("remoteId");
    expect(data.vendors[0]).toHaveProperty("vendorName");
    expect(data.vendors[0]).toHaveProperty("email");
    expect(data.vendors[0]).toHaveProperty("taxNumber");
    expect(data.vendors[0]).toHaveProperty("vendorStatus");
    expect(data.vendors[0]).toHaveProperty("currency");
    expect(data.vendors[0]).toHaveProperty("companyId");
    expect(data.vendors[0]).toHaveProperty("addresses");
    expect(data.vendors[0]).toHaveProperty("phoneNumbers");
    expect(data.vendors[0]).toHaveProperty("createdTimestamp");
    expect(data.vendors[0]).toHaveProperty("updatedTimestamp");
    expect(data.vendors[0]).toHaveProperty("id");
    expect(data.vendors[0].addresses[0]).toHaveProperty("addressType");
    expect(data.vendors[0].addresses[0]).toHaveProperty("street1");
    expect(data.vendors[0].addresses[0]).toHaveProperty("street2");
    expect(data.vendors[0].addresses[0]).toHaveProperty("city");
    expect(data.vendors[0].addresses[0]).toHaveProperty("state");
    expect(data.vendors[0].addresses[0]).toHaveProperty("country");
    expect(data.vendors[0].addresses[0]).toHaveProperty("countrySubdivision");
    expect(data.vendors[0].addresses[0]).toHaveProperty("country");
    expect(data.vendors[0].addresses[0]).toHaveProperty("zipCode");
  });

  test("should get vendor count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getVendorCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve a vendor", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getVendor(vendorId);
    expect(data).toHaveProperty("vendor");
    expect(data.vendor).toHaveProperty("remoteId");
    expect(data.vendor).toHaveProperty("vendorName");
    expect(data.vendor).toHaveProperty("email");
    expect(data.vendor).toHaveProperty("taxNumber");
    expect(data.vendor).toHaveProperty("vendorStatus");
    expect(data.vendor).toHaveProperty("currency");
    expect(data.vendor).toHaveProperty("companyId");
    expect(data.vendor).toHaveProperty("addresses");
    expect(data.vendor).toHaveProperty("phoneNumbers");
    expect(data.vendor).toHaveProperty("createdTimestamp");
    expect(data.vendor).toHaveProperty("updatedTimestamp");
    expect(data.vendor).toHaveProperty("id");
    expect(data.vendor.addresses[0]).toHaveProperty("addressType");
    expect(data.vendor.addresses[0]).toHaveProperty("street1");
    expect(data.vendor.addresses[0]).toHaveProperty("street2");
    expect(data.vendor.addresses[0]).toHaveProperty("city");
    expect(data.vendor.addresses[0]).toHaveProperty("state");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("countrySubdivision");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("zipCode");
  });

  test("should update a vendor", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let body = {
      vendorName: `AlloyUpdate+${uuidv4()}`,
      vendorStatus: "ACTIVE",
      addresses: [
        {
          addressType: "BILLING",
          street1: "Dan Troy",
          zipCode: "14221",
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
    let data = await apiClient.Accounting.updateVendor(vendorId, body);
    expect(data).toHaveProperty("vendor");
    expect(data.vendor).toHaveProperty("remoteId");
    expect(data.vendor).toHaveProperty("vendorName");
    expect(data.vendor).toHaveProperty("email");
    expect(data.vendor).toHaveProperty("taxNumber");
    expect(data.vendor).toHaveProperty("vendorStatus");
    expect(data.vendor).toHaveProperty("currency");
    expect(data.vendor).toHaveProperty("companyId");
    expect(data.vendor).toHaveProperty("addresses");
    expect(data.vendor).toHaveProperty("phoneNumbers");
    expect(data.vendor).toHaveProperty("createdTimestamp");
    expect(data.vendor).toHaveProperty("updatedTimestamp");
    expect(data.vendor).toHaveProperty("id");
    expect(data.vendor.addresses[0]).toHaveProperty("addressType");
    expect(data.vendor.addresses[0]).toHaveProperty("street1");
    expect(data.vendor.addresses[0]).toHaveProperty("street2");
    expect(data.vendor.addresses[0]).toHaveProperty("city");
    expect(data.vendor.addresses[0]).toHaveProperty("state");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("countrySubdivision");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("zipCode");
  });

  test("should delete a vendor", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deleteVendor(vendorId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});

describe("Quickbooks Customers", () => {
  let customerId;

  test("should create a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      customerName: `Alloy-${uuidv4()}`,
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
    let data = await apiClient.Accounting.createCustomer(body);
    expect(data).toHaveProperty("customer");
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("customerName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("taxNumber");
    expect(data.customer).toHaveProperty("customerStatus");
    expect(data.customer).toHaveProperty("currency");
    expect(data.customer).toHaveProperty("companyId");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer.addresses[0]).toHaveProperty("addressType");
    expect(data.customer.addresses[0]).toHaveProperty("street1");
    expect(data.customer).toHaveProperty("phoneNumbers");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumberType");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumber");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("id");

    customerId = data.customer.id;
  });

  test("should list customers", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listCustomers();
    expect(data).toBeDefined();
    expect(data.customers[0]).toHaveProperty("remoteId");
    expect(data.customers[0]).toHaveProperty("customerName");
    expect(data.customers[0]).toHaveProperty("email");
    expect(data.customers[0]).toHaveProperty("taxNumber");
    expect(data.customers[0]).toHaveProperty("customerStatus");
    expect(data.customers[0]).toHaveProperty("currency");
    expect(data.customers[0]).toHaveProperty("companyId");
    expect(data.customers[0]).toHaveProperty("addresses");
    expect(data.customers[0].addresses[0]).toHaveProperty("addressType");
    expect(data.customers[0].addresses[0]).toHaveProperty("street1");
    expect(data.customers[0]).toHaveProperty("phoneNumbers");
    expect(data.customers[0].phoneNumbers[0]).toHaveProperty("phoneNumberType");
    expect(data.customers[0].phoneNumbers[0]).toHaveProperty("phoneNumber");
    expect(data.customers[0]).toHaveProperty("addresses");
    expect(data.customers[0]).toHaveProperty("createdTimestamp");
    expect(data.customers[0]).toHaveProperty("updatedTimestamp");
    expect(data.customers[0]).toHaveProperty("id");
  });

  test("should get customer count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getCustomerCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getCustomer(customerId);
    expect(data).toHaveProperty("customer");
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("customerName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("taxNumber");
    expect(data.customer).toHaveProperty("customerStatus");
    expect(data.customer).toHaveProperty("currency");
    expect(data.customer).toHaveProperty("companyId");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer.addresses[0]).toHaveProperty("addressType");
    expect(data.customer.addresses[0]).toHaveProperty("street1");
    expect(data.customer).toHaveProperty("phoneNumbers");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumberType");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumber");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("id");
  });

  test("should update a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let body = {
      customerName: `AlloyUpdate+${uuidv4()}`,
      addresses: [
        {
          addressType: "BILLING",
          street1: "Lombard",
          zipCode: "94012",
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
    let data = await apiClient.Accounting.updateCustomer(customerId, body);
    expect(data).toHaveProperty("customer");
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("customerName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("taxNumber");
    expect(data.customer).toHaveProperty("customerStatus");
    expect(data.customer).toHaveProperty("currency");
    expect(data.customer).toHaveProperty("companyId");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer.addresses[0]).toHaveProperty("addressType");
    expect(data.customer.addresses[0]).toHaveProperty("street1");
    expect(data.customer).toHaveProperty("phoneNumbers");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumberType");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumber");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("id");
  });

  test("should delete a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deleteCustomer(customerId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});

describe("Quickbooks Tax Rates", () => {
  let taxRateId;

  test("should list tax rates", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listTaxRates();
    expect(data).toBeDefined();
    expect(data.taxRates[0]).toHaveProperty("remoteId");
    expect(data.taxRates[0]).toHaveProperty("description");
    expect(data.taxRates[0]).toHaveProperty("totalTaxRate");
    expect(data.taxRates[0]).toHaveProperty("effectiveTaxRate");
    expect(data.taxRates[0]).toHaveProperty("companyId");
    expect(data.taxRates[0]).toHaveProperty("id");

    taxRateId = data.taxRates[0].id;
  });

  test("should get tax rate count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getCustomerCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve a tax rate", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getTaxRate(taxRateId);
    expect(data.taxRate).toHaveProperty("remoteId");
    expect(data.taxRate).toHaveProperty("description");
    expect(data.taxRate).toHaveProperty("totalTaxRate");
    expect(data.taxRate).toHaveProperty("effectiveTaxRate");
    expect(data.taxRate).toHaveProperty("companyId");
    expect(data.taxRate).toHaveProperty("id");
  });
});

describe("Quickbooks List Tracking Categories", () => {
  let trackingCategoryId;

  test("should list ticketing category", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listTrackingCategory();
    expect(data).toBeDefined();
    expect(data.trackingCategories[0]).toHaveProperty("remoteId");
    expect(data.trackingCategories[0]).toHaveProperty("trackingCategoryName");
    expect(data.trackingCategories[0]).toHaveProperty("trackingCategoryStatus");
    expect(data.trackingCategories[0]).toHaveProperty("trackingCategoryType");
    expect(data.trackingCategories[0]).toHaveProperty("parentCategoryId");
    expect(data.trackingCategories[0]).toHaveProperty("companyId");
    expect(data.trackingCategories[0]).toHaveProperty("id");

    trackingCategoryId = data.trackingCategories[0].id;
  });

  test("should get tracking category count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getTrackingCategoryCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve a ticketing category", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getTrackingCategory(
      trackingCategoryId
    );
    expect(data).toBeDefined();
    expect(data).toHaveProperty("trackingCategory");
    expect(data.trackingCategory).toHaveProperty("remoteId");
    expect(data.trackingCategory).toHaveProperty("trackingCategoryName");
    expect(data.trackingCategory).toHaveProperty("trackingCategoryStatus");
    expect(data.trackingCategory).toHaveProperty("trackingCategoryType");
    expect(data.trackingCategory).toHaveProperty("parentCategoryId");
    expect(data.trackingCategory).toHaveProperty("companyId");
    expect(data.trackingCategory).toHaveProperty("id");
  });
});

describe("Quickbooks Items", () => {
  let itemId, accountId;

  test("should create an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      accountName: `Gregg-${uuidv4()}`,
      accountType: "OTHER_ASSET",
      currency: "USD",
    };
    let data = await apiClient.Accounting.createAccount(body);
    expect(data.account).toBeDefined();
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("accountDescription");
    expect(data.account).toHaveProperty("classification");
    expect(data.account).toHaveProperty("accountType");
    expect(data.account).toHaveProperty("accountStatus");
    expect(data.account).toHaveProperty("currentBalance");
    expect(data.account).toHaveProperty("accountNumber");
    expect(data.account).toHaveProperty("parentAccountId");
    expect(data.account).toHaveProperty("companyId");
    expect(data.account).toHaveProperty("id");

    accountId = data.account.id;
  });

  test("should create an item", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      itemName: `Item ${uuidv4()}`,
      itemType: "SERVICE",
      billAccountId: accountId,
    };
    let data = await apiClient.Accounting.createItem(body);
    expect(data).toHaveProperty("item");
    expect(data.item).toHaveProperty("remoteId");
    expect(data.item).toHaveProperty("itemName");
    expect(data.item).toHaveProperty("itemStatus");
    expect(data.item).toHaveProperty("itemType");
    expect(data.item).toHaveProperty("unitPrice");
    expect(data.item).toHaveProperty("purchasePrice");
    expect(data.item).toHaveProperty("qtyOnHand");
    expect(data.item).toHaveProperty("billAccountId");
    expect(data.item).toHaveProperty("invoiceAccountId");
    expect(data.item).toHaveProperty("assetAccountId");
    expect(data.item).toHaveProperty("companyId");
    expect(data.item).toHaveProperty("createdTimestamp");
    expect(data.item).toHaveProperty("updatedTimestamp");
    expect(data.item).toHaveProperty("id");

    itemId = data.item.id;
  });

  test("should list items", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listItems();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("items");
    expect(data.items[0]).toHaveProperty("remoteId");
    expect(data.items[0]).toHaveProperty("itemName");
    expect(data.items[0]).toHaveProperty("itemStatus");
    expect(data.items[0]).toHaveProperty("itemType");
    expect(data.items[0]).toHaveProperty("unitPrice");
    expect(data.items[0]).toHaveProperty("purchasePrice");
    expect(data.items[0]).toHaveProperty("qtyOnHand");
    expect(data.items[0]).toHaveProperty("billAccountId");
    expect(data.items[0]).toHaveProperty("invoiceAccountId");
    expect(data.items[0]).toHaveProperty("assetAccountId");
    expect(data.items[0]).toHaveProperty("companyId");
    expect(data.items[0]).toHaveProperty("createdTimestamp");
    expect(data.items[0]).toHaveProperty("updatedTimestamp");
    expect(data.items[0]).toHaveProperty("id");
  });

  test("should get item count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getItemsCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve an item", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getItem(itemId);
    expect(data).toHaveProperty("item");
    expect(data.item).toHaveProperty("remoteId");
    expect(data.item).toHaveProperty("itemName");
    expect(data.item).toHaveProperty("itemStatus");
    expect(data.item).toHaveProperty("itemType");
    expect(data.item).toHaveProperty("unitPrice");
    expect(data.item).toHaveProperty("purchasePrice");
    expect(data.item).toHaveProperty("qtyOnHand");
    expect(data.item).toHaveProperty("billAccountId");
    expect(data.item).toHaveProperty("invoiceAccountId");
    expect(data.item).toHaveProperty("assetAccountId");
    expect(data.item).toHaveProperty("companyId");
    expect(data.item).toHaveProperty("createdTimestamp");
    expect(data.item).toHaveProperty("updatedTimestamp");
    expect(data.item).toHaveProperty("id");
  });

  test("should update an item", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let body = {
      itemStatus: "ACTIVE",
    };
    let data = await apiClient.Accounting.updateItem(itemId, body);
    expect(data).toHaveProperty("item");
    expect(data.item).toHaveProperty("remoteId");
    expect(data.item).toHaveProperty("itemName");
    expect(data.item).toHaveProperty("itemStatus");
    expect(data.item).toHaveProperty("itemType");
    expect(data.item).toHaveProperty("unitPrice");
    expect(data.item).toHaveProperty("purchasePrice");
    expect(data.item).toHaveProperty("qtyOnHand");
    expect(data.item).toHaveProperty("billAccountId");
    expect(data.item).toHaveProperty("invoiceAccountId");
    expect(data.item).toHaveProperty("assetAccountId");
    expect(data.item).toHaveProperty("companyId");
    expect(data.item).toHaveProperty("createdTimestamp");
    expect(data.item).toHaveProperty("updatedTimestamp");
    expect(data.item).toHaveProperty("id");
  });

  test("should delete an item", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deleteItem(itemId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});

describe("Quickbooks Purchase Orders", () => {
  let accountIdForCreatePO, itemIdForCreatePO, vendorId, purchaseOrderId;

  test("should list account for create po", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let filter = {
      classification: "LIABILITY",
      accountType: "ACCOUNTS_PAYABLE",
    };
    let data = await apiClient.Accounting.listAccounts(filter);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("accounts");
    expect(data.accounts[0]).toBeDefined();
    expect(data.accounts[0]).toBeDefined();
    expect(data.accounts[0]).toHaveProperty("remoteId");
    expect(data.accounts[0]).toHaveProperty("accountName");
    expect(data.accounts[0]).toHaveProperty("accountDescription");
    expect(data.accounts[0]).toHaveProperty("classification");
    expect(data.accounts[0]).toHaveProperty("accountType");
    expect(data.accounts[0]).toHaveProperty("accountStatus");
    expect(data.accounts[0]).toHaveProperty("currentBalance");
    expect(data.accounts[0]).toHaveProperty("accountNumber");
    expect(data.accounts[0]).toHaveProperty("parentAccountId");
    expect(data.accounts[0]).toHaveProperty("companyId");
    expect(data.accounts[0]).toHaveProperty("id");

    accountIdForCreatePO = data.accounts[0].id;
  });

  test("should list items with type SERVICE for create po", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let filter = {
      itemType: "SERVICE",
    };
    let data = await apiClient.Accounting.listItems(filter);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("items");
    expect(data.items[0]).toHaveProperty("remoteId");
    expect(data.items[0]).toHaveProperty("itemName");
    expect(data.items[0]).toHaveProperty("itemStatus");
    expect(data.items[0]).toHaveProperty("itemType");
    expect(data.items[0]).toHaveProperty("unitPrice");
    expect(data.items[0]).toHaveProperty("purchasePrice");
    expect(data.items[0]).toHaveProperty("qtyOnHand");
    expect(data.items[0]).toHaveProperty("billAccountId");
    expect(data.items[0]).toHaveProperty("invoiceAccountId");
    expect(data.items[0]).toHaveProperty("assetAccountId");
    expect(data.items[0]).toHaveProperty("companyId");
    expect(data.items[0]).toHaveProperty("createdTimestamp");
    expect(data.items[0]).toHaveProperty("updatedTimestamp");
    expect(data.items[0]).toHaveProperty("id");

    itemIdForCreatePO = data.items[0].id;
  });

  test("should create a vendor", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      vendorName: `Alloy-${uuidv4()}`,
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
    let data = await apiClient.Accounting.createVendor(body);
    expect(data).toHaveProperty("vendor");
    expect(data.vendor).toHaveProperty("remoteId");
    expect(data.vendor).toHaveProperty("vendorName");
    expect(data.vendor).toHaveProperty("email");
    expect(data.vendor).toHaveProperty("taxNumber");
    expect(data.vendor).toHaveProperty("vendorStatus");
    expect(data.vendor).toHaveProperty("currency");
    expect(data.vendor).toHaveProperty("companyId");
    expect(data.vendor).toHaveProperty("addresses");
    expect(data.vendor).toHaveProperty("phoneNumbers");
    expect(data.vendor).toHaveProperty("createdTimestamp");
    expect(data.vendor).toHaveProperty("updatedTimestamp");
    expect(data.vendor).toHaveProperty("id");
    expect(data.vendor.addresses[0]).toHaveProperty("addressType");
    expect(data.vendor.addresses[0]).toHaveProperty("street1");
    expect(data.vendor.addresses[0]).toHaveProperty("street2");
    expect(data.vendor.addresses[0]).toHaveProperty("city");
    expect(data.vendor.addresses[0]).toHaveProperty("state");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("countrySubdivision");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("zipCode");

    vendorId = data.vendor.id;
  });

  test("should create a purchase order", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      vendorId: vendorId,
      accountId: accountIdForCreatePO,
      lineItems: [
        {
          description: "Line Item 1",
          accountingItemId: itemIdForCreatePO,
          totalLineAmount: 100,
        },
      ],
    };
    let data = await apiClient.Accounting.createPurchaseOrder(body);
    expect(data).toHaveProperty("purchaseOrder");
    expect(data.purchaseOrder).toHaveProperty("remoteId");
    expect(data.purchaseOrder).toHaveProperty("poStatus");
    expect(data.purchaseOrder).toHaveProperty("issueDate");
    expect(data.purchaseOrder).toHaveProperty("poNumber");
    expect(data.purchaseOrder).toHaveProperty("deliveryDate");
    expect(data.purchaseOrder).toHaveProperty("deliveryAddress");
    expect(data.purchaseOrder).toHaveProperty("vendorId");
    expect(data.purchaseOrder).toHaveProperty("accountId");
    expect(data.purchaseOrder).toHaveProperty("memo");
    expect(data.purchaseOrder).toHaveProperty("companyId");
    expect(data.purchaseOrder).toHaveProperty("totalAmount");
    expect(data.purchaseOrder).toHaveProperty("currency");
    expect(data.purchaseOrder).toHaveProperty("exchangeRate");
    expect(data.purchaseOrder).toHaveProperty("lineItems");
    expect(data.purchaseOrder).toHaveProperty("trackingCategoryIds");
    expect(data.purchaseOrder).toHaveProperty("createdTimestamp");
    expect(data.purchaseOrder).toHaveProperty("updatedTimestamp");

    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("id");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("remoteId");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("description");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("unitPrice");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("quantity");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("accountingItemId");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("accountId");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty(
      "trackingCategoryId"
    );
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("taxAmount");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("totalLineAmount");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("currency");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty(
      "trackingCategoryIds"
    );

    purchaseOrderId = data.purchaseOrder.id;
  });

  test("should list purchase orders", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listPurchaseOrders();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("purchaseOrders");
    expect(data.purchaseOrders[0]).toHaveProperty("remoteId");
    expect(data.purchaseOrders[0]).toHaveProperty("poStatus");
    expect(data.purchaseOrders[0]).toHaveProperty("issueDate");
    expect(data.purchaseOrders[0]).toHaveProperty("poNumber");
    expect(data.purchaseOrders[0]).toHaveProperty("deliveryDate");
    expect(data.purchaseOrders[0]).toHaveProperty("deliveryAddress");
    expect(data.purchaseOrders[0]).toHaveProperty("vendorId");
    expect(data.purchaseOrders[0]).toHaveProperty("accountId");
    expect(data.purchaseOrders[0]).toHaveProperty("memo");
    expect(data.purchaseOrders[0]).toHaveProperty("companyId");
    expect(data.purchaseOrders[0]).toHaveProperty("totalAmount");
    expect(data.purchaseOrders[0]).toHaveProperty("currency");
    expect(data.purchaseOrders[0]).toHaveProperty("exchangeRate");
    expect(data.purchaseOrders[0]).toHaveProperty("lineItems");
    expect(data.purchaseOrders[0]).toHaveProperty("trackingCategoryIds");
    expect(data.purchaseOrders[0]).toHaveProperty("createdTimestamp");
    expect(data.purchaseOrders[0]).toHaveProperty("updatedTimestamp");

    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("id");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("remoteId");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("description");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("unitPrice");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("quantity");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty(
      "accountingItemId"
    );
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("accountId");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty(
      "trackingCategoryId"
    );
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("taxAmount");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty(
      "totalLineAmount"
    );
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty("currency");
    expect(data.purchaseOrders[0].lineItems[0]).toHaveProperty(
      "trackingCategoryIds"
    );
  });

  test("should get purchase order count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getPurchaseOrdersCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve purchase order", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      accountName: `Gregg-${uuidv4()}`,
      accountType: "OTHER_ASSET",
      currency: "USD",
    };
    let data = await apiClient.Accounting.getPurchaseOrder(purchaseOrderId);
    expect(data).toHaveProperty("purchaseOrder");
    expect(data.purchaseOrder).toHaveProperty("remoteId");
    expect(data.purchaseOrder).toHaveProperty("poStatus");
    expect(data.purchaseOrder).toHaveProperty("issueDate");
    expect(data.purchaseOrder).toHaveProperty("poNumber");
    expect(data.purchaseOrder).toHaveProperty("deliveryDate");
    expect(data.purchaseOrder).toHaveProperty("deliveryAddress");
    expect(data.purchaseOrder).toHaveProperty("vendorId");
    expect(data.purchaseOrder).toHaveProperty("accountId");
    expect(data.purchaseOrder).toHaveProperty("memo");
    expect(data.purchaseOrder).toHaveProperty("companyId");
    expect(data.purchaseOrder).toHaveProperty("totalAmount");
    expect(data.purchaseOrder).toHaveProperty("currency");
    expect(data.purchaseOrder).toHaveProperty("exchangeRate");
    expect(data.purchaseOrder).toHaveProperty("lineItems");
    expect(data.purchaseOrder).toHaveProperty("trackingCategoryIds");
    expect(data.purchaseOrder).toHaveProperty("createdTimestamp");
    expect(data.purchaseOrder).toHaveProperty("updatedTimestamp");

    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("id");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("remoteId");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("description");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("unitPrice");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("quantity");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("accountingItemId");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("accountId");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty(
      "trackingCategoryId"
    );
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("taxAmount");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("totalLineAmount");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty("currency");
    expect(data.purchaseOrder.lineItems[0]).toHaveProperty(
      "trackingCategoryIds"
    );
  });

  test("should delete a purchase order", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deletePurchaseOrder(purchaseOrderId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});

describe("Quickbooks Bills", () => {
  let billId, accountId, vendorId;

  test("should create a vendor", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      vendorName: `Alloy-${uuidv4()}`,
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
    let data = await apiClient.Accounting.createVendor(body);
    expect(data).toHaveProperty("vendor");
    expect(data.vendor).toHaveProperty("remoteId");
    expect(data.vendor).toHaveProperty("vendorName");
    expect(data.vendor).toHaveProperty("email");
    expect(data.vendor).toHaveProperty("taxNumber");
    expect(data.vendor).toHaveProperty("vendorStatus");
    expect(data.vendor).toHaveProperty("currency");
    expect(data.vendor).toHaveProperty("companyId");
    expect(data.vendor).toHaveProperty("addresses");
    expect(data.vendor).toHaveProperty("phoneNumbers");
    expect(data.vendor).toHaveProperty("createdTimestamp");
    expect(data.vendor).toHaveProperty("updatedTimestamp");
    expect(data.vendor).toHaveProperty("id");
    expect(data.vendor.addresses[0]).toHaveProperty("addressType");
    expect(data.vendor.addresses[0]).toHaveProperty("street1");
    expect(data.vendor.addresses[0]).toHaveProperty("street2");
    expect(data.vendor.addresses[0]).toHaveProperty("city");
    expect(data.vendor.addresses[0]).toHaveProperty("state");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("countrySubdivision");
    expect(data.vendor.addresses[0]).toHaveProperty("country");
    expect(data.vendor.addresses[0]).toHaveProperty("zipCode");

    vendorId = data.vendor.id;
  });

  test("should create an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      accountName: `Gregg-${uuidv4()}`,
      accountType: "OTHER_ASSET",
      currency: "USD",
    };
    let data = await apiClient.Accounting.createAccount(body);
    expect(data.account).toBeDefined();
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("accountDescription");
    expect(data.account).toHaveProperty("classification");
    expect(data.account).toHaveProperty("accountType");
    expect(data.account).toHaveProperty("accountStatus");
    expect(data.account).toHaveProperty("currentBalance");
    expect(data.account).toHaveProperty("accountNumber");
    expect(data.account).toHaveProperty("parentAccountId");
    expect(data.account).toHaveProperty("companyId");
    expect(data.account).toHaveProperty("id");

    accountId = data.account.id;
  });

  test("should create a bill", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      vendorId: vendorId,
      billNumber: "PLDT-001",
      lineItems: [
        {
          description: "Line Item 1",
          totalAmount: 100,
          accountId: accountId,
        },
      ],
    };
    let data = await apiClient.Accounting.createBill(body);
    expect(data).toHaveProperty("bill");
    expect(data.bill).toHaveProperty("remoteId");
    expect(data.bill).toHaveProperty("vendorId");
    expect(data.bill).toHaveProperty("billNumber");
    expect(data.bill).toHaveProperty("issueDate");
    expect(data.bill).toHaveProperty("dueDate");
    expect(data.bill).toHaveProperty("paidOnDate");
    expect(data.bill).toHaveProperty("memo");
    expect(data.bill).toHaveProperty("companyId");
    expect(data.bill).toHaveProperty("currency");
    expect(data.bill).toHaveProperty("exchangeRate");
    expect(data.bill).toHaveProperty("totalDiscount");
    expect(data.bill).toHaveProperty("subTotal");
    expect(data.bill).toHaveProperty("billStatus");
    expect(data.bill).toHaveProperty("totalTaxAmount");
    expect(data.bill).toHaveProperty("totalAmount");
    expect(data.bill).toHaveProperty("balance");
    expect(data.bill).toHaveProperty("trackingCategories");
    expect(data.bill).toHaveProperty("lineItems");
    expect(data.bill).toHaveProperty("purchaseOrders");
    expect(data.bill).toHaveProperty("createdTimestamp");
    expect(data.bill).toHaveProperty("updatedTimestamp");
    expect(data.bill).toHaveProperty("id");

    billId = data.bill.id;
  });

  test("should list bills", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listBills();
    expect(data).toHaveProperty("bills");
    expect(data.bills[0]).toHaveProperty("remoteId");
    expect(data.bills[0]).toHaveProperty("vendorId");
    expect(data.bills[0]).toHaveProperty("billNumber");
    expect(data.bills[0]).toHaveProperty("issueDate");
    expect(data.bills[0]).toHaveProperty("dueDate");
    expect(data.bills[0]).toHaveProperty("paidOnDate");
    expect(data.bills[0]).toHaveProperty("memo");
    expect(data.bills[0]).toHaveProperty("companyId");
    expect(data.bills[0]).toHaveProperty("currency");
    expect(data.bills[0]).toHaveProperty("exchangeRate");
    expect(data.bills[0]).toHaveProperty("totalDiscount");
    expect(data.bills[0]).toHaveProperty("subTotal");
    expect(data.bills[0]).toHaveProperty("billStatus");
    expect(data.bills[0]).toHaveProperty("totalTaxAmount");
    expect(data.bills[0]).toHaveProperty("totalAmount");
    expect(data.bills[0]).toHaveProperty("balance");
    expect(data.bills[0]).toHaveProperty("trackingCategories");
    expect(data.bills[0]).toHaveProperty("lineItems");
    expect(data.bills[0]).toHaveProperty("purchaseOrders");
    expect(data.bills[0]).toHaveProperty("createdTimestamp");
    expect(data.bills[0]).toHaveProperty("updatedTimestamp");
    expect(data.bills[0]).toHaveProperty("id");
  });

  test("should get bill count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getBillCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve a bill", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getBill(billId);
    expect(data).toHaveProperty("bill");
    expect(data.bill).toHaveProperty("remoteId");
    expect(data.bill).toHaveProperty("vendorId");
    expect(data.bill).toHaveProperty("billNumber");
    expect(data.bill).toHaveProperty("issueDate");
    expect(data.bill).toHaveProperty("dueDate");
    expect(data.bill).toHaveProperty("paidOnDate");
    expect(data.bill).toHaveProperty("memo");
    expect(data.bill).toHaveProperty("companyId");
    expect(data.bill).toHaveProperty("currency");
    expect(data.bill).toHaveProperty("exchangeRate");
    expect(data.bill).toHaveProperty("totalDiscount");
    expect(data.bill).toHaveProperty("subTotal");
    expect(data.bill).toHaveProperty("billStatus");
    expect(data.bill).toHaveProperty("totalTaxAmount");
    expect(data.bill).toHaveProperty("totalAmount");
    expect(data.bill).toHaveProperty("balance");
    expect(data.bill).toHaveProperty("trackingCategories");
    expect(data.bill).toHaveProperty("lineItems");
    expect(data.bill).toHaveProperty("purchaseOrders");
    expect(data.bill).toHaveProperty("createdTimestamp");
    expect(data.bill).toHaveProperty("updatedTimestamp");
    expect(data.bill).toHaveProperty("id");
  });

  test("should delete a bill", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deleteBill(billId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});

describe("Quickbooks Invoices", () => {
  let invoiceId, itemId, customerId;

  test("should list items for create invoice", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let filter = {
      itemName: "Commission",
    };
    let data = await apiClient.Accounting.listItems(filter);
    expect(data).toHaveProperty("items");
    expect(data.items[0]).toHaveProperty("remoteId");
    expect(data.items[0]).toHaveProperty("itemName");
    expect(data.items[0]).toHaveProperty("itemStatus");
    expect(data.items[0]).toHaveProperty("itemType");
    expect(data.items[0]).toHaveProperty("unitPrice");
    expect(data.items[0]).toHaveProperty("purchasePrice");
    expect(data.items[0]).toHaveProperty("qtyOnHand");
    expect(data.items[0]).toHaveProperty("billAccountId");
    expect(data.items[0]).toHaveProperty("invoiceAccountId");
    expect(data.items[0]).toHaveProperty("assetAccountId");
    expect(data.items[0]).toHaveProperty("companyId");
    expect(data.items[0]).toHaveProperty("createdTimestamp");
    expect(data.items[0]).toHaveProperty("updatedTimestamp");
    expect(data.items[0]).toHaveProperty("id");

    itemId = data.items[0].id;
  });

  test("should create a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      customerName: `Alloy-${uuidv4()}`,
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
    let data = await apiClient.Accounting.createCustomer(body);
    expect(data).toHaveProperty("customer");
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("customerName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("taxNumber");
    expect(data.customer).toHaveProperty("customerStatus");
    expect(data.customer).toHaveProperty("currency");
    expect(data.customer).toHaveProperty("companyId");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer.addresses[0]).toHaveProperty("addressType");
    expect(data.customer.addresses[0]).toHaveProperty("street1");
    expect(data.customer).toHaveProperty("phoneNumbers");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumberType");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumber");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("id");

    customerId = data.customer.id;
  });

  test("should create an invoice", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      customerId: customerId,
      invoiceNumber: "ALY-001",
      lineItems: [
        {
          description: "Francis Menguito - Developer",
          totalAmount: 10000,
          accountingItemId: itemId,
        },
      ],
    };
    let data = await apiClient.Accounting.createInvoice(body);
    expect(data).toHaveProperty("invoice");
    expect(data.invoice).toHaveProperty("remoteId");
    expect(data.invoice).toHaveProperty("customerId");
    expect(data.invoice).toHaveProperty("invoiceNumber");
    expect(data.invoice).toHaveProperty("issueDate");
    expect(data.invoice).toHaveProperty("dueDate");
    expect(data.invoice).toHaveProperty("paidOnDate");
    expect(data.invoice).toHaveProperty("memo");
    expect(data.invoice).toHaveProperty("companyId");
    expect(data.invoice).toHaveProperty("currency");
    expect(data.invoice).toHaveProperty("exchangeRate");
    expect(data.invoice).toHaveProperty("totalDiscount");
    expect(data.invoice).toHaveProperty("subTotal");
    expect(data.invoice).toHaveProperty("invoiceStatus");
    expect(data.invoice).toHaveProperty("totalTaxAmount");
    expect(data.invoice).toHaveProperty("totalAmount");
    expect(data.invoice).toHaveProperty("balance");
    expect(data.invoice).toHaveProperty("trackingCategories");
    expect(data.invoice).toHaveProperty("lineItems");
    expect(data.invoice).toHaveProperty("purchaseOrders");
    expect(data.invoice).toHaveProperty("createdTimestamp");
    expect(data.invoice).toHaveProperty("updatedTimestamp");
    expect(data.invoice).toHaveProperty("id");
    expect(data.invoice.lineItems[0]).toHaveProperty("id");
    expect(data.invoice.lineItems[0]).toHaveProperty("remoteId");
    expect(data.invoice.lineItems[0]).toHaveProperty("description");
    expect(data.invoice.lineItems[0]).toHaveProperty("unitPrice");
    expect(data.invoice.lineItems[0]).toHaveProperty("quantity");
    expect(data.invoice.lineItems[0]).toHaveProperty("totalAmount");
    expect(data.invoice.lineItems[0]).toHaveProperty("currency");
    expect(data.invoice.lineItems[0]).toHaveProperty("exchangeRate");
    expect(data.invoice.lineItems[0]).toHaveProperty("accountingItemId");
    expect(data.invoice.lineItems[0]).toHaveProperty("accountId");
    expect(data.invoice.lineItems[0]).toHaveProperty("trackingCategoryId");
    expect(data.invoice.lineItems[0]).toHaveProperty("trackingCategoryIds");
    expect(data.invoice.lineItems[0]).toHaveProperty("companyId");
    invoiceId = data.invoice.id;
  });

  test("should list invoices", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listInvoices();
    expect(data).toBeDefined();
    expect(data.invoices[0]).toHaveProperty("remoteId");
    expect(data.invoices[0]).toHaveProperty("customerId");
    expect(data.invoices[0]).toHaveProperty("invoiceNumber");
    expect(data.invoices[0]).toHaveProperty("issueDate");
    expect(data.invoices[0]).toHaveProperty("dueDate");
    expect(data.invoices[0]).toHaveProperty("paidOnDate");
    expect(data.invoices[0]).toHaveProperty("memo");
    expect(data.invoices[0]).toHaveProperty("companyId");
    expect(data.invoices[0]).toHaveProperty("currency");
    expect(data.invoices[0]).toHaveProperty("exchangeRate");
    expect(data.invoices[0]).toHaveProperty("totalDiscount");
    expect(data.invoices[0]).toHaveProperty("subTotal");
    expect(data.invoices[0]).toHaveProperty("invoiceStatus");
    expect(data.invoices[0]).toHaveProperty("totalTaxAmount");
    expect(data.invoices[0]).toHaveProperty("totalAmount");
    expect(data.invoices[0]).toHaveProperty("balance");
    expect(data.invoices[0]).toHaveProperty("trackingCategories");
    expect(data.invoices[0]).toHaveProperty("lineItems");
    expect(data.invoices[0]).toHaveProperty("purchaseOrders");
    expect(data.invoices[0]).toHaveProperty("createdTimestamp");
    expect(data.invoices[0]).toHaveProperty("updatedTimestamp");
    expect(data.invoices[0]).toHaveProperty("id");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("id");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("remoteId");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("description");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("unitPrice");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("quantity");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("totalAmount");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("currency");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("exchangeRate");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("accountingItemId");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("accountId");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("trackingCategoryId");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("trackingCategoryIds");
    expect(data.invoices[0].lineItems[0]).toHaveProperty("companyId");
  });

  test("should retrieve an invoice", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getInvoice(invoiceId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("invoice");
    expect(data.invoice).toHaveProperty("remoteId");
    expect(data.invoice).toHaveProperty("customerId");
    expect(data.invoice).toHaveProperty("invoiceNumber");
    expect(data.invoice).toHaveProperty("issueDate");
    expect(data.invoice).toHaveProperty("dueDate");
    expect(data.invoice).toHaveProperty("paidOnDate");
    expect(data.invoice).toHaveProperty("memo");
    expect(data.invoice).toHaveProperty("companyId");
    expect(data.invoice).toHaveProperty("currency");
    expect(data.invoice).toHaveProperty("exchangeRate");
    expect(data.invoice).toHaveProperty("totalDiscount");
    expect(data.invoice).toHaveProperty("subTotal");
    expect(data.invoice).toHaveProperty("invoiceStatus");
    expect(data.invoice).toHaveProperty("totalTaxAmount");
    expect(data.invoice).toHaveProperty("totalAmount");
    expect(data.invoice).toHaveProperty("balance");
    expect(data.invoice).toHaveProperty("trackingCategories");
    expect(data.invoice).toHaveProperty("lineItems");
    expect(data.invoice).toHaveProperty("purchaseOrders");
    expect(data.invoice).toHaveProperty("createdTimestamp");
    expect(data.invoice).toHaveProperty("updatedTimestamp");
    expect(data.invoice).toHaveProperty("id");
    expect(data.invoice.lineItems[0]).toHaveProperty("id");
    expect(data.invoice.lineItems[0]).toHaveProperty("remoteId");
    expect(data.invoice.lineItems[0]).toHaveProperty("description");
    expect(data.invoice.lineItems[0]).toHaveProperty("unitPrice");
    expect(data.invoice.lineItems[0]).toHaveProperty("quantity");
    expect(data.invoice.lineItems[0]).toHaveProperty("totalAmount");
    expect(data.invoice.lineItems[0]).toHaveProperty("currency");
    expect(data.invoice.lineItems[0]).toHaveProperty("exchangeRate");
    expect(data.invoice.lineItems[0]).toHaveProperty("accountingItemId");
    expect(data.invoice.lineItems[0]).toHaveProperty("accountId");
    expect(data.invoice.lineItems[0]).toHaveProperty("trackingCategoryId");
    expect(data.invoice.lineItems[0]).toHaveProperty("trackingCategoryIds");
    expect(data.invoice.lineItems[0]).toHaveProperty("companyId");
  });

  test("should get invoices count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getInvoiceCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should delete an invoice", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deleteInvoice(invoiceId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});

describe("Quickbooks Payments", () => {
  let paymentId, customerId;

  test("should create a customer", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      customerName: `Alloy-${uuidv4()}`,
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
    let data = await apiClient.Accounting.createCustomer(body);
    expect(data).toHaveProperty("customer");
    expect(data.customer).toHaveProperty("remoteId");
    expect(data.customer).toHaveProperty("customerName");
    expect(data.customer).toHaveProperty("email");
    expect(data.customer).toHaveProperty("taxNumber");
    expect(data.customer).toHaveProperty("customerStatus");
    expect(data.customer).toHaveProperty("currency");
    expect(data.customer).toHaveProperty("companyId");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer.addresses[0]).toHaveProperty("addressType");
    expect(data.customer.addresses[0]).toHaveProperty("street1");
    expect(data.customer).toHaveProperty("phoneNumbers");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumberType");
    expect(data.customer.phoneNumbers[0]).toHaveProperty("phoneNumber");
    expect(data.customer).toHaveProperty("addresses");
    expect(data.customer).toHaveProperty("createdTimestamp");
    expect(data.customer).toHaveProperty("updatedTimestamp");
    expect(data.customer).toHaveProperty("id");

    customerId = data.customer.id;
  });

  test("should create a payment", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let body = {
      customerId: customerId,
      totalAmount: 10,
    };
    let data = await apiClient.Accounting.createPayment(body);
    expect(data).toHaveProperty('payment');
    expect(data.payment).toHaveProperty('remoteId');
    expect(data.payment).toHaveProperty('transactionDate');
    expect(data.payment).toHaveProperty('customerId');
    expect(data.payment).toHaveProperty('vendorId');
    expect(data.payment).toHaveProperty('accountId');
    expect(data.payment).toHaveProperty('currency');
    expect(data.payment).toHaveProperty('exchangeRate');
    expect(data.payment).toHaveProperty('companyId');
    expect(data.payment).toHaveProperty('totalAmount');
    expect(data.payment).toHaveProperty('trackingCategoryIds');
    expect(data.payment).toHaveProperty('createdTimestamp');
    expect(data.payment).toHaveProperty('updatedTimestamp');
    expect(data.payment).toHaveProperty('id');

    paymentId = data.payment.id;
  });

  test("should list payments", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.listPayments();
    expect(data).toBeDefined();
    expect(data).toHaveProperty('payments');
    expect(data.payments[0]).toHaveProperty('remoteId');
    expect(data.payments[0]).toHaveProperty('transactionDate');
    expect(data.payments[0]).toHaveProperty('customerId');
    expect(data.payments[0]).toHaveProperty('vendorId');
    expect(data.payments[0]).toHaveProperty('accountId');
    expect(data.payments[0]).toHaveProperty('currency');
    expect(data.payments[0]).toHaveProperty('exchangeRate');
    expect(data.payments[0]).toHaveProperty('companyId');
    expect(data.payments[0]).toHaveProperty('totalAmount');
    expect(data.payments[0]).toHaveProperty('trackingCategoryIds');
    expect(data.payments[0]).toHaveProperty('createdTimestamp');
    expect(data.payments[0]).toHaveProperty('updatedTimestamp');
    expect(data.payments[0]).toHaveProperty('id');
  });

  test("should get payment count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getPaymentCount();
    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should retrieve a payment", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);

    let data = await apiClient.Accounting.getPayment(paymentId);
    expect(data).toHaveProperty('payment');
    expect(data.payment).toHaveProperty('remoteId');
    expect(data.payment).toHaveProperty('transactionDate');
    expect(data.payment).toHaveProperty('customerId');
    expect(data.payment).toHaveProperty('vendorId');
    expect(data.payment).toHaveProperty('accountId');
    expect(data.payment).toHaveProperty('currency');
    expect(data.payment).toHaveProperty('exchangeRate');
    expect(data.payment).toHaveProperty('companyId');
    expect(data.payment).toHaveProperty('totalAmount');
    expect(data.payment).toHaveProperty('trackingCategoryIds');
    expect(data.payment).toHaveProperty('createdTimestamp');
    expect(data.payment).toHaveProperty('updatedTimestamp');
    expect(data.payment).toHaveProperty('id');
  });

  test("should delete a payment", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(quickbooksConnectionId);
    let data = await apiClient.Accounting.deletePayment(paymentId);
    expect(data).toBeDefined();
    expect(data).toHaveProperty("code");
  });
});
