import React from 'react'
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../Pages/Root';
import RegisterPage from '../components/ragister/RegisterPage';
import LoginPage from '../components/login/LoginPage';
import ErrorPage from '../components/errorpage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path:"/register",
                element:<RegisterPage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
    ]);
export default router;