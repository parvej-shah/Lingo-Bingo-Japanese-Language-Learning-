import React from 'react'
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../Pages/Root';
import RegisterPage from '../components/ragister/RegisterPage';
import LoginPage from '../components/login/LoginPage';
import ErrorPage from '../components/errorpage/ErrorPage';
import ForgotPassword from '../components/login/ForgotPassword';
import Home from '../Pages/Home';
import TutorialPage from '../Pages/TutorialPage';
import LetsLearnPage from '../Pages/LetsLearnPage';
import LessonPage from '../Pages/LessonPage';
import MyProfile from '../Pages/MyProfile';
import PrivateRoute from '../authProvider/PrivateRoute';
import UpdateProfile from '../components/ragister/UpdateProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/tutorials",
                element:<PrivateRoute><TutorialPage/></PrivateRoute>
            },
            {
                path:"/start-learning",
                element:<LetsLearnPage/>
            },
            {
                path:"/my-profile",
                element:<PrivateRoute><MyProfile/></PrivateRoute>
            },
            {
                path:"/update-profile",
                element:<PrivateRoute><UpdateProfile/></PrivateRoute>
            },
            {
                path:"/lesson/:lesson_no",
                loader:()=>fetch('/japaneesWord.json'),
                element:<PrivateRoute><LessonPage/></PrivateRoute>
            },
            {
                path:"/register",
                element:<RegisterPage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/forgot-password",
                element:<ForgotPassword />
            },
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
    ]);
export default router;