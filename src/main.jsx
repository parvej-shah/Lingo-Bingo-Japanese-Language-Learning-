import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import router from './Routes/Route';
import AuthProvider from './authProvider/AuthProvider';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer/>
  </StrictMode>,
)
