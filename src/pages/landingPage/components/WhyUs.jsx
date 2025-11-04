import React from 'react'
import BackgroundImage from '../../../assets/images/why-background.jpg'
import KeyImage from '../../../assets/images/key.png'
import ThunderImage from '../../../assets/images/thunder.png'
import GoldCheck from '../../../assets/images/gold-tick.png'

const WhyUs = () => {
  return (
    <section className='relative py-10 px-0 bg-gradient-to-r overflow-hidden from-background via-accent to bg-primary/20 lg:px-20 md:px-10 sm:px-2' id='whyrocoin'>
      <div className="max-w-7xl  mx-auto md:px-8">
        <div className="px-5 bg-center font-bold rounded-lg overflow-hidden " style={{
          backgroundImage: `url(${BackgroundImage})`
        }}>
          <div className="py-5">
            <div className="md:py-4 py-2">
              <h1 className='text-accent bg-clip-text leading-relaxed space-x-4 capitalize md:text-2xl text-lg md:font-bold font-semibold '>why choose rocoin</h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:my-10 my-5 ">
              <div className="bg-white px-6 py-6 rounded-lg md:mt-2 flex flex-col items-center justify-center">
                <img src={KeyImage} alt="" className='md:w-30 md:h-30 w-20 h-20' />
                <h3 className='text-center bg-clip-text text-muuted-foreground md:text-2xl text-lg font-bold capitalize leading-tight my-4 text-[#343333]'>Secure Escrow</h3>
                <p className='bg-clip-text text-muted-foreground md:text-sm text-xs leading-relaxed md:font-medium font-bold'>
                  Secure Escrow
                  Fast Transaction
                  Trusted & Compliant
                  Every P2P trade is protected with escrow, keeping your funds safe until both parties confirm.
                </p>
              </div>
              <div className="bg-white px-6 py-6 rounded-lg md:mt-2 flex flex-col items-center justify-center">
                <img src={ThunderImage} alt="" className='md:w-30 md:h-30 w-20 h-20' />
                <h3 className='text-center bg-clip-text text-muuted-foreground md:text-2xl text-lg font-bold capitalize leading-tight my-4 text-[#343333]'>fast transaction</h3>
                <p className='bg-clip-text text-muted-foreground md:text-sm text-xs leading-relaxed md:font-medium font-bold'>
                  Enjoy lightning-fast deposits, withdrawals, and swaps — no unnecessary delays.
                </p>
              </div>
              <div className="bg-white px-6 py-6 rounded-lg md:mt-3 flex flex-col items-center justify-center">
                <img src={GoldCheck} alt="" className='md:w-30 md:h-30 w-20 h-20' />
                <h3 className='text-center bg-clip-text text-muuted-foreground md:text-2xl text-lg font-bold capitalize leading-tight my-4 text-[#343333]'>trusted and Compliant</h3>
                <p className='bg-clip-text text-muted-foreground md:text-sm text-xs leading-relaxed md:font-medium font-bold'>
                  Verified with government-issued ID to keep our platform safe, transparent, and compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default WhyUs