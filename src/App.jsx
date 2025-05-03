

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import { Toaster } from 'react-hot-toast'
function App() {
  
const isSellerPath = useLocation().pathname.includes("seller")
  return (
    <>
      <div>
        {isSellerPath? null:<Navbar/>}
        <Toaster/>
        
        <div className={`${isSellerPath?" ":"px=6 md:px-16 lg:px-24 xl:px-32"}`}>
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
