import React from 'react'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import Apple from '../../../assets/images/applepng-transparent.png'
import WhitePhone from '../../../assets/images/whitephone.png'
import BlackPhone from '../../../assets/images/blackphone.png'
import { RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { CiLinkedin } from 'react-icons/ci'
import Logo from '../../../assets/images/rocoinimg.png'
import PlayStoreLogo from '../../../assets/images/playstore-logo-transparent.png'


const Footer = () => {
    return (
        <section className='mt-5'>
            <section className="bg-[#010066] md:pb-30 pb-10">
                <div className="max-w-7xl mx-auto py-2 md:px-4 px-2">
                    <div className=" grid md:grid-cols-2 relative">
                        <div className="px-5">
                            <img src={WhitePhone} alt="" className="absolute md:w-35 w-32 " />
                            <img src={BlackPhone} alt="" className="absolute md:w-35 w-32 md:left-38 left-35 top-15" />
                        </div>
                        <div className="max-w-2xl md:px-10 px-0.5 md:mt-20 mt-80 py-2">
                            <h2 className=" md:text-2xl text-lg font-bold text-[#ffffff]">Start Your Crypto Journey With Rocoin</h2>
                            <p className="text-[#ffffff] md:text-sm text-xs font-medium ">
                                Buy, sell, and manage your digital assets with ease. Rocoin gives you the power to own your crypto — safely, securely, and instantly.
                            </p>
                            <div className='flex gap-3 mt-10'>
                                <Link
                                    to='https://play.google.com.store'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        variant='hero'
                                        size='lg'
                                        className='flex items-center gap-2 shadow-lg bg-[#ffffff] text-[#010066] hover:bg-secondary transition-all duration-300 cursor-pointer font-medium md:text-sm text-xs md:px-4 px-7 rounded-md py-1'>
                                        <img src={PlayStoreLogo} alt="" className="w-8" />                                        <div className="text-left leading-tight">
                                            <p className="text-sm text-gray-400">Get it on</p>
                                            <p className="text-base text-shadow-black font-semibold">Google Play</p>
                                        </div>

                                    </Button>

                                </Link>

                                <Link
                                    to='https://play.google.com.store'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        variant='hero'
                                        size='lg'
                                        className='flex items-center gap-1 md:gap-0 shadow-lg bg-[#ffffff] text-[#010066] hover:bg-secondary transition-all duration-300 cursor-pointer font-medium md:text-sm text-xs md:px-0.5 px-5 rounded-md py-1'>
                                        <img src={Apple} className='md:w-18 w-16' />                           <div className="text-left leading-tight">
                                            <p className="text-sm text-gray-400">Download On</p>
                                            <p className="text-base text-shadow-black font-semibold">Apple Store</p>
                                        </div>
                                    </Button>

                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#010066] border-t border-[#34333380]">
                <div className="border-t-2 border-[#34333380] mx-auto flex flex-col md:flex-row md:px-10 px-2 md:gap-10 gap-5 ">
                    <div className="flex items-center justify-center">
                        <img src={Logo} alt="" className="md:w-30 w-20" />
                    </div>
                    <div className="flex items-center justify-center text-center">
                        <ul className='flex flex-col md:flex-row md:gap-4 gap-2 items-stretch justify-start'>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">Home</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">About</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">FAQs</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">Privacy Policy</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">Terms</li>
                        </ul>
                        <div className='flex py-5 px-20'>
                        <RiTwitterXLine className='text-[#ffffff] font-bold text-2xl mx-2.5 hover:text-accent' />
                        <CiLinkedin className='text-[#ffffff] font-bold text-2xl mx-2.5 hover:text-accent' />
                        <RiInstagramLine className='text-[#ffffff] font-bold text-2xl mx-2.5 hover:text-accent' />
                        </div>
                        <div className="md:px-20 py-2 px-5">
                            <p className="leading-relaxed text-sm font-medium text-[#ffffff]">© 2025 Rocoin. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Footer