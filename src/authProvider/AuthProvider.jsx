import { useContext, createContext } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {


const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}
const value = {
    createUser,
}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};