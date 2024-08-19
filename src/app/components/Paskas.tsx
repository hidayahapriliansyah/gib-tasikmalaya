'use client'

import React, { useRef } from 'react'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'


const Paskas = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section className='relative w-full p-8 lg:py-16 lg:px-8'>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className='text-2xl lg:text-3xl text-primary text-center font-bold'>
        Salam Hangat dari PASKAS (Pasukan Amal Sholeh)
      </motion.h2>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className='mt-2 text-center max-w-2xl mx-auto'
      >
        Kami tergerak menggalang dana karena masih banyak pondok pesantren dan rumah yatim yang belum tercukupi kebutuhan berasnya.
      </motion.p>
      <div className='flex flex-wrap lg:flex-row justify-center items-center gap-8 mt-6'>
        <Image
          alt='Paskas 1'
          src='/images/paskas1.jpg'
          width={240}
          height={80}
          className='aspect-square object-cover rounded-xl hover:scale-105 transition-all duration-300'
        />
        <Image
          alt='Paskas 1'
          src='/images/paskas2.jpg'
          width={240}
          height={80}
          className='aspect-square object-cover rounded-xl hover:scale-105 transition-all duration-300'
        />
        <Image
          alt='Paskas 1'
          src='/images/paskas3.jpg'
          width={240}
          height={80}
          className='aspect-square object-cover rounded-xl hover:scale-105 transition-all duration-300'
        />
      </div>
      <div className="hidden absolute top-24 lg:-bottom-96 right-0 lg:-right-96 -z-10 w-[100%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] md:flex justify-center items-center" />
    </section>
  )
}

export default Paskas