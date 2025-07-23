import express from 'express';
import ProductsController from '../controllers/products.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getProductById);

// Rutas protegidas (requieren autenticación JWT)
router.post('/create', authMiddleware, ProductsController.createProduct);
router.put('/:id', authMiddleware, ProductsController.updateProduct);
router.delete('/:id', authMiddleware, ProductsController.deleteProduct);

export default router;