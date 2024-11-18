import React from 'react'
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../Pages/Root';
import RegisterPage from '../components/ragister/RegisterPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path:"/register",
                element:<RegisterPage/>
            }
        ]
    },
    ]);
export default router;