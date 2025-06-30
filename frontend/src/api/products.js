import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const fetchProducts = () => API.get('/products');
// Add more product-related API functions as needed

export default API;
