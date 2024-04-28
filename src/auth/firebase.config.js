import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxal5OxGZAphM3iZJ_FeBXZ0-o_O2YN9o",
  authDomain: "easy-touring.firebaseapp.com",
  projectId: "easy-touring",
  storageBucket: "easy-touring.appspot.com",
  messagingSenderId: "774870008203",
  appId: "1:774870008203:web:6d6bbe10a4633e46172f8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
