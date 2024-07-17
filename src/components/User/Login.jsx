import React from 'react'
import ellipse from '../../assets/ellipses.png';
import logo from '../../assets/gocpt logo.png'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div 
    className=" w-full h-screen "
     style={{
      backgroundColor: '#0D0D0D'
    }}>
      

    <div
      className='w-full h-screen'
      style={{
        backgroundImage: `url(${ellipse})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='w-full h-full flex flex-row-reverse items-center'>
        <div className=' flex flex-col items-center justify-center bg-[rgba(255,255,255,.08)] w-[28%] h-full border border-gray-700 rounded-l-[35px] shadow-2xl gap-6'>
          <h1 className='text-[40px] text-white font-medium text-center px-6'>Dont have an account?</h1>
          <div className='flex items-center justify-center '>
          <NavLink to={"/signup"} ><button className='hover:shadow-none  drop-shadow-lg shadow-lg text-white text-[30px] font-medium px-4 py-1  border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t  from-[#5A639C] to-[#9B86BD]'>Sign Up</button></NavLink>
          </div>
        </div>

        <div className='flex w-full h-full items-center justify-center flex-col gap-4 items-center  '>

                       <img src={logo} alt="" className='mt-4 w-[250px] cursor-pointer'/>
                        <div className='w-[500px] flex flex-col  gap-6 bg-[rgba(255,255,255,.07)] p-10 rounded-[25px] shadow-2xl border border-gray-600'>
                             <h1 className='text-white text-[40px] font-medium text-center'>Log In</h1>
                            
                            <input type="email" placeholder='E-Mail Address' required  className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />
                            <input type="password" placeholder='Password' required className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />

                            <NavLink to={"/changepassword"} ><p className='text-[16px] text-white  font-medium'>Forgot Password?</p></NavLink>
                           
                            <NavLink to={"/"} ><div className='flex items-center justify-center w-full pt-2 '>
                             <button className=' hover:shadow-none transition-all durantion-300 shadow-2xl  text-white text-[30px] font-medium w-full h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t  from-[#5A639C] to-[#9B86BD]'>Log In</button>
                             </div>
                             </NavLink>
                        </div>
                    </div>
      </div>


        </div>
    </div>
  )
}

export default Login