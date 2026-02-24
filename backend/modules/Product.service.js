import mongoose from 'mongoose';
import Product from '../models/Product.model.js';

export const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    return await product.save();
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`);
  }
};

export const getAllProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};

export const getProductById = async (id) => {
  try {
    // Try numeric id first
    const parsed = parseInt(id);
    if (!isNaN(parsed)) {
      let prod = await Product.findOne({ id: parsed });
      if (prod) return prod;
      // fallback to productid field if id doesn't work
      prod = await Product.findOne({ productid: parsed });
      if (prod) return prod;
    }
    // Try as ObjectId
    if (mongoose.isValidObjectId(id)) {
      const prod = await Product.findById(id);
      if (prod) return prod;
    }
    return null;
  } catch (error) {
    throw new Error(`Error fetching product: ${error.message}`);
  }
};

export const updateProduct = async (id, updateData) => {
  try {
    const parsed = parseInt(id);
    if (!isNaN(parsed)) {
      let updated = await Product.findOneAndUpdate({ id: parsed }, updateData, { new: true });
      if (updated) return updated;
      updated = await Product.findOneAndUpdate({ productid: parsed }, updateData, { new: true });
      if (updated) return updated;
    }
    if (mongoose.isValidObjectId(id)) {
      return await Product.findByIdAndUpdate(id, updateData, { new: true });
    }
    return null;
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
};

export const deleteProduct = async (id) => {
  try {
    const parsed = parseInt(id);
    if (!isNaN(parsed)) {
      let deleted = await Product.findOneAndDelete({ id: parsed });
      if (deleted) return deleted;
      deleted = await Product.findOneAndDelete({ productid: parsed });
      if (deleted) return deleted;
    }
    if (mongoose.isValidObjectId(id)) {
      return await Product.findByIdAndDelete(id);
    }
    return null;
  } catch (error) {
    throw new Error(`Error deleting product: ${error.message}`);
  }
};
