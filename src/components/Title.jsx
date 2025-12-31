import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-[#7a5a2a] font-rufina'>{text1} {text2}</p>
    </div>
  )
}

export default Title