import React from 'react'
import ellipse from '../../assets/ellipses.png';
import profile from '../../assets/Frame 29.png'
import { NavLink } from 'react-router-dom';

const Profile = () => {
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
        

        <div className='flex w-full h-full items-center justify-center flex-col gap-4 items-center  '>
                      

                        <div className='w-[500px] flex flex-col  items-center gap-6 bg-[rgba(255,255,255,.07)] p-10 rounded-[25px] shadow-2xl border border-gray-600'>
                        <img src={profile} alt="" className='w-[200px] h-[190px]' />
                        <div className='w-full flex flex-col  gap-6 '>
                             <h1 className='text-white text-[40px] font-medium text-center'>ADMINISTRATOR</h1>
                            
                            <input type="email" placeholder='admin@gmail.com' className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />
                            <input type="password" placeholder='+91-8810224567' className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />

                            <NavLink to={"/changepassword"} ><p className='text-[16px] text-white  font-medium'>Change Password?</p></NavLink>
                           
                            <div className='flex items-center justify-center w-full pt-2 '>
                            <button className=' hover:shadow-none transition-all durantion-300 shadow-2xl  text-white text-[30px] font-medium w-full h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t  from-[#5A639C] to-[#9B86BD]'>Update Details</button>
                             </div>
                             </div>
                        </div>
                    </div>
      </div>


        </div>

  )
}

export default Profile