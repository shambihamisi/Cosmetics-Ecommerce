import React from 'react'
import gloss from '../images/gloss.jpg'
import makeup from '../images/makeup.jpg'

const Hero = () => {
  return (
    <section className='relative w-full overflow-hidden bg-[#f5f1ee]'>
        <div className='mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2'>

            {/*LEFT SIDE IMAGE */}
            <div className='relative flex items-end justify-start'>
                <img src={gloss} alt="gloss image" className='absolute inset-0 h-full w-full object-cover'/>
                
                <div className='relative z-10 p-6 sm:p-10 lg:p-14 text-white'>
                    <h2 className='text-5xl uppercase tracking-widest font-belleza font-bold md:text-6xl'>
                        Beauty Redefined
                    </h2>
                </div>
            </div>

            {/*RIGHT SIDE IMAGE */}
            <div className='relative flex items-center lg:items-end justify-center'>
                <img src={makeup} alt="makeup image" className='absolute inset-0 h-full w-full object-cover'/>
                
                <button className='absolute lg:relative -top-4 lg:top-auto z-10 px-16 py-2 sm:px-24 sm:py-2 lg:px-30 lg:py-4 border border-black bg-lime-200 text-stone-600 uppercase lg:mb-14 cursor-pointer hover:bg-lime-300'>
                    Shop up to 20% off
                </button>
            </div>

            {/*BRAND NAME OVERLAY */}
            <h1 className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 text-4xl md:text-9xl lg:text-[220px] xl:text-[260px] 2xl:text-[380px] font-extrabold tracking-tight text-lime-200 font-belleza"> 
                BELLEZA
            </h1>
        </div>
    </section>
  )
}

export default Hero