import { useContext, createContext, useState } from "react";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [googleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [emails,setEmails] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoggle = () => {
    return signInWithPopup(auth, provider);
  };
  const value = {
    createUser,
    loginWithGoggle,
    googleAuthLoading,
    setGoogleAuthLoading,
    signInUser,
    emails,
    setEmails
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
