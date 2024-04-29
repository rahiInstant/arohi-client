import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "./firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()
  useEffect(() => {
    const subScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
       subScribe()
    }
  },[]);

  function createUser(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  function signInUser(email, pass) {
    return signInWithEmailAndPassword(auth,email,pass)
  }
  function googleSignIn() {
    return signInWithPopup(auth, googleProvider)
  }

  const authInfo = {user,loading, createUser, signInUser,googleSignIn};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
