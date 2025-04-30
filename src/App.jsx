import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
        </div>
      </div>
     
    </>
  )
}

export default App
