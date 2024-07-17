import React from 'react'
import health from '../../assets/Health professional team-amico 1.png'

const About = () => {
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col px-[75px] gap-10'>
        <h1 className='text-right text-white text-[50px] font-medium text-right mt-10 underline decoration-white' style={{
          textDecorationThickness: '1.5px', // Adjust the thickness here
          textUnderlineOffset: '2px', // Adjust the offset here if needed
        }}>About Us</h1>

        <div className='flex items-end justify-between'>
          <img src={health} alt="about_img" className='w-[450px] h-[450px] ' />
          <div className='flex flex-col items-end justify-end w-[800px] gap-14'>
                <h2 className='text-right text-[35px] text-white font-medium'>Empowering Mental Health Professionals with
                Simplified CPT Coding</h2>
                <div className='flex flex-col items-end justify-end w-[600px] text-white text-[20px] gap-8'>
                <p className='text-right'>Welcome to goCPT, where the journey of revolutionizing the medical coding and billing landscape began with a single idea - to make mental health care more accessible to everyone.</p>
                <p className='text-right'> Join us on this transformative journey as we continue to innovate and evolve, breaking down barriers and making mental health care accessible to all. Together, we can shape a future where healthcare providers are empowered, and quality mental health care knows no boundaries.</p>
                </div>
          </div>
        </div>

        <div className='flex items-center  justify-center   mt-6'>
        <button className='hover:shadow-none  drop-shadow-lg shadow-lg text-white text-[30px] font-medium w-[375px] h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t  from-[#5A639C] to-[#9B86BD]'>Start Testing</button>
          </div>
      </div>
    </div>
  )
}

export default About