import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6d6a6.firebaseapp.com",
  projectId: "mern-blog-6d6a6",
  storageBucket: "mern-blog-6d6a6.appspot.com",
  messagingSenderId: "619483189358",
  appId: "1:619483189358:web:76895e80b55d0761ac967f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
