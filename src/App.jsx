import { useState } from 'react'
import './App.css'
import HomeBanner from './components/HeroBanner'
import PopularServices from './components/PopularServices'
import Everything from './components/Everything'
import Services from './components/Services'
import AgroBusiness from './components/AgroBusiness'
import JoinAgro from './components/joinAgro'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NavMenu from './components/NavMenu'

function App() {


  return (
    <>
      <Navbar/>  
     <NavMenu/>
     <HomeBanner/> 
     <PopularServices/>
     <Everything/>
     <Services/>
     <AgroBusiness/>
     <JoinAgro/>
     <Footer/>
     
    </>
  )
}

export default App
