import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
    title: 'Sample Product 1',
    description: 'Description for product 1',
    price: 19.99,
    imageURL: 'https://via.placeholder.com/150',
    category: 'Category 1',
    inStock: true
  },
  // Add more products as needed
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded!');
  mongoose.disconnect();
}

seed();