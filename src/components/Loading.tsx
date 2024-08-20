import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <section className='flex justify-center items-center w-full h-[360px]'>
      <Image
        alt='Logo GIB'
        width={80}
        height={80}
        src={'/images/logo-circle.png'}
        className='animate-pulse'
        quality={50}
      />
    </section>
  )
}

export default Loading