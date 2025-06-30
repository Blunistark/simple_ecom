import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(err => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-center">Loading products...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product._id} className="bg-white rounded shadow p-4 flex flex-col items-center">
          <Link to={`/products/${product._id}`}>
            <img src={product.imageURL} alt={product.title} className="w-32 h-32 object-cover mb-2" />
            <h3 className="font-bold text-lg mb-1">{product.title}</h3>
          </Link>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <div className="font-semibold mb-2">${product.price}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
