import React from 'react'
import './App.css'
import Navbar from './components/FirstSection/Navbar'
import Main from './components/FirstSection/FirstSection'
import SecondSection from './components/SecondSection/SecondSection'

function App() {


  return (
    <div className='app'>
    <Navbar />
    <Main />
    <SecondSection />
    </div>
  )
}

export default App
