import express from 'express';
import ProductController from '../controllers/product.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js'; // Lo implementaremos después

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);

// Rutas protegidas (requieren autenticación JWT)
router.post('/create', authMiddleware, ProductsController.createProduct);
router.put('/:id', authMiddleware, ProductsController.updateProduct);
router.delete('/:id', authMiddleware, ProductsController.deleteProduct);

export default router;