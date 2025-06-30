import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <div className="font-bold text-xl">
        <Link to="/">E-Commerce</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/orders" className="hover:underline">Orders</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  );
}
