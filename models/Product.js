import { db } from '../config/firebase.config.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const productsRef = collection(db, 'products');

export default class Product {
  static async getAll() {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}