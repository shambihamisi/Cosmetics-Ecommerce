import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

const [Isopen,setIsOpen] = useState(false);

const { setShowSearch, getCartCount } = useContext(ShopContext);

const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        
        <a href="/" className='text-5xl text-brown font-extrabold font-belleza'>BELLEZA</a>

        <ul className='hidden md:flex gap-5 text-sm text-brown'>
            <NavLink to='/' className='transition-transform duration-300 ease-out hover:-translate-y-2 flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-brown hidden'/>
            </NavLink>

            <NavLink to='/collection' className='transition-transform duration-300 ease-out hover:-translate-y-2 flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-brown hidden'/>
            </NavLink>

           {/*  <NavLink to='/about' className='transition-transform duration-300 ease-out hover:-translate-y-2 flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-brown hidden'/>
            </NavLink>

            <NavLink to='/contact' className='transition-transform duration-300 ease-out hover:-translate-y-2 flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-brown hidden'/>
            </NavLink> */}
        </ul>

        <div className='flex items-center gap-6'>
            <img 
            onClick={() => {setShowSearch(true); navigate('/collection')}}
            src={assets.search_icon} alt="" 
            className='transition-transform duration-300 ease-out hover:-translate-y-2 w-5 cursor-pointer'/>

            <div className='group relative'>
                <Link to='/login'><img src={assets.profile_icon} alt="" className='transition-transform duration-300 ease-out hover:-translate-y-2 w-5 cursor-pointer'/></Link>
                <div className='group-hover:block hidden absolute z-10 right-0 pt-1'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-lime text-brown rounded'>
                            <p className='cursor-pointer hover:text-amber-950'>My profile</p>
                            <p className='cursor-pointer hover:text-amber-950'>Orders</p>
                            <p className='cursor-pointer hover:text-amber-950'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to='/cart' className='transition-transform duration-300 ease-out hover:-translate-y-2 relative'>
                <img src={assets.cart_icon} alt="" className='w-5 min-w-5'/>
                <p className='absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>

            <img onClick={() => setIsOpen(true)} src={assets.menu_icon} alt="" className='transition-transform duration-300 ease-out hover:-translate-y-2 w-5 cursor-pointer md:hidden'/>
        </div>

            {/* Sidebar menu for small screens */}

            <div className={`z-20 absolute top-0 right-0 bottom-0 overflow-hidden bg-lime transition-all ${Isopen ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-stone-500">
                    <div onClick={() => setIsOpen(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.cross_icon} alt="" className='h-4'/>
                    </div>

                    <NavLink onClick={() => setIsOpen(false)} className='transition-transform duration-300 ease-out hover:translate-x-2 py-2 pl-6 text-6xl text-yellow-800 font-belleza' to='/'>HOME</NavLink>
                    {/* <NavLink onClick={() => setIsOpen(false)} className='transition-transform duration-300 ease-out hover:translate-x-2 py-2 pl-6 text-6xl text-yellow-800 font-belleza' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} className='transition-transform duration-300 ease-out hover:translate-x-2 py-2 pl-6 text-6xl text-yellow-800 font-belleza' to='/collection'>COLLECTION</NavLink> */}
                    <NavLink onClick={() => setIsOpen(false)} className='transition-transform duration-300 ease-out hover:translate-x-2 py-2 pl-6 text-6xl text-yellow-800 font-belleza' to='/contact'>CONTACT</NavLink>
                </div>

            </div>

    </div>
  )
}

export default Navbar