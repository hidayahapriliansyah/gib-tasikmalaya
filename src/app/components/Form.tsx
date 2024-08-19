'use client'

import React, { useRef, useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'

const Form = () => {
  const [name, setName] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref)

  const router = useRouter();
  const handleSubmit = () => {
    router.push(`https://api.whatsapp.com/send?phone=6282315317359&text=Assalamualaikum%2C%20Kak.%0ASaya%20${name}.%20Saya%20ingin%20berinfaq%20untuk%20saya%20dan%20keluarga%20saya.%20Mohon%20kirimkan%20nomor%20rekening%20nya%20ya%2C%20kak.`)
  }

  return (
    <section className='relative w-full mb-16 pt-20 -mt-16 md:mt-0 md:pt-0 pb-8 px-8' id='form-donasi'>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className='text-2xl lg:text-3xl text-primary text-center font-bold'
      >
        Yuk! Sama-sama Gabung Gerakan Ini!
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        ref={ref}
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className='flex flex-col gap-4 mt-4 max-w-lg mx-auto'
      >
        <div>
          <label htmlFor="">Nama Lengkap</label>
          <Input
            placeholder='Nama Lengkap Anda'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="">No. HP. / WhatsApp</label>
          <Input
            placeholder='No. HP. / WhatsApp'
            required
            type='number'
            style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
          />
          <span></span>
        </div>
        <Button className='font-bold'>Donasi Sekarang</Button>
      </motion.form>
    </section>
  )
}

export default Form