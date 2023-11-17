import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'

import Footer from './components/Home/Footer'
import Navbar from './components/Home/Navbar'
import Posts from './components/Posts/Posts'
import NavMenu from './components/Home/NavMenu'
import Singlepost from './components/Posts/Singlepost'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const Layout = () => {
  return(
    <div className='app'>
    <Navbar/>
    <NavMenu/>
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
    },
    {
      path: "/posts",
      element: <Singlepost/>
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
