import React from 'react'
import Logo from '@/assets/images/logo3.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button';


const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "About Us", href: "/" },
        { name: "Why Rocoin", href: "/" }
    ];

    return (
        <nav className='sticky top-0 bg-gradient-to-r from-background via-accent/20 to bg-primary/10 z-50'>
            <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* RoCoin logo */}

                    <div className='flex-shrink-0'>
                        <img src={Logo} className='w-20' />
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
                                            className="text-gray-800 hover:text-white px-5 py-2 text-sm font-medium"
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

                </div>
            </div>
        </nav>
    )
}

export default Navbar