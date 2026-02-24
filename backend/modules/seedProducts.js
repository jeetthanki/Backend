import Product from '../models/Product.model.js';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99
  },
  {
    id: 2,
    name: 'Mouse',
    price: 29.99
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 79.99
  },
  {
    id: 4,
    name: 'Monitor',
    price: 299.99
  },
  {
    id: 5,
    name: 'Headphones',
    price: 149.99
  },
  {
    id: 6,
    name: 'USB Cable',
    price: 9.99
  }
];

export const seedProducts = async () => {
  try {
    // Clear existing products to re-seed with id field
    await Product.deleteMany({});
    
    // Insert sample products
    const insertedProducts = await Product.insertMany(products);
    console.log(`${insertedProducts.length} products inserted successfully`);
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

export default seedProducts;
