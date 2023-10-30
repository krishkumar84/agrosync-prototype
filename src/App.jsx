import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeBanner from './components/HeroBanner'
import Companies from './components/Companies'
import PopularServices from './components/PopularServices'
import Everything from './components/Everything'
import Services from './components/Services'
import FiverrBusiness from './components/FiverrBusiness'
import JoinFiverr from './components/joinFiverr'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <HomeBanner/>
     <Companies/>
     <PopularServices/>
     <Everything/>
     <Services/>
     <FiverrBusiness/>
     <JoinFiverr/>
     <Footer/>
     
    </>
  )
}

export default App
