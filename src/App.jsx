import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeBanner from './components/HeroBanner'
import PopularServices from './components/PopularServices'
import Everything from './components/Everything'
import Services from './components/Services'
import AgroBusiness from './components/AgroBusiness'
import JoinAgro from './components/joinAgro'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
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
