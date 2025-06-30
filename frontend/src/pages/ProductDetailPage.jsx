import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/productDetail';
import { addToCart } from '../api/cart';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProductById(id)
      .then(res => setProduct(res.data))
      .catch(() => setError('Product not found'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = async () => {
    if (!token) {
      setAddError('You must be logged in to add to cart.');
      return;
    }
    setAdding(true);
    setAddError('');
    try {
      await addToCart(product._id, 1, token);
      // Optionally show a success message or update cart context
    } catch {
      setAddError('Failed to add to cart');
    } finally {
      setAdding(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading product...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded shadow">
      <img src={product.imageURL} alt={product.title} className="w-48 h-48 object-cover mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <div className="mb-2">{product.description}</div>
      <div className="font-semibold mb-4">${product.price}</div>
      {addError && <div className="text-red-500 mb-2">{addError}</div>}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleAddToCart}
        disabled={adding}
      >
        {adding ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
}
