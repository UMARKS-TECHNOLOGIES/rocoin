import React from 'react'
import Logo from '@/assets/images/logo3-transparent.png'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { name: "About Us", href: "/" },
        { name: "Why Rocoin", href: "/" }
    ];

    return (
        <nav className='fixed w-full top-0 z-50 bg-gradient-to-br from-purple-50 via-white to-[#c3c3dc]'>
            <div className="max-w-7xl mx-auto md:px-8 px-4 flex justify-between items-center">
                    {/* RoCoin logo */}
                    <div className='shrink-0'>
                        <img src={Logo} className='w-35 md:w-40' />
                    </div>

                    {/* Desktop Navigation */}
                    <div className='flex gap-2'>
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                {navItems.map((items) => {
                                    return (
                                        <Link
                                            key={items.name}
                                            to={items.href}
                                            className="text-gray-800 hover:text-white px-5 py-2 text-sm font-bold"
                                        >
                                            {items.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link to={'/'}>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="shadow-lg bg-[#010066] text-white hover:bg-[#00004d] transition-all duration-300 cursor-pointer font-medium text-sm px-4 py-2 rounded-md"
                                >
                                    Contact Us

                                </Button>
                            </Link>
                        </div>
                    </div>


                {/* Hamburger Icon (Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none text-[#010066]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar