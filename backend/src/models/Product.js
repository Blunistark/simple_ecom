import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageURL: String,
  category: String,
  inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);
export default Product;