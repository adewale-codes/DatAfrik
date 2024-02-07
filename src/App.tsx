import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Supported from './components/Supported'
import About from './components/About'
function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Supported />
      <About />
    </>
  )
}

export default App
