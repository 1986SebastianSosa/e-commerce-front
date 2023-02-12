import { axiosPrivate } from "../api/axiosPrivate";

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  const body = { email, password };
  try {
    const response = await axiosPrivate.post(`${API_URL}/login/user`, body);
    return response.data;
  } catch (error) {
    console.log("error in loginAdmin", error);
  }
};

export const loginAdmin = async (email, password) => {
  const body = { email, password };
  try {
    const response = await axiosPrivate.post(`${API_URL}/login/admin`, body);
    return response.data;
  } catch (error) {
    console.log("error in loginAdmin", error);
  }
};
