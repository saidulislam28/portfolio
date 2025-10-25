/** eslint-disable */
import axios from "axios";

const instance = axios.create({
  // baseURL: "https://portfolio-api-rouge.vercel.app/api/v1",
  baseURL: "http://localhost:8000/api/v1",
});

instance.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${access_token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const GetData = async (url) => {
  const res = await instance.get(url);
  return res?.data;
};
