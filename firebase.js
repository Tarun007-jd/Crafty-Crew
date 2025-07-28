// firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDEehmnFZkzdEkI1KrETutVh5zeOB0-qHE",
  authDomain: "signlearn-5fe60.firebaseapp.com",
  projectId: "signlearn-5fe60",
  storageBucket: "signlearn-5fe60.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg12345"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
