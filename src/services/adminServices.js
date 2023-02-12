import axiosPrivate from "../api/axiosPrivate";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async (page) => {
  try {
    const response = await axiosPrivate.get(`${API_URL}/product`);
    return response.data;
  } catch (error) {
    return error;
  }
};
