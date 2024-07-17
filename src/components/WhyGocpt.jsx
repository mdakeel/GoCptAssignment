import React from 'react'
import beats from '../assets/beats.png'
import { team } from '../utils/data'
import { useTheme } from './ThemeToggle'

const WhyGocpt = () => {
    const { themeMode } = useTheme();

  return (
    <div className={`${themeMode === 'light' ? 'bg-[#1C2745]' : 'bg-[#0B0E19]'} w-full pb-10 `}>
        <div
        className='w-full '
        style={{
          backgroundImage: `url(${beats})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        }} 
        >
        <div className='flex flex-col items-center pt-8 gap-6 px-[75px]'>
            <h1 className='text-[50px] font-medium text-white'>Why <span className='font-semibold'>GoCPT?</span></h1>
            <div className='flex flex-col items-center gap-8 '>
                <p className='text-white text-[29px] font-medium text-center'>At goCPT, we understand the unique challenges mental health professionals face. Our app is designed with your needs in mind, offering a user-friendly platform that simplifies the coding process. By utilizing goCPT, providers can reclaim valuable time, reduce administrative stress, and ensure accurate code assignment for proper reimbursement.</p>
                <p className='text-white text-[29px] font-medium text-center'>Join us on this transformative journey as we continue to innovate and evolve, breaking down barriers and making mental health care accessible to all. Together, we can shape a future where healthcare providers are empowered, and quality mental health care knows no boundaries</p>
                <p className='text-white text-[29px] font-medium text-center'>Thank you for choosing goCPT - where innovation meets compassion in the pursuit of accessible mental health care</p>
                <p className='text-white text-[29px] font-medium text-center'>Warm regards,
                    Tiffinne 
                    Founder, goCPT</p>
            </div>
        </div>

        <div className='bg-[rgba(255,255,255,.08)] w-[90%] m-auto  shadow-2xl border-[1px] rounded-[25px] border-[#7776B3] mt-14 '>
            <div className='w-full '>
            <h1 className='text-[45px] text-white font-medium text-center underline decoration-white mt-6' style={{
                        textDecorationThickness: '1.5px',
                        textUnderlineOffset: '2px',
                    }}>Ensuring CPT Code Accuracy with GoCPT App</h1>

            <div className='w-full flex flex-wrap items-center justify-center gap-10 pb-14 pt-14'>
                {
                    team.map((item, index) => (
                        <div ke={item.id} className='w-[320px] hover:shadow-none transition-all durantion-300 border border-[#7776B3] hover:border-gray-400 h-[500px] flex flex-col items-center rounded-[25px] shadow-2xl justify-start bg-[rgba(255,255,255,.1)] px-6 py-6 gap-2'>
                    <img src={item.image} alt="" className='w-[300px] h-[200px] rounded-[25px]'/>
                    <h2 className='text-white text-[22px] font-semibold text-center'>{item.title}</h2>
                    <p className='text-white text-[14px] font-medium text-center'>{item.discription}</p>
                </div>
                    ))
                }
            </div>

            <p className='w-full text-white text-[15px] font-medium text-center  px-[75px]  pb-14'> By incorporating these tips into your practice, you can maximize the accuracy of CPT codes generated by the goCPT app. Remember, your detailed and precise documentation is instrumental in optimizing the app's capabilities and contributing to the overall success of your medical coding and billing processes</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WhyGocpt