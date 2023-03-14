import React from 'react';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';


function App() {
  const router = createBrowserRouter([
      {path:'/', element: <RootLayout/>, children:[
        {path:'/' ,element: <HomePage/>},
        {path:'/contact' ,element: <Contact/>}
      ]},
    ]
    )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
