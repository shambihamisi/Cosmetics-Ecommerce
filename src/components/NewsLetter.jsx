import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-rufina font-bold text-[#7a5a2a]'>Subscribe now & get 20% off</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-[#7a5a2a] pl-3'>
            <input 
            className='w-full sm:flex-1 outline-none'
            type="email" 
            placeholder='Enter your email'
            required />
            
            <button type='submit' className='bg-[#7a5a2a] hover:bg-amber-900 cursor-pointer text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter