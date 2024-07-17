import React from 'react';
import { useTheme } from '../ThemeToggle';

const HomeContainer = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <div className='w-full h-full'>
      <div className='float-end mr-10 mt-10'>
        <div className={`cursor-pointer w-[100px] h-[55px] drop-shadow-md rounded-full shadow-inner border-[8px] bg-white ${themeMode === 'light' ? 'border-[#9B86BD] bg-white' : 'bg-gray-800 border-gray-600' }`}>
        {themeMode === 'light' ? (
          <div onClick={toggleTheme} className={`w-[30px] h-[30px] drop-shadow-md shadow-inner border-[6px] border-[#5A639C] bg-white mt-1 ml-2 rounded-full`}></div>
        ) : (
          <div onClick={toggleTheme} className={`w-[30px] h-[30px] float-right drop-shadow-md shadow-inner shadow-lg border-[5px] border-gray-500 bg-black mt-1 mr-2 rounded-full`}></div>
        )}
          
        </div>
        
      </div>
      <div className='w-full h-full'>
        <div className='w-[905px] h-[532px] flex flex-col items-start justify-between pt-[104px] pl-[110px]'>
          <div>
            <h1 className='text-[48px] font-medium text-gray-50'>Welcome to <span className='text-[#F197F4]'>Go<span className='text-[#2B3A63]'>CPT</span></span> BETA</h1>
            <h1 className='text-[48px] font-medium text-gray-50'>Your Path to Effortless CPT Coding!</h1>
          </div>
          <div>
            <p className='font-medium text-[30px] text-white'>
              We’re excited to introduce you to the BETA version of GoCPT. Your free pass to a simplified and efficient CPT coding experience designed exclusively for mental health professionals like you.
            </p>
          </div>
          <div>
            <button className='hover:shadow-none drop-shadow-lg shadow-lg text-white text-[30px] font-medium w-[375px] h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t from-[#5A639C] to-[#9B86BD]'>Start Testing</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
