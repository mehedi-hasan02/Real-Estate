import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6bMtHMtIGs0Owgq3zmUMyrCPF6uTlDF8",
  authDomain: "real-estate-76681.firebaseapp.com",
  projectId: "real-estate-76681",
  storageBucket: "real-estate-76681.appspot.com",
  messagingSenderId: "924064177630",
  appId: "1:924064177630:web:ebb1bfdc747db1971d114f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;