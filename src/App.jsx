import React from 'react'
import NAVBAR from './component/NAVBAR'
import Nono from './component/nono'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Services from './pages/Services'
import "./App.css"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <NAVBAR />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
      </BrowserRouter>

      {/* <Nono /> */}
    </>

  )
}