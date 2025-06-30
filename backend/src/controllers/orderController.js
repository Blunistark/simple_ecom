import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { items, total } = req.body;
  const order = await Order.create({ user: req.user._id, items, total });
  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('items.product');
  res.json(orders);
};
