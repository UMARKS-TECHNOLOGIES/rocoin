import React from 'react'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import Apple from '../../../assets/images/appleblack.png'
import WhitePhone from '../../../assets/images/whitephone.png'
import BlackPhone from '../../../assets/images/blackphone.png'
import { RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { CiLinkedin } from 'react-icons/ci'
import Logo from '../../../assets/images/rocoinimg.png'


const Footer = () => {
    return (
        <>
            <section className="bg-[#010066] pb-30 pt20">
                <div className="max-w-7xl mx-auto py-4 px-4">
                    <div className=" grid grid-cols-2">
                        <div className="relative px-4">
                            <img src={WhitePhone} alt="" className="absolute w-45 " />
                            <img src={BlackPhone} alt="" className="absolute w-45 left-50 top-15" />
                        </div>
                        <div className="max-w-2xl px-20 mt-20 py-5">
                            <h2 className=" text-2xl font-bold text-[#ffffff]">Start Your Crypto Journey With Rocoin</h2>
                            <p className="text-[#ffffff] text-sm font-bold">
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
                                        className='flex items-center gap-3 shadow-lg bg-[#ffffff] text-[#010066] hover:bg-secondary transition-all duration-300 cursor-pointer font-medium text-sm px-4 py-2 rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                            viewBox="0 0 466 511.98">
                                            <g id="Layer_x0020_1">
                                                <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z" />
                                                <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z" />
                                                <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z" />
                                                <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z" />
                                            </g>
                                        </svg>
                                        <div className="text-left leading-tight">
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
                                        className='flex items-center gap-3 shadow-lg bg-[#ffffff] text-[#010066] hover:bg-secondary transition-all duration-300 cursor-pointer font-medium text-sm px-4 py-2 rounded-md'>
                                        <img src={Apple} className='w-10 h-10' />
                                        <div className="text-left leading-tight">
                                            <p className="text-sm text-gray-400">Get it on</p>
                                            <p className="text-base text-shadow-black font-semibold">Apple Store</p>
                                        </div>
                                    </Button>

                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#010066] border-t border-[#34333380] ">
                <div className="border-t-2 border-[#34333380] max-w-7xl mx-auto flex px-10 gap-50">
                    <div className="">
                        <img src={Logo} alt="" className="w-60" />
                        <p className="mb-5 leading-relaxed text-sm font-medium text-[#ffffff]">© 2025 Rocoin. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-15">
                        <ul className='flex gap-4'>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">Home</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">About</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">FAQs</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">Privacy Policy</li>
                            <li className="px-2 font-medium text-sm text-[#ffffff] cursor-pointer">Terms</li>
                        </ul>
                        <div className='flex gap-2 mt-8 text-2xl text-[#ffffff] cursor-pointer'>
                            <RiTwitterXLine />
                            <CiLinkedin />
                            <RiInstagramLine />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer