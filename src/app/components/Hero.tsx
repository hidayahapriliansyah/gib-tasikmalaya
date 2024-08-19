'use client'

import React from 'react'
import { Button } from '../../components/ui/button'
import Image from 'next/image'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className='relative flex flex-col lg:flex-row justify-center items-center gap-8 mt-16 md:mt-20 w-full p-8 lg:py-16 lg:px-8'>
      <div className='flex flex-col lg:block justify-center items-center w-full'>
        <motion.span
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9 }}
          className='block lg:inline-block text-3xl lg:text-5xl font-bold text-center lg:text-left leading-tight text-primary mx-auto w-full'
        >Bantu Yatim & Penghafal Qur&apos;an bersama{' '}
          <h1 className='text-center lg:text-left text-primary-foreground bg-primary w-fit max-w-fit mx-auto lg:mx-0'>Gerakan Infaq Beras</h1>
        </motion.span>
        <motion.a
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          href="#form-donasi"
        >
          <Button className='mx-auto w-fit mt-4 font-bold text-lg'>Saya mau bantu</Button>
        </motion.a>
      </div>
      <div className='flex justify-center items-center w-full'>
        <motion.div
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9 }}
          className='relative'
        >
          <Image
            alt='Berbagi'
            src='/images/image1.jpg'
            width={360}
            height={80}
            className='rounded-lg'
            priority
          />
        </motion.div>
      </div>
      <div className="hidden absolute top-10 lg:-top-10 left-16 lg:-left-72 -z-10 w-[180%] lg:w-[70%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] md:flex justify-center items-center" />
      <div className="hidden absolute -top-80 -right-72 -z-10 w-[80%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] md:flex justify-center items-center" />
    </section>
  )
}

export default Hero