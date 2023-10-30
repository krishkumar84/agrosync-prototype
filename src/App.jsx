import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeBanner from './components/HeroBanner'
import Companies from './components/Companies'
import PopularServices from './components/PopularServices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomeBanner/>
     <Companies/>
     <PopularServices/>
    </>
  )
}

export default App
