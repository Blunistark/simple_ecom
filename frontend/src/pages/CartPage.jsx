import { useEffect, useState } from 'react';
import { getCart, removeFromCart } from '../api/cart';

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('You must be logged in to view your cart.');
      setLoading(false);
      return;
    }
    getCart(token)
      .then(res => setCart(res.data))
      .catch(() => setError('Failed to load cart'))
      .finally(() => setLoading(false));
  }, [token]);

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId, token);
      setCart({ ...cart, items: cart.items.filter(i => i.product._id !== productId) });
    } catch {
      setError('Failed to remove item');
    }
  };

  if (loading) return <div className="p-8 text-center">Loading cart...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!cart || !cart.items.length) return <div className="p-8 text-center">Your cart is empty.</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cart.items.map(item => (
          <li key={item.product._id} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div>
              <div className="font-semibold">{item.product.title}</div>
              <div className="text-gray-600">Qty: {item.quantity}</div>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => handleRemove(item.product._id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
