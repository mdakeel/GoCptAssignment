import React from 'react'
import logo from '../../assets/gocpt logo.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#060606] pb-14'>
        <div className='px-[75px]'>
        <img src={logo} alt="" className='pt-10 w-[250px] cursor-pointer'/>
        <div className='flex items-center justify-between '>
          <div className='flex flex-col items-start justify-start w-[450px] gap-6'>
            <p className='text-white text-[18px] font-mdium '>We are not here to sell you products, we sell value through our expertise.</p>
            <p className='text-white text-[18px] font-mdium '>Email : <span className='text-blue-500'><a href="mailto:ingo@gocpt.ai">ingo@gocpt.ai</a></span></p>
            <p className='text-white text-[16px] font-mdium '>© 2024 All rights reserved gocpt.ai</p>
          </div>

          <div>
              <ul className='text-white font-medium text-[20px] flex flex-col items-end justify-end gap-2'>
                <li className='hover:text-gray-300 cursor-pointer'>Home</li>
                <li className='hover:text-gray-300 cursor-pointer'>Features</li>
                <li className='hover:text-gray-300 cursor-pointer'>About Us</li>
                <li className='hover:text-gray-300 cursor-pointer'>Contact Us</li>
                <li className='hover:text-gray-300 cursor-pointer'>Terms & Conditions</li>
              </ul> 
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer