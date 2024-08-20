import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'Halaman tidak ditemukan',
  description: 'Gerakan Infaq Beras Tasikmalaya | Halaman tidak ditemukan',
}

const NotFound = () => {
  return (
    <section className='w-full h-screen mt-16 md:mt-20 -mb-32 p-8'>
      <div className='flex flex-col items-center w-full'>
        <Image
          alt='Lagi ngebangun ceritanya'
          src={'/svg/404-page-not-found-9.svg'}
          width={360}
          height={120}
          className='mx-auto'
        />
        <p className='text-lg md:text-xl text-center'>
          Halaman tidak ditemukan.
        </p>
        <Link href="/" className='flex items-center text-center mt-2 font-bold h-8 text-primary-foreground hover:bg-primary/80 bg-primary border border-primary w-fit px-4 rounded-lg'>
          Kembali ke beranda
        </Link>
      </div>
    </section>
  )
}

export default NotFound