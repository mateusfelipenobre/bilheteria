
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBgfwq6cJMxqi6wkHwUB2G6zLOQLNgvON4",
  authDomain: "back-8e165.firebaseapp.com",
  projectId: "back-8e165",
  storageBucket: "back-8e165.appspot.com",
  messagingSenderId: "1015397011732",
  appId: "1:1015397011732:web:a7cfa5f5d3ef014c6d7201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get() {
      return app; 
    }
  });
}
