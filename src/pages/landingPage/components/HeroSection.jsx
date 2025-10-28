import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button'
import Apple from '../../../assets/images/apple-logo-white-transparent.png'
import HeroPhone from '../../../assets/images/phone1.png'
import PlayStoreLogo from '../../../assets/images/playstore-logo-transparent.png'

const HeroSection = () => {
    return (
        <section className='relative  py-25 lg:py-20 bg-gradient-to-tr from-purple-50 via-white to-[#c3c3dc]'>
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="grid grid-cols-2 gap-4 items-center px-6">

                    {/* left content */}
                    <div className="py-4 w-2xl ">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize">
                                secure {" "}
                                <span className='text-[#010066] bg-clip-text  font-bold'>P2P Crypto Trading {" "}</span>
                                Made Simple
                            </h1>
                            <p className="hidden md:block text-lg font-medium text-muted-foreground leading-relaxed">
                                Buy, sell, and trade securely with Rocoin — your trusted crypto wallet and P2P platform built for speed, safety, and simplicity.
                            </p>
                            
                            <div className='flex gap-3 mt-32 lg:mt-30 lg:ml-0 md:mt-80 md:ml-52 md:gap-5'>
                                <Link
                                    to='https://play.google.com.store'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        variant='hero'
                                        size='xl'
                                        className='flex items-center gap-3 shadow-lg bg-[#010066] text-white hover:bg-[#00004d] transition-all duration-300 cursor-pointer font-medium text-sm px-4 rounded-md'>
                                        <img src={PlayStoreLogo} alt="" className='w-8 '/>
                                        <div className="text-left leading-tight">
                                            <p className="text-sm text-gray-300">Get it on</p>
                                            <p className="text-base font-semibold">Google Play</p>
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
                                        className='flex items-center gap-3 shadow-lg bg-[#010066] text-white hover:bg-[#00004d] transition-all duration-300 cursor-pointer font-medium text-sm px-4 rounded-md'>
                                        <img src={Apple} alt="" className='w-8 ' />
                                        <div className="text-left leading-tight">
                                            <p className="text-sm text-gray-300">Get it on</p>
                                            <p className="text-base font-semibold">Google Play</p>
                                        </div>

                                    </Button>

                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute -top-60 overflow-hidden shadow-glow ">
                            <img src={HeroPhone}
                                className=' w-3xl bg-contain'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection