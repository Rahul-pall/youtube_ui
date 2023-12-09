import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBy7eO3rUw3m9ZaRYb3AXr5BxcTFWr1wo0",
  authDomain: "authentication-b00f7.firebaseapp.com",
  projectId: "authentication-b00f7",
  storageBucket: "authentication-b00f7.appspot.com",
  messagingSenderId: "699959696348",
  appId: "1:699959696348:web:f65582d642817a6c0c8d19",
  measurementId: "G-79J7JBS1XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth()
export const provider=new GoogleAuthProvider();
export default app;