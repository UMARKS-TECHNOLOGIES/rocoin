import React from 'react'
import PhoneImage from '../../../assets/images/section2-phone.png'

const HowItWorks = () => {
    return (
        <section className='overflow-hidden bg-[#ffffff]'>
            <div className="max-w-7xl mx-auto py-8">
                <div className="grid lg:grid-cols-2 gap-4 px-8 ">
                    <div className='px-10'>
                        <img src={PhoneImage} loading='lazy' className='w-80' />
                    </div>
                    <div className="px-2 py-28">
                        <h2 className='font-bold text-2xl'>How It Works</h2>
                        <div className='px-8 mt-4'>
                            <div className='relative border-l-3 px-4 border-dashed border-l-[#365dd1] pb-6 '>
                                <span className='absolute bg-[#365dd1] w-3 h-3 -left-2 rounded-full'></span>
                                <h3 className='text-lg font-medium text-[#010066]'>Create Your Account</h3>
                                <p className='text-sm text-accent-foreground leading-relaxed'>Signup with your email and phone number</p>
                            </div>
                            <div className='relative border-l-3 px-4 border-dashed border-l-[#365dd1] pb-6'>
                                <span className='absolute bg-[#365dd1] w-3 h-3 -left-2 top-2 rounded-full'></span>
                                <h3 className='text-lg font-medium text-[#010066]'>Verify your account</h3>
                                <p className='text-accent-foreground leading-relaxed text-sm'>Complete KYC with your government-issued ID for security</p>
                            </div>
                            <div className='relative px-4'>
                                <span className='absolute bg-[#365dd1] w-3 h-3 -left-1 top-2 rounded-full'></span>
                                <h3 className='text-lg font-medium text-[#010066]'>Start Trading</h3>
                                <p className='text-accent-foreground leading-relaxed text-sm'>Buy, sell and swap crypto instantly - safely and securely</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks