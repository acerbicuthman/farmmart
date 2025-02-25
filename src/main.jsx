import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsProvider } from './context/Productcontext.jsx';
import { AuthProvider } from './context/Authcontext.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import ProtectedRoute from './Components/Protectedroute';
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />, // App is accessible without login
  },
  //   {
  //     path: '/Home',
  //     element: (
  //       // <ProtectedRoute>
  //       //   <Home />
  //       // </ProtectedRoute>
  //     ),
    
  // },
  {
    path: '/Login',
    element: <Login />, // Login page
  },
  
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>
);
