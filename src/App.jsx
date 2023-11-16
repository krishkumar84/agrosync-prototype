import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'

import Footer from './components/Home/Footer'
import Navbar from './components/Home/Navbar'
import Posts from './components/Posts/Posts'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const Layout = () => {
  return(
    <div className='app'>
    <Navbar/>
    <Outlet/>
    <Footer/> 
    </div> 
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [ {
      path: "/",
      element: <Home/>
    },
    {
      path: "/post",
      element: <Posts/>
    }]
  },
]);


function App() {


  return (
    <>
      {/* <Navbar/>  
     
     <Footer/> */}
      <RouterProvider router={router} />
     
    </>
  )
}

export default App
