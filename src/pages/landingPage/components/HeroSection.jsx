import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button'
import Apple from '../../../assets/images/apple-logo-white-transparent.png'
import HeroPhone from '../../../assets/images/phone1.png'
import PlayStoreLogo from '../../../assets/images/playstore-logo-transparent.png'

const HeroSection = () => {
    return (
        <section className='relative py-20 md:py-25 bg-gradient-to-tr from-purple-50 via-white to-[#c3c3dc] md:mt-5 mt-10'>
            <div className="max-w-7xl mx-auto px-0.5 md:px-4">
                <div className="grid md:grid-cols-2 gap-4 items-center px-6">

                    {/* left content */}
                    {/* <div className="py-4 w-2xl "> */}
                        <div className="space-y-2 md:space-y-4 md:w-2xl">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight capitalize">
                                secure {" "}
                                <span className='text-[#010066] bg-clip-text font-bold'>P2P Crypto Trading {" "}</span>
                                Made Simple
                            </h1>
                            <p className="hidden md:block text-lg font-medium text-muted-foreground leading-relaxed">
                                Buy, sell, and trade securely with Rocoin — your trusted crypto wallet and P2P platform built for speed, safety, and simplicity.
                            </p>
                            
                            <div className='flex gap-2 mt-60 md:mt-35 md:gap-5'>
                                <Link
                                    to='https://play.google.com.store'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        variant='hero'
                                        size='xl'
                                    className='flex items-center gap-2 shadow-lg bg-[#010066] text-white hover:bg-[#00004d] transition-all duration-300 cursor-pointer font-medium text-xs md:text-sm px-7 md:px-4 rounded-md py-1'>
                                        <img src={PlayStoreLogo} alt="" className='w-8'/>
                                        <div className="text-left leading-tight">
                                        <p className="text-xs md:text-sm text-gray-300">Get it on</p>
                                        <p className="text-sm md:text-base font-semibold">Google Play</p>
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
                                        size='xl'
                                        className='flex items-center gap-2 shadow-lg bg-[#010066] text-white hover:bg-[#00004d] transition-all duration-300 cursor-pointer font-medium text-xs md:text-sm px-7 md:px-4 rounded-md py-1'>
                                        <img src={Apple} alt="" className='w-8 ' />
                                        <div className="text-left leading-tight">
                                            <p className="text-xs md:text-sm text-gray-300">Get it on</p>
                                            <p className="text-sm md:text-base font-semibold">Google Play</p>
                                        </div>

                                    </Button>

                                </Link>
                            </div>

                        {/* </div> */}
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute -top-75 md:-top-60 overflow-hidden shadow-glow ">
                            <img src={HeroPhone}
                                className=' w-5xl bg-contain md:w-3xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection