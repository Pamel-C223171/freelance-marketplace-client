// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBwntXHfZggIWqp1yXG5FLvtoXC8KALII",
  authDomain: "freelance-marketplace-da5e1.firebaseapp.com",
  projectId: "freelance-marketplace-da5e1",
  storageBucket: "freelance-marketplace-da5e1.firebasestorage.app",
  messagingSenderId: "1038728978265",
  appId: "1:1038728978265:web:41b133df7f7eeddec27648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);