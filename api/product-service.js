import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductsByLimit = async (limit) => {
  const response = await axios.get(`${baseUrl}/products?limit=${limit}`);
  return response.data;
};

export const getProductsByLimitAndSort = async (limit, sort) => {
  const response = await axios.get(
    `${baseUrl}/products?limit=${limit}&sort=${sort}`
  );
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${baseUrl}/products/categories`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${baseUrl}/products/category/${category}`);
  return response.data;
};

export const getProductsBySearch = async (search) => {
  const response = await axios.get(`${baseUrl}/products/search/${search}`);
  return response.data;
};

export const getProductsByPrice = async (min, max) => {
  const response = await axios.get(`${baseUrl}/products/price/${min}/${max}`);
  return response.data;
};

export const getProductsByPage = async (page) => {
  const response = await axios.get(`${baseUrl}/products/page/${page}`);
  return response.data;
};

export const getProductsByPageAndLimit = async (page, limit) => {
  const response = await axios.get(`${baseUrl}/products/page/${page}/${limit}`);
  return response.data;
};

export const getProductsByPageAndLimitAndSort = async (page, limit, sort) => {
  const response = await axios.get(
    `${baseUrl}/products/page/${page}/${limit}/${sort}`
  );
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${baseUrl}/products/${id}`);
  return response.data;
};

export const postProduct = async (product) => {
  const response = await axios.post(`${baseUrl}/products`, product);
  return response.data;
};

export const putProduct = async (id, product) => {
  const response = await axios.put(`${baseUrl}/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${baseUrl}/products/${id}`);
  return response.data;
};
