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

}