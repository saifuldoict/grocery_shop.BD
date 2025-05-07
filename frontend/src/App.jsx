

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategroy from './pages/ProductCategroy'
import ProductDetails from './pages/ProductDetails'
function App() {
  const {showUserLogin} = useAppContext()
const isSellerPath = useLocation().pathname.includes("seller")
  return (
    <>
      <div>
        {isSellerPath? null:<Navbar/>}
        {showUserLogin ? <Login/>:null}
        <Toaster/>
        
        <div className={`${isSellerPath?" ":"px=6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/products/:category' element={<ProductCategroy/>}/>
          <Route path='/products/:category/:id' element={<ProductDetails/>}/>
        </Routes>
        </div>
        <div className='mt-5'>
          {!isSellerPath && <Footer/>}
        </div>
      </div>
     
    </>
  )
}

export default App
