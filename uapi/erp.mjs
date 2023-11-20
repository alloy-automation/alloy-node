import { default as axios } from "axios";
import { baseUrl } from "../utils.mjs";

export class Accounting {
  headers = {};
  connectionId = null;
  url = baseUrl;

  constructor(apiKey) {
    this.apiKey = apiKey;

    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  async setUser(userId) {
    this.userId = userId;
  }

  async connect(connectionId) {
    this.connectionId = connectionId;
  }

  async listCompanyInfo(filter) {
    const options = {
      url: `${baseUrl}/one/accounting/company-info?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getCompanyInfoCount() {
    const options = {
      url: `${baseUrl}/one/accounting/company-info/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getCompanyInfo(companyInfoId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/company-info/${companyInfoId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // ACCOUNTS

  async createAccount(data) {
    const options = {
      url: `${baseUrl}/one/accounting/accounts?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listAccounts(filter) {
    let options = {
      url: `${baseUrl}/one/accounting/accounts?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getAccountCount() {
    const options = {
      url: `${baseUrl}/one/accounting/accounts/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getAccount(accountId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/accounts/${accountId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updateAccount(accountId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/accounts/${accountId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deleteAccount(accountId) {
    const options = {
      url: `${baseUrl}/one/accounting/accounts/${accountId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // CUSTOMERS

  async createCustomer(data) {
    const options = {
      url: `${baseUrl}/one/accounting/customers?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listCustomers(filter) {
    const options = {
      url: `${baseUrl}/one/accounting/customers?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getCustomerCount() {
    const options = {
      url: `${baseUrl}/one/accounting/customers/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getCustomer(customerId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/customers/${customerId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updateCustomer(customerId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/customers/${customerId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deleteCustomer(customerId) {
    const options = {
      url: `${baseUrl}/one/accounting/customers/${customerId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // VENDORS

  async createVendor(data) {
    const options = {
      url: `${baseUrl}/one/accounting/vendors?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listVendors(filter) {
    const options = {
      url: `${baseUrl}/one/accounting/vendors?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getVendorCount() {
    const options = {
      url: `${baseUrl}/one/accounting/vendors/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getVendor(vendorId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/vendors/${vendorId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updateVendor(vendorId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/vendors/${vendorId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deleteVendor(vendorId) {
    const options = {
      url: `${baseUrl}/one/accounting/vendors/${vendorId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // TAX RATES

  async listTaxRates(filter) {
    const options = {
      url: `${baseUrl}/one/accounting/tax-rates?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getTaxRateCount() {
    const options = {
      url: `${baseUrl}/one/accounting/tax-rates/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getTaxRate(taxRateId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/tax-rates/${taxRateId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // TRACKING CATEGORIES

  async listTrackingCategory(filter) {
    const options = {
      url: `${baseUrl}/one/accounting/tracking-categories?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getTrackingCategoryCount() {
    const options = {
      url: `${baseUrl}/one/accounting/tracking-categories/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getTrackingCategory(trackingCategoryId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/tracking-categories/${trackingCategoryId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // ITEMS

  async createItem(data) {
    const options = {
      url: `${baseUrl}/one/accounting/items?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listItems(filter) {
    const options = {
      url: `${baseUrl}/one/accounting/items?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getItemsCount() {
    const options = {
      url: `${baseUrl}/one/accounting/items/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getItem(itemId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/items/${itemId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updateItem(itemId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/items/${itemId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deleteItem(itemId) {
    const options = {
      url: `${baseUrl}/one/accounting/items/${itemId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // ITEMS

  async createPurchaseOrder(data) {
    const options = {
      url: `${baseUrl}/one/accounting/purchase-orders?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listPurchaseOrders(filter) {
    const options = {
      url: `${baseUrl}/one/accounting/purchase-orders?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getPurchaseOrdersCount() {
    const options = {
      url: `${baseUrl}/one/accounting/purchase-orders/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getPurchaseOrder(purchaseOrderId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/purchase-orders/${purchaseOrderId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }
    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updatePurchaseOrder(purchaseOrderId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/purchase-orders/${purchaseOrderId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deletePurchaseOrder(purchaseOrderId) {
    const options = {
      url: `${baseUrl}/one/accounting/purchase-orders/${purchaseOrderId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // BILLS

  async createBill(data) {
    const options = {
      url: `${baseUrl}/one/accounting/bills?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listBills(filter) {
    let options = {
      url: `${baseUrl}/one/accounting/bills?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getBillCount() {
    const options = {
      url: `${baseUrl}/one/accounting/bills/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getBill(billId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/bills/${billId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updateBill(billId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/bills/${billId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deleteBill(billId) {
    const options = {
      url: `${baseUrl}/one/accounting/accounts/${billId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // INVOICES

  async createInvoice(data) {
    const options = {
      url: `${baseUrl}/one/accounting/invoices?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listInvoices(filter) {
    let options = {
      url: `${baseUrl}/one/accounting/invoices?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getInvoiceCount() {
    const options = {
      url: `${baseUrl}/one/accounting/invoices/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getInvoice(invoiceId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/invoices/${invoiceId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updateInvoice(invoiceId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/invoices/${invoiceId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deleteInvoice(billId) {
    const options = {
      url: `${baseUrl}/one/accounting/invoices/${billId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  // PAYMENTS

  async createPayment(data) {
    const options = {
      url: `${baseUrl}/one/accounting/payments?connectionId=${this.connectionId}`,
      method: "POST",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async listPayments(filter) {
    let options = {
      url: `${baseUrl}/one/accounting/payments?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}&${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getPaymentCount() {
    const options = {
      url: `${baseUrl}/one/accounting/payments/count?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async getPayment(paymentId, filter) {
    const options = {
      url: `${baseUrl}/one/accounting/payments/${paymentId}?connectionId=${this.connectionId}`,
      method: "GET",
      headers: this.headers,
    };
    if (filter) {
      options.url = `${options.url}${new URLSearchParams(filter).toString()}`;
    }

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async updatePayment(paymentId, data) {
    const options = {
      url: `${baseUrl}/one/accounting/payments/${paymentId}?connectionId=${this.connectionId}`,
      method: "PUT",
      headers: this.headers,
      data: data,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }

  async deletePayment(paymentId) {
    const options = {
      url: `${baseUrl}/one/accounting/payments/${paymentId}?connectionId=${this.connectionId}`,
      method: "DELETE",
      headers: this.headers,
    };

    try {
      const responseData = await axios.request(options);
      return responseData?.data;
    } catch (err) {
      if (err.response.status === 422) {
        return err.response.data;
      } else {
        throw err.response.data.message;
      }
    }
  }
}
