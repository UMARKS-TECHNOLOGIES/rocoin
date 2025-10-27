import React from 'react'
import BackgroundImage from '../../../assets/images/why-background.jpg'
import KeyImage from '../../../assets/images/key.png'
import ThunderImage from '../../../assets/images/thunder.png'
import GoldCheck from '../../../assets/images/gold-tick.png'

const WhyUs = () => {
  return (
    <section className='relative py-10 px-25 bg-gradient-to-r overflow-hidden from-background via-accent to bg-primary/20 lg:px-20 md:px-10 sm:px-2'>
      <div className="px-5 py-6 bg-center font-bold rounded-lg overflow-hidden " style={{
        backgroundImage: `url(${BackgroundImage})`
      }}>
        <div className="py-4">
          <h1 className='text-accent bg-clip-text leading-relaxed space-x-4 capitalize text-2xl font-medium'>why choose rocoin</h1>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-8 my-10">
          <div className="bg-white px-6 py-6 rounded-lg md:mt-2 flex flex-col items-center justify-center">
            <img src={KeyImage} alt="" className='w-30 h-30'/>
            <h3 className='text-center bg-clip-text text-muuted-foreground text-2xl capitalize leading-tight my-4'>Secure Escrow</h3>
            <p className='bg-clip-text text-muted-foreground text-sm leading-relaxed font-medium'>
              Secure Escrow
              Fast Transaction
              Trusted & Compliant
              Every P2P trade is protected with escrow, keeping your funds safe until both parties confirm.
            </p>
          </div>
          <div className="bg-white px-6 py-6 rounded-lg md:mt-2 flex flex-col items-center justify-center">
            <img src={ThunderImage} alt="" className='w-30 h-30' />
            <h3 className='text-center bg-clip-text text-muuted-foreground text-2xl capitalize leading-tight my-4'>fast transaction</h3>
            <p className='bg-clip-text text-muted-foreground text-sm leading-relaxed font-medium'>
              Enjoy lightning-fast deposits, withdrawals, and swaps — no unnecessary delays.
            </p>
          </div>
          <div className="bg-white px-6 py-6 rounded-lg md:mt-3 flex flex-col items-center justify-center">
            <img src={GoldCheck} alt="" className='w-30 h-30'/>
            <h3 className='text-center bg-clip-text text-muuted-foreground text-2xl capitalize leading-tight my-4'>trusted and Compliant</h3>
            <p className='bg-clip-text text-muted-foreground text-sm leading-relaxed font-medium'>
              Verified with government-issued ID to keep our platform safe, transparent, and compliant.
            </p>
          </div>
        </div>
      </div>
    </section>)
}

export default WhyUs