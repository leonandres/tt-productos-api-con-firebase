import ProductService from '../services/products.service.js';
export default class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const newProduct = await ProductService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async updateProduct(req, res) {
    try {
      const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
      if (!updatedProduct) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      await ProductService.deleteProduct(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  }
}