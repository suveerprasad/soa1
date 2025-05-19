const productModel = require('../models/product.model');

const getAllProducts = (req, res) => {
  res.json(productModel.getAll());
};

const getProductById = (req, res) => {
  const product = productModel.getById(Number(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const createProduct = (req, res) => {
  const newProduct = productModel.create(req.body);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const updatedProduct = productModel.update(Number(req.params.id), req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const deleteProduct = (req, res) => {
  const deletedProduct = productModel.delete(Number(req.params.id));
  if (deletedProduct) {
    res.json(deletedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Make sure to export all functions correctly
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};