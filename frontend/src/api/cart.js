import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const getCart = (token) => API.get('/cart', { headers: { Authorization: `Bearer ${token}` } });
export const addToCart = (productId, quantity, token) =>
  API.post('/cart/add', { productId, quantity }, { headers: { Authorization: `Bearer ${token}` } });
export const removeFromCart = (productId, token) =>
  API.post('/cart/remove', { productId }, { headers: { Authorization: `Bearer ${token}` } });

export default API;
