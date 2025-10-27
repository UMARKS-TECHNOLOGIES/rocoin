import React from 'react'
import { CiWallet } from "react-icons/ci";
import { LuArrowDownUp } from "react-icons/lu";
import { FaPercent } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuNetwork, LuServer, LuCircuitBoard } from "react-icons/lu";

const OurFeatures = () => {
    const features = [
        {
            title: "Multi Currency Wallet",
            description: "Securely store, send, & receive your favorite cryptocurrencies — all from one intuitive wallet.",
            icon: <CiWallet />
        },
        {
            title: "Instant Conversion",
            description: "Swap crypto instantly at the best available rates.No delays.No hidden fees.",
            icon: <LuArrowDownUp />
        },
        {
            title: "P2P Escrow Trading",
            description: "P2P Escrow Trading Buy and sell safely through Rocoin’s escrow protection.Funds are held securely until both parties confirm.",
            icon: <LuServer />
        },
        {
            title: "Transparent Rates",
            description: "Keep more of your money.Enjoy affordable fees and clear, upfront pricing on every transaction.",
            icon: <FaPercent />
        },
        {
            title: "Customer Support",
            description: "We’ve got your back — any time, any day.Our dedicated support team is always ready to help.",
            icon: <BiSupport />
        },
        {
            title: "Secure & Compiant",
            description: "Rocoin uses advanced encryption & global KYC standards to keep your account safe.",
            icon: <RiLockPasswordLine />
        }
    ];

    return (
        <section className='bg-[#ffffff] py-25'>
            <div className="max-w-7xl py-4 mx-auto px-4">
                <h2 className='font-bold text-2xl capitalize'>Powerful Features Built for You</h2>
                <div className='grid grid-cols-4 gap-6 mt-5'>
                    {features.map((feature, index) => {
                        // index is 0-based: item 5 => i===4, item 6 => i===5
                        const extraClasses =
                            index === 4 ? "col-start-2" : // 5th item -> start at column 2
                                index === 5 ? "col-start-3" : // 6th item -> start at column 3 (right next to the 5th)
                                    "";
                        return (
                            <div key={feature.id ?? index} className={`bg-[#9BF7F71A] py-2 flex flex-col items-center justify-center ${extraClasses}`}>
                                <span className='text-5xl '>{feature.icon}</span>
                                <h2 className='font-semibold text-lg mt-2'>{feature.title}</h2>
                                <p className='text-sm text-accent-foreground leading-relaxed px-2 mt-1'>{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default OurFeatures