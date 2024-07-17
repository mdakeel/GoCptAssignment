import React from 'react'
import logo from '../../assets/gocpt logo.png'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../ThemeToggle';

const Header = () => {
  
  const { themeMode } = useTheme();

  return (
    <div className={` flex items-center justify-between w-full h-[90px] border-2 px-6 shadow-sm ${themeMode === 'light' ? 'bg-[rgba(0,0,0,.05)]' : 'bg-[#1E212B]'}  border-[#2B3A630D]`}>
            <img src={logo} alt="" className='mt-4 w-[250px] cursor-pointer'/>
            <div>
                <ul className='flex items-center gap-6 text-white text-2xl '>
                    <NavLink to={"/"} ><li className='cursor-pointer hover:text-gray-300'>HOME</li></NavLink>
                    <NavLink to={"/faq"} ><li className='cursor-pointer hover:text-gray-300'>FAQ</li></NavLink>
                    <NavLink to={"/features"} ><li className='cursor-pointer hover:text-gray-300'>FEATURES</li></NavLink>
                    <NavLink to={"/about"} ><li className='cursor-pointer hover:text-gray-300'>ABOUT US</li></NavLink>
                    <NavLink to={"/contact"} ><li className='cursor-pointer hover:text-gray-300'>CONTACT US</li></NavLink>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
            <NavLink to={"/login"} ><button className='border hover:shadow-none border-gray-50 shadow-lg rounded-lg text-white text-center px-4 py-1  backdrop-blur-lg bg-[rgba(0,0,0,.1)]'>Login</button></NavLink>
            <NavLink to={"/signup"} ><button className='border hover:shadow-none border-gray-50 shadow-lg rounded-lg text-white text-center px-4 py-1  backdrop-blur-lg bg-[rgba(0,0,0,.1)]'>Sign Up</button></NavLink>
            </div>
    </div>
  )
}

export default Header