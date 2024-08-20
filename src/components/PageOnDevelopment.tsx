import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PageOnDevelopment = () => {
  return (
    <section className='w-full h-screen mt-16 md:mt-20 -mb-32 p-8'>
      <div className='flex flex-col items-center w-full'>
        <Image
          alt='Lagi ngebangun ceritanya'
          src={'/svg/construction-site-1-26.svg'}
          width={360}
          height={120}
          className='mx-auto'
        />
        <p className='text-lg md:text-xl text-center'>
          Halaman ini sedang dalam proses pengembangan ya :)
        </p>
        <Link href="/" className='flex items-center text-center mt-2 font-bold h-8 text-primary-foreground hover:bg-primary/80 bg-primary border border-primary w-fit px-4 rounded-lg'>
          Kembali ke beranda
        </Link>
      </div>
    </section>
  )
}

export default PageOnDevelopment