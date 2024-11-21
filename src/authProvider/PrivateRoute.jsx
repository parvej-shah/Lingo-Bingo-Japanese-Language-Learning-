import React from "react";
import { useAuth } from "./AuthProvider";
import {Navigate } from "react-router-dom";
import LoadingClip from "../components/smallComponents/LoadingClip";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if(!loading){
    if (user && user?.email) return children ;
    else return <Navigate to={'/login'}></Navigate>;
  }
  else{
    return <LoadingClip/>;
  }
}
