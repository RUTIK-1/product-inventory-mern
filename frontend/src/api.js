import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getProducts = async () => {
  const res = await api.get("/product");
  return res.data;
};

export const addProduct = async (data) => {
  const res = await api.post("/product", data);
  return res.data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/product/${id}`);
};

export const updateProduct = async (id, data) => {
  const res = await api.put(`/product/${id}`, data);
  return res.data;
};
