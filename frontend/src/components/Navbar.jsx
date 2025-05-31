import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { IoSearchSharp } from "react-icons/io5";
import toast from 'react-hot-toast';
const Navbar = () => {
    
    const [open, setOpen] = useState(false)
    const {user, setUser,  setShowUserLogin, navigate,searchQuery, setSearchQuery, getCartCount,axios} = useAppContext()

 const logout = async()=>{
    try{
        const {data} = await axios.get('/api/user/logout')
        if(data.success){
            toast.success(data.message)
            setUser(null);
            navigate('/')
        }else{
            toast.error(data.message)
        }
    
    }catch(error){
        toast.error(error.message)
    }
    
 }

 useEffect(()=>{
    if(searchQuery.length >0){
        navigate('/products')
    }
 },[searchQuery])

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={()=> setOpen(false)}>
            <div className='flex flex-row'>
                <p>Grocery<span className='text-green-500'>Shop</span></p>
                <img className="h-9" src={assets.favicon} alt="dummyLogoColored" />
            </div>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 ">
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/products'>All Products</Link>
                
              
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e)=>setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    
                    <IoSearchSharp className='text-2xl'/>
                    
                </div>

                <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>

                {!user ? (<button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>)
                :
                (
                  <div className='relative group'>
                    <img src={assets.pic_4} className='w-10 rounded-[50%]' alt=""/>
                    <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                        <li onClick={()=> navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                      
                        <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                    </ul>
                  </div>
                )
                }
            </div>
            <div className='flex items-center gap-6 sm:hidden'>
                 <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>
            </div>

            

            {/* Mobile Menu */}
            {
                open && (
                    <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px]  left-0  w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5  text-sm md:hidden`}>
                <NavLink to='/' onClick={()=>setOpen(false)}>Home</NavLink>
                <NavLink to='/products' onClick={()=>setOpen(false)}>All Products</NavLink>
                {user &&
                 <NavLink to='/' onClick={()=>setOpen(true)}>My Orders</NavLink>
                } 
               <NavLink to='/contact' onClick={()=>setOpen(false)}>Contact</NavLink>
               {!user ? (
                        <button onClick={()=>{
                            setOpen(false);
                            setShowUserLogin(true);
                        }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                            Login
                        </button>
                        ):
                        (<button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                            Logout
                        </button>)
                        }
                
            </div>
                )
            }

        </nav>
  )
}

export default Navbar