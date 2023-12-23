import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import List from './pages/List.jsx';
import Hotel from './pages/Hotel.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signin",
    element: <Signin/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/hotels",
    element: <List/>
  },
  {
    path: "/hotels/:id",
    element: <Hotel/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
