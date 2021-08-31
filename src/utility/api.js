export const baseurl = "http://pharmamanduapi.lightwebgroup.com/api/v1";

// user
export const loginapi = `${baseurl}/auth/login`;
export const registerapi = `${baseurl}/auth/register`;

// category
export const categoryapi = `${baseurl}/categories`;

// product
export const productListapi = `${baseurl}/products?page=1&limit=1000000`;
export const popularProductapi = `${baseurl}/products/popular`;
export const mostDiscountapi = `${baseurl}/products/discount`;
export const productDetailapi = (id) => `${baseurl}/products/${id}`;
export const latestProductapi = `${baseurl}/products/latest`;

// cart
export const cartapi = `${baseurl}/carts`;
export const cartDeleteapi = (id, data) => {
  return `${baseurl}/carts?productId=${id}&all=${data}`;
};

