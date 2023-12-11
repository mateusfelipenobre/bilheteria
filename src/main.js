import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgfwq6cJMxqi6wkHwUB2G6zLOQLNgvON4",
  authDomain: "back-8e165.firebaseapp.com",
  projectId: "back-8e165",
  storageBucket: "back-8e165.appspot.com",
  messagingSenderId: "1015397011732",
  appId: "1:1015397011732:web:a7cfa5f5d3ef014c6d7201"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Crie a instância do Vue
const app = createApp(App).use(store).use(router);

// Passe o Firestore para todas as instâncias do Vue
app.config.globalProperties.$db = db;

// Monte a instância do Vue no elemento com o ID 'app'
app.mount('#app');

