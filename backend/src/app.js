// Express app setup
import express from 'express';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';
import authRouter from './routes/auth.js';
import cartRouter from './routes/cart.js';
import ordersRouter from './routes/orders.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // allow Vite dev server
  credentials: true
}));

// Logging middleware for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.json());

// API routes
app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', ordersRouter);

// Static files (if needed)
app.use('/uploads', express.static('uploads'));

// Error handler
app.use(errorHandler);

export default app;
