import React from 'react';
import ellipse from '../../assets/ellipses.png';
import About from '../About/About';
import OurStory from '../OurStory';
import { useTheme } from '../ThemeToggle';

const Feature = () => {
  const { themeMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        themeMode === 'light' ? 'bg-[rgba(91,106,170,1)]' : 'bg-[#000000]'
      }`}
    >
      <div
        className='w-full'
        style={{
          backgroundImage: `url(${ellipse})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='pt-[50px]'>
          <div className='bg-[rgba(255,255,255,.08)] w-[90%] m-auto shadow-2xl border-[1px] rounded-[25px] border-[#7776B3]'>
            <div className='flex flex-col items-center justify-center gap-8 py-4'>
              <h1 className='text-[40px] font-medium text-white'>
                Key Features of GoCPT BETA
              </h1>
              <div className='flex flex-wrap items-center justify-center gap-6 pb-10'>
                <div className='bg-[rgba(255,255,255,.08)] hover:shadow-none transition-all duration-300 border border-[#7776B3] hover:border-gray-400 flex flex-col items-center justify-center w-[590px] h-[350px] gap-4 text-center shadow-2xl rounded-[25px] px-8 py-6'>
                  <h2 className='text-[35px] font-medium text-white'>
                    User Friendly
                  </h2>
                  <p className='text-[18px] font-medium text-white'>
                    The goCPT app offers a user-friendly feature for determining
                    CPT codes based on time alone. To utilize this
                    functionality, simply navigate to the designated time button
                    within the app and input the total time spent managing the
                    patient during the encounter. The app will then generate the
                    appropriate CPT code, considering the significant role of
                    time in certain scenarios, such as counseling or
                    coordination of care, in determining the level of service
                    provided
                  </p>
                </div>

                <div className='bg-[rgba(255,255,255,.08)] hover:shadow-none transition-all duration-300 border border-[#7776B3] hover:border-gray-400 flex flex-col items-center justify-center w-[590px] h-[350px] gap-4 text-center shadow-2xl rounded-[25px] px-8 py-6'>
                  <h2 className='text-[35px] font-medium text-white'>
                    Medical Complexity Assessment
                  </h2>
                  <p className='text-[18px] font-medium text-white'>
                    The goCPT app calculates encounters of varying complexity
                    (straightforward/minimal, low, moderate, and high) based on
                    a meticulous assessment of Medical Decision-Making (MDM),
                    taking into account the number of diagnoses, management
                    options, risk of complications or morbidity, and the amount
                    and complexity of data reviewed during the encounter
                  </p>
                </div>

                <div className='bg-[rgba(255,255,255,.08)] hover:shadow-none transition-all duration-300 border border-[#7776B3] hover:border-gray-400 flex flex-col items-center justify-center w-[590px] h-[350px] gap-4 text-center shadow-2xl rounded-[25px] px-8 py-6'>
                  <h2 className='text-[35px] font-medium text-white'>
                    E&M Code Integration
                  </h2>
                  <p className='text-[18px] font-medium text-white'>
                    Seamlessly incorporates the key components influencing E&M
                    code selection, such as History of Present Illness (HPI),
                    Examination, Medical Decision-Making (MDM), and Time
                    considerations
                  </p>
                </div>

                <div className='bg-[rgba(255,255,255,.08)] hover:shadow-none transition-all duration-300 border border-[#7776B3] hover:border-gray-400 flex flex-col items-center justify-center w-[590px] h-[350px] gap-4 text-center shadow-2xl rounded-[25px] px-8 py-6'>
                  <h2 className='text-[35px] font-medium text-white'>
                    Streamlined Documentation
                  </h2>
                  <p className='text-[18px] font-medium text-white'>
                    Facilitates accurate code assignment by providing a
                    user-friendly interface for configuring CPT billing codes
                    directly from your progress notes. The app emphasizes
                    documentation accuracy to capture the true complexity of the
                    services rendered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <OurStory />
    </div>
  );
};

export default Feature;
