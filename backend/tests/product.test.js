// Example test for Product model
import mongoose from 'mongoose';
import Product from '../src/models/Product.js';

describe('Product Model', () => {
  it('should create a product with required fields', () => {
    const product = new Product({
      title: 'Test',
      price: 10
    });
    expect(product.title).toBe('Test');
    expect(product.price).toBe(10);
  });
});
