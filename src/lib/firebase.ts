import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPDzG56FiIzUvQrAFPMKZyTS_NzGnv5cY',
  authDomain: 'real-estate-app-20349.firebaseapp.com',
  projectId: 'real-estate-app-20349',
  storageBucket: 'real-estate-app-20349.firebasestorage.app',
  messagingSenderId: '822233684204',
  appId: '1:822233684204:web:1ca3941c5ec5104184adc9',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
