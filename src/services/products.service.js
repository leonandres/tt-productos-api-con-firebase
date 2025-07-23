import Product from '../models/Product.js';

export default class ProductService {
  static async getAllProducts() {
    try {
      return await Product.getAll();
    } catch (error) {
      throw {
        status: 500,
        message: "Error al obtener productos. " + error.message,
      };
    }
  }

  static async createProduct(productData) {
    try {
      // Validaciones adicionales aquí (ej: precio positivo)
      if (productData.price <= 0) {
        throw { status: 400, message: "El precio debe ser mayor a 0" };
      }
      return await Product.create(productData);
    } catch (error) {
      throw {
        status: error.status || 500,
        message: error.message || "Error al crear producto",
      };
    }
  }

  static async getProductById(id) {
    try {
      const product = await Product.getById(id);
      if (!product) throw { status: 404, message: "Producto no encontrado" };
      return product;
    } catch (error) {
      throw { status: error.status || 500, message: error.message };
    }
  }

  static async updateProduct(id, updateData) {
    try {
      if (updateData.price && updateData.price <= 0) {
        throw { status: 400, message: "El precio debe ser mayor a 0" };
      }
      await Product.update(id, updateData);
      return { id, ...updateData };
    } catch (error) {
      throw { status: error.status || 500, message: error.message };
    }
  }

  static async deleteProduct(id) {
    try {
      await Product.delete(id);
      return { message: "Producto eliminado correctamente" };
    } catch (error) {
      throw { status: error.status || 500, message: error.message };
    }
  }

}