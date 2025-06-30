import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const fetchProductById = (id) => API.get(`/products/${id}`);
// ...existing code...

export default API;
