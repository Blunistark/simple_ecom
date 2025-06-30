import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
