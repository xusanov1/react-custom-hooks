import axios from 'axios';

const API_BASE_URL = 'https://api.escuelajs.co/api/v1/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1'
});

export const fetchUsers = () => {
  return api.get('/users');
};

export default api