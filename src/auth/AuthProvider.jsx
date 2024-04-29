import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  console.log(user);
  useEffect(() => {
    const subScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      subScribe();
    };
  }, []);

  function createUser(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  function signInUser(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }
  function googleSignIn() {
    return signInWithPopup(auth, googleProvider);
  }
  function LogOut() {
    return signOut(auth);
  } 

  const authInfo = { user, loading, createUser, signInUser, googleSignIn, LogOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
