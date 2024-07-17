import React from 'react'
import contact from '../../assets/contact.png'

const Contact = () => {
  return (
    <div className='bg-[#1E1E1E] w-full h-screen'>

        <div className='pt-14 shadow-lg'>
            <div className='bg-[#181818] w-[90%]  m-auto '>
                <div className='flex flex-col items-center pb-14 gap-14'>
                <h1 className='text-[50px] text-white text-center mt-6 font-medium underline decoration-white' style={{
                        textDecorationThickness: '1.5px',
                        textUnderlineOffset: '2px',
                    }}>Contact Us</h1>

                    <div className='flex w-full h-full items-center justify-between px-16 '>
                        <img src={contact} alt=""  className='w-[600px] h-[450px]'/>
                        <div className='w-[450px] flex flex-col items-center gap-6'>
                            <input type="text" placeholder='Company Name' className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />
                            <input type="email" placeholder='E-Mail Address' className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />
                            <input type="text" placeholder='Company’s Address' className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />
                            <textarea rows="6"  placeholder='Message' className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]' />

                            <div className='flex items-center justify-center w-full pt-2 '>
                            <button className=' hover:shadow-none transition-all durantion-300 shadow-2xl  text-white text-[30px] font-medium w-full h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t  from-[#5A639C] to-[#9B86BD]'>Submit</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
    </div>
  )
}

export default Contact