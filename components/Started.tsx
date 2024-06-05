import React from 'react'
import Image from 'next/image'

const Started = () => {
  return (
    <div className='flex items-start'>
      <Image 
        src="/assets/images/get-started.svg"
        height={400}
        width={1500}
        alt='get-started'
      />
    </div>
  )
}

export default Started