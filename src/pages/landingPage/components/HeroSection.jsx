import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button'
import Apple from '../../../assets/images/apple-logo1.png'
import HeroPhone from '../../../assets/images/phone1.png'

const HeroSection = () => {
    return (
        <section className='relative h-full overflow-hidden py-25 lg:py-20 bg-gradient-to-r from-background via-accent/20 to bg-primary/10'>
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* left content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize">
                                secure {" "}
                                <span className='text-[#010066] bg-clip-text  font-bold'>P2P Crypto Trading {" "}</span>
                                Made Simple
                            </h1>
                            <p className="hidden sm:block text-lg text-muted-foreground leading-relaxed">
                                Buy, sell, and trade securely with Rocoin — your trusted crypto wallet and P2P platform built for speed, safety, and simplicity.
                            </p>
                            <div className='flex gap-3 mt-32 lg:mt-30 md:mt-80 md:ml-52 md:gap-5'>
                                <Link
                                    to='https://play.google.com.store'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        variant='hero'
                                        size='lg'
                                        className='flex items-center gap-3 shadow-lg bg-[#010066] text-white hover:bg-[#00004d] transition-all duration-300 cursor-pointer font-medium text-sm px-4 py-2 rounded-md'>
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
                                        size='lg'
                                        className='flex items-center gap-3 shadow-lg bg-[#010066] text-white hover:bg-[#00004d] transition-all duration-300 cursor-pointer font-medium text-sm px-4 py-2 rounded-md'>
                                        <img src={Apple} className='w-10 h-10' />
                                        <div className="text-left leading-tight">
                                            <p className="text-sm text-gray-300">Get it on</p>
                                            <p className="text-base font-semibold">Apple Store</p>
                                        </div>
                                    </Button>

                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Right Image */}
                    {/* <div className="relative "> */}
                        <div className="absolute top-0 left-[50%] lg:top-0.5 lg:left-[45%] md:top-36 md:left-[20%] sm:top-56 overflow-hidden shadow-glow p-4 lg:-bottom-52 md:-bottom-20">
                            <img src={HeroPhone}
                                className='w-3xl lg:w-[700px] md:w-[500px] h-auto object-cover sm:w-[400px]'
                            />
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection