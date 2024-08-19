'use client'

import React, { useRef } from 'react'
import ImageSlider from './DonasiImageSlider'
import { motion, useInView } from 'framer-motion'

const DonasiSalur = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section className='flex flex-col items-center gap-2 w-full p-8 lg:py-16 lg:px-8'>
      <div className='max-w-[640px]'>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className='text-2xl lg:text-3xl text-primary text-center font-bold'
        >
          Penyaluran Tepat Sasaran
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className='text-center leading-relaxed mt-4'
        >
          Donasi Anda Akan Disalurkan Untuk:
        </motion.p>
        <motion.ul
          ref={ref}
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className='list-decimal ml-6 leading-relaxed'
        >
          <li>
            Distribusi Beras Kepada Pondok Anak Yatim, Dhuafa, dan Penghafal Al-Qur’an.
          </li>
          <li>
            Distribusi Beras untuk Para Pejuang di Jalan Allah (Fiisabilillah).
          </li>
          <li>
            Operasional yang Menunjang Keberjalanan Program Gerakan Infaq Beras.
          </li>
        </motion.ul>
      </div>
      <div className='relative rounded-xl overflow-hidden'>
        <div className='absolute h-full w-16 bg-gradient-to-r from-background to-transparent top-0 left-0 z-50 pointer-events-none'></div>
        <div className='absolute h-full w-16 bg-gradient-to-r from-transparent to-background top-0 right-0 z-50 pointer-events-none'></div>
        <ImageSlider />
      </div>
    </section>
  )
}

export default DonasiSalur