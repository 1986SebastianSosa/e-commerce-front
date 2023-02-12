import axiosPrivate from "../api/axiosPrivate";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async (page) => {
  try {
    const response = await axiosPrivate.get(`${API_URL}/product?page=${page}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchStarredProducts = async () => {
  try {
    const response = await axiosPrivate.get(`${API_URL}/product/starred`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchOneProduct = async (slug) => {
  try {
    const response = await axiosPrivate.get(`${API_URL}/product/slug/${slug}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchProductsByCategory = async (categoryName, page) => {
  try {
    const response = await axiosPrivate.get(
      `${API_URL}/product/category/${categoryName}?page=${page}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axiosPrivate.get(`${API_URL}/category`);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchUser = async (id, accessToken) => {
  try {
    const response = await axiosPrivate.get(
      `${API_URL}/user/${id}?accessToken=${accessToken}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (values, params) => {
  try {
    const user = await axiosPrivate.patch(
      `${API_URL}/user/${params.id}`,
      values
    );
  } catch (error) {
    return error;
  }
};

export const postNewOrder = async (id, accessToken, data, totalPrice) => {
  const body = { ...data, totalPrice };
  try {
    const response = await axiosPrivate.post(
      `${API_URL}/order/${id}?accessToken=${accessToken}`,
      body
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postResetDB = async () => {
  try {
    const response = await axiosPrivate.post(`${API_URL}/resetDataBase`);
    return response.data;
  } catch (error) {}
};
