import React from 'react'
import PhoneImage from '../../../assets/images/section2-phone.png'

const HowItWorks = () => {
    return (
        <section className='bg-[#ffffff]'>
            <div className="max-w-7xl mx-auto py-8">
                <div className="py-5 grid md:grid-cols-2 gap-8 items-center md:px-8 px-0">
                        <div className='md:px-20 px-10 flex items-center justify-center md:justify-start'>
                            <img src={PhoneImage} loading='lazy' className='md:w-70 w-50' />
                        </div>
                        <div className="px-2 md:py-28 py-0">
                        <h2 className='font-bold text-2xl mb-8 md:mb-10 text-[#343333]'>How It Works</h2>
                            <div className='px-8 md:mt-4 mt-2'>
                                <div className='relative border-l-3 px-4 border-dashed border-l-[#010066] pb-6 '>
                                    <span className='absolute bg-[#010066] w-3 h-3 -left-2 rounded-full'></span>
                                    <h3 className='md:text-lg font-bold  text-[#010066] text-[16px]'>Create Your Account</h3>
                                <p className='text-sm leading-relaxed text-[#343333]'>Signup with your email and phone number</p>
                                </div>
                                <div className='relative border-l-3 px-4 border-dashed border-l-[#010066] pb-6'>
                                    <span className='absolute bg-[#010066] w-3 h-3 -left-2 top-2 rounded-full'></span>
                                    <h3 className='md:text-lg font-bold text-[#010066] text-[16px]'>Verify your account</h3>
                                <p className='text-[#343333] leading-relaxed text-sm'>Complete KYC with your government-issued ID for security</p>
                                </div>
                                <div className='relative px-4'>
                                    <span className='absolute bg-[#010066] w-3 h-3 -left-1 top-2 rounded-full'></span>
                                    <h3 className='md:text-lg font-bold text-[#010066] text-[16px]'>Start Trading</h3>
                                <p className='text-[#343333] leading-relaxed text-sm'>Buy, sell and swap crypto instantly - safely and securely</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default HowItWorks