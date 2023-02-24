import React from 'react';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Blogs from './pages/Blogs';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RootLayout from './pages/RootLayout';
import { action as loginAction} from './components/Form/LoginForm'
import SignUpForm, {action as RegisterAction} from './components/Form/SignUpForm'



function App() {


const router = createBrowserRouter([
  {
    path: '/',
    element:<RootLayout />,
    children:[
      {index:true, element:<HomePage/>},
      {path:'/blogs/:id' ,element:<Blogs/>},
      {path:'/about',element:<About/>},
      {path:'/login',element:<Login/>,action:loginAction},
      {path:'/register',element:<SignUpForm/>  ,action:RegisterAction}
    ]
}
])

  return (
    <>
  <RouterProvider router = {router}></RouterProvider>
  </>
  );}

export default App;
