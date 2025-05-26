import { default as axios } from 'axios';
import { baseUrl } from '../utils.mjs';

export class Commerce {
  headers = {};
  username = null;
  userId = null;
  connectionId = null;
  url = baseUrl;

  constructor(apiKey) {
    this.apiKey = apiKey;

    this.headers = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  setUser(userId) {
    this.userId = userId;
  }

  async setUrl(regionUrl) {
    this.url = regionUrl;
  }

  connect(connectionId) {
    this.connectionId = connectionId;
  }

  async listCustomers(filter) {
    const options = {
      url: `${this.url}/one/commerce/customers?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async getCustomer(customerId, filter) {
    const options = {
      url: `${this.url}/one/commerce/customers/${customerId}?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async createCustomer(data) {
    const options = {
      url: `${this.url}/one/commerce/customers?connectionId=${this.connectionId}`,
      method: 'POST',
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

  async updateCustomer(customerId, data) {
    const options = {
      url: `${this.url}/one/commerce/customers/${customerId}?connectionId=${this.connectionId}`,
      method: 'PUT',
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
      url: `${this.url}/one/commerce/customers/${customerId}?connectionId=${this.connectionId}`,
      method: 'DELETE',
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

  async listOrders(filter) {
    const options = {
      url: `${this.url}/one/commerce/orders?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async getOrder(orderId, filter) {
    const options = {
      url: `${this.url}/one/commerce/orders/${orderId}?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async createOrder(data) {
    const options = {
      url: `${this.url}/one/commerce/orders?connectionId=${this.connectionId}`,
      method: 'POST',
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

  async updateOrder(orderId, data) {
    const options = {
      url: `${this.url}/one/commerce/orders/${orderId}?connectionId=${this.connectionId}`,
      method: 'PUT',
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

  async deleteOrder(orderId) {
    const options = {
      url: `${this.url}/one/commerce/orders/${orderId}?connectionId=${this.connectionId}`,
      method: 'DELETE',
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

  async listProducts(filter) {
    const options = {
      url: `${this.url}/one/commerce/products?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async getProduct(productId, filter) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async createProduct(data) {
    const options = {
      url: `${this.url}/one/commerce/products?connectionId=${this.connectionId}`,
      method: 'POST',
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

  async updateProduct(productId, data) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}?connectionId=${this.connectionId}`,
      method: 'PUT',
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

  async deleteProduct(productId) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}?connectionId=${this.connectionId}`,
      method: 'DELETE',
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

  async listProductVariants(productId, filter) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}/variants?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async getProductVariant(productId, variantId, filter) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}/variants/${variantId}?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async createProductVariant(productId, data) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}/variants?connectionId=${this.connectionId}`,
      method: 'POST',
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

  async updateProductVariant(productId, variantId, data) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}/variants/${variantId}?connectionId=${this.connectionId}`,
      method: 'PUT',
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

  async deleteProductVariant(productId, variantId) {
    const options = {
      url: `${this.url}/one/commerce/products/${productId}/variants/${variantId}?connectionId=${this.connectionId}`,
      method: 'DELETE',
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

  async listFulfillments(orderId, filter) {
    const options = {
      url: `${this.url}/one/commerce/orders/${orderId}/fulfillments?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async getFulfillmentCount(orderId) {
    const options = {
      url: `${this.url}/one/commerce/orders/${orderId}/fulfillments/count?connectionId=${this.connectionId}`,
      method: 'GET',
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

  async getFulfillment(orderId, fulfillmentId, filter) {
    const options = {
      url: `${this.url}/one/commerce/orders/${orderId}/fulfillments/${fulfillmentId}?connectionId=${this.connectionId}`,
      method: 'POST',
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
}
