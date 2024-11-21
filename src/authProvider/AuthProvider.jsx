import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [googleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [emails,setEmails] = useState(null);
  const [user,setUser] = useState(null);
  const [loading, setLoading ] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoggle = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (userResult) => {
      if (userResult) {
        setLoading(false);
        setUser(userResult);
      } else {
        setLoading(false);
        setUser(null);
      }
    });
    return ()=> unSubscribe();
  },[])
  const onLogout = ()=>{
    signOut(auth)
    .then(() => {
      toast.success("Sign-out successful!");
    }).catch((error) => {
      toast.success("An Error Occured!");
    });
  }
  const value = {
    createUser,
    loginWithGoggle,
    googleAuthLoading,
    setGoogleAuthLoading,
    signInUser,
    emails,
    setEmails,
    user,
    onLogout,
    loading
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
