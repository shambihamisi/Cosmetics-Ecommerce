import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <section className='w-full overflow-hidden text-[#7a5a2a] px-4 sm:px-6 lg:px-10 py-10"'>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xl sm:text-md md:text-lg font-rufina text-[#7a5a2a]'>

        <div>
            <img src={assets.exchange_icon} alt=""  className='w-25 m-auto mb-5'/>
            <p className='font-semibold'>Exchange Policy</p>
            <p className='text-[#856536]'>We offer a hassle free exchange policy. </p>
        </div>

        <div>
            <img src={assets.quality_icon} alt=""  className='w-25 m-auto mb-5'/>
            <p className='font-semibold'>7-Day Return Policy</p>
            <p className='text-[#856536]'>We provide a 7-Day return policy. </p>
        </div>

        <div>
            <img src={assets.support_img} alt=""  className='w-25 m-auto mb-5'/>
            <p className='font-semibold'>Customer Support</p>
            <p className='text-[#856536]'>24/7 Customer support. </p>
        </div>

      </div>
    </section>
  )
}

export default OurPolicy