import express from 'express';
import productRoutes from './modules/Product.routes.js';

const router = express.Router();

// Mount product routes
router.use('/products', productRoutes);

export default router;
