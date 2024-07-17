import React from 'react';

const OurStory = () => {
    return (
        <div>
            <div className='w-full flex flex-col items-center justify-center px-[75px] gap-10'>
                <div className='w-full flex flex-col items-start justify-start gap-6 mt-4'>
                    <h1 className='text-[50px] text-white font-medium underline decoration-white' style={{
                        textDecorationThickness: '1.5px',
                        textUnderlineOffset: '2px',
                    }}>Our Story</h1>
                    <div className='w-full'>
                        <div className='text-[20px] text-white font-medium whitespace-pre'>
                            {`GoCPT was conceived by a passionate psychiatric nurse practitioner who, as a new graduate, felt overwhelmed by the complexities of CPT coding.
Faced with the daunting task of mastering medical coding while juggling the demands of patient care, it became clear that a solution was needed to
bridge the gap between clinical expertise and administrative challenges. Time constraints
and the intricate nature of CPT coding posed significant hurdles for healthcare
providers looking to venture into private practice. Recognizing that coding
and billing are formidable obstacles standing in the way of many
talented providers, the idea for goCPT was born.`}
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between pb-20'>
                    <div className='bg-[rgba(255,255,255,.08)] hover:shadow-none transition-all durantion-300 border border-[#7776B3] hover:border-gray-400 flex flex-col items-center justify-center w-[660px] h-[300px] gap-4 text-center shadow-2xl rounded-[25px] px-8 '>
                        <h2 className='text-[35px] font-medium text-white'>Our Mission</h2>
                        <p className='text-[18px] font-medium text-white'>At goCPT, our mission is simple yet profound - to empower mental health professionals and remove the barriers that hinder them from providing quality care and pursuing their dreams of private practice. We believe that every individual should have access to exceptional mental health care, and that starts with simplifying the coding and billing process.</p>
                    </div>
                    <div className='bg-[rgba(255,255,255,.08)] hover:shadow-none transition-all durantion-300 border border-[#7776B3] hover:border-gray-400 flex flex-col items-center justify-center w-[660px] h-[300px] gap-4 text-center shadow-2xl rounded-[25px] px-8  mt-[-200px]'>
                        <h2 className='text-[35px] font-medium text-white'>Our Vision</h2>
                        <p className='text-[18px] font-medium text-white'>We envision a future where mental health care is more accessible, where providers can focus on what they do best - helping individuals on their path to wellness. By harnessing the power of technology, we aim to streamline the complexities of CPT coding, enabling providers to dedicate more time to patient care and less to administrative burdens.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
