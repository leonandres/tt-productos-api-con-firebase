import { db } from '../config/firebase.config.js';
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc,
  updateDoc,
  deleteDoc 
} from 'firebase/firestore';

const productsRef = collection(db, 'productos');

export default class Product {
  static async getAll() {
    try {
      const snapshot = await getDocs(productsRef);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      throw new Error(`Error al obtener productos: ${error.message}`);
    }
  }

  static async create(productData) {
    try {
      // Validación básica (puedes usar librerías como Joi o Zod)
      if (!productData.nombre || !productData.precio) {
        throw new Error("Nombre y precio son campos requeridos.");
      }

      const docRef = await addDoc(productsRef, productData);
      return { id: docRef.id, ...productData };
    } catch (error) {
      throw new Error(`Error al crear producto: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      const docRef = doc(db, 'productos', id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw new Error("Producto no encontrado");
      }
      return { id: docSnap.id, ...docSnap.data() };
    } catch (error) {
      throw new Error(`Error al obtener producto: ${error.message}`);
    }
  }

  static async update(id, updateData) {
    try {
      const docRef = doc(db, 'productos', id);
      await updateDoc(docRef, updateData);
    } catch (error) {
      throw new Error(`Error al actualizar producto: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      await deleteDoc(doc(db, 'productos', id));
    } catch (error) {
      throw new Error(`Error al eliminar producto: ${error.message}`);
    }
  }
}