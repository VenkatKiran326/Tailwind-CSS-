import React from 'react'
import { Herosection } from './components/Herosection'
import { NavBarSection } from './components/NavBarSection'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Testominals } from './components/Testominals'
import { Contact } from './components/Contact'
import { Gallery } from './components/Gallery'

export const LandingPage = ({change}) => { // receving the key from App.jsx
  return (
    <div>
      {/* passing the key to NavBarSection component
      this is known as prop drilling
      it is used to pass data from parent to child component */}
        <NavBarSection change={change}/>
        <Herosection/>
        <Features/>
        <Gallery/>
        <Pricing/>
        <Testominals/>
        <Contact/> 
    </div>
  )
}
