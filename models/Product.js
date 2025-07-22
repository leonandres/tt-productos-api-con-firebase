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

const productsRef = collection(db, 'products');

export default class Product {
  static async getAll() {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async create(productData) {
    const docRef = await addDoc(productsRef, productData);
    return { id: docRef.id, ...productData };
  }

  static async getById(id) {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  static async update(id, updateData) {
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, updateData);
  }

  static async delete(id) {
    await deleteDoc(doc(db, 'products', id));
  }
}