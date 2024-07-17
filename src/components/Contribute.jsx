import React from 'react'
import { useTheme } from './ThemeToggle'

const Contribute = () => {
  const {themeToggle} = useTheme()

  return (
    <div className={`${themeToggle === 'light' ? 'bg-[#28334F]' : 'bg-[#1E212B]' } w-full `}>
        <div className='flex flex-col gap-8 px-[75px]'>
            <h1 className='text-white text-[45px] font-medium text-center pt-6'>How Can You Contribute?</h1>

            <div className='flex items-center justify-between '>
            <div className='bg-[rgba(255,255,255,.08)] flex flex-col hover:shadow-none transition-all durantion-300 hover:border  hover:border-gray-400 items-center justify-center w-[590px] h-[300px] gap-4 text-center shadow-2xl rounded-[25px] px-8 py-6'>
              <h2 className='text-[35px] font-medium text-white'>Sign Up and Use goCPT Beta</h2>
              <p className='text-[18px] font-medium text-white'>Dive into the beta version by signing up here!. Explore its features and discover first hand how GoCPT can simplify your CPT coding processes </p>
            </div>
            <div className='bg-[rgba(255,255,255,.08)] flex flex-col hover:shadow-none transition-all durantion-300 hover:border  hover:border-gray-400 items-center justify-center w-[590px] h-[300px] gap-4 text-center shadow-2xl rounded-[25px] px-8 py-6'>
              <h2 className='text-[35px] font-medium text-white'>Share Your Feedback</h2>
              <p className='text-[18px] font-medium text-white'>Your experiences and insights matter. Utilize the feedback mechanism within the app to share your thoughts, suggestions, and any issues you encounter. Your feedback guides our ongoing improvements. </p>
            </div>
            </div>

            <div className='flex flex-col gap-6'>
            <h1 className='text-white text-[45px] font-medium text-center '>Join GOCPT on this Journey!</h1>
            
            <p className='w-full text-white text-[18px] font-medium text-center '> By participating in the goCPT Beta, you’re not just a user; you’re a vital part of our community shaping the future of mental health billing. Together, we can create an app that truly meets your needs and exceeds your expectations.</p>

            <div className='flex items-center justify-center pt-2 pb-14'>
            <button className='hover:shadow-none transition-all durantion-300  drop-shadow-lg shadow-2xl text-white text-[30px] font-medium w-[375px] h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t  from-[#5A639C] to-[#9B86BD]'>Start Testing</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contribute