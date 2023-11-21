import React from 'react'
import HomeBanner from './HeroBanner'
import PopularServices from './PopularServices'
import Everything from './Everything'
import Services from './Services'
import AgroBusiness from './AgroBusiness'
import JoinAgro from './joinAgro'
import NavMenu from './NavMenu'

function Home() {
  return (
    <div>
     <NavMenu/>
     <HomeBanner/> 
     <PopularServices/>
     <Everything/>
     <Services/>
     <AgroBusiness/>
     <JoinAgro/>
    </div>
  )
}

export default Home
