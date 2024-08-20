'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CaraDonasi = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className='relative w-full p-8 lg:py-16 lg:px-8'>
      <div className='max-w-[640px] mx-auto'>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className='text-2xl lg:text-3xl text-primary text-center font-bold'
        >
          Cara Donasi
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className='mt-2 text-center'
        >Mudah! Silakan isi form di bawah ini dan Admin GIB akan membantu donasi Anda.</motion.p>
      </div>
      <div className="absolute -top-72 -left-96 -z-10 w-[80%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] flex justify-center items-center" />
    </section>
  )
}

export default CaraDonasi