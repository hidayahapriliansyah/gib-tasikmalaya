'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Image from 'next/image'
import { Button } from '../../components/ui/button'

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const currentPath = pathname.split('/')[1]

  return (
    <nav
      className='fixed top-0 left-0 z-50 md:hidden flex justify-between items-center w-full h-16 p-4 bg-background/90 backdrop-blur-sm border-b border-b-primary/40'
    >
      <a href='/' className='flex items-center'>
        <Image
          alt='Logo Gerakan Infaq Beras'
          width={120}
          height={50}
          priority={false}
          src='/images/gib-logo.png'
        />
      </a>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex justify-center items-center bg-background border h-8 w-8 rounded-xl text-primary z-50'
      >
        {
          isOpen
            ? <X />
            : <Menu />
        }
      </button>
      <ul className={clsx('absolute top-0 left-0 flex flex-col gap-4 p-8 w-full bg-background/90 backdrop-blur-sm transition-all duration-500', {
        'translate-y-0': isOpen,
        '-translate-y-96': !isOpen,
      })}>
        <li>
          <a href='/' className='flex items-center'>
            <Image
              alt='Logo Gerakan Infaq Beras'
              width={140}
              height={50}
              priority={false}
              src='/images/gib-logo.png'
            />
          </a>
        </li>
        <li className={clsx({
          'border-b-2 border-b-primary': currentPath === ''
        })}>
          <a href="/" className={clsx('text-lg', {
            'font-bold text-primary': currentPath === ''
          })}>Beranda</a>
        </li>
        <li className={clsx({
          'border-b-2 border-b-primary': currentPath === 'about'
        })}>
          <a href="/" className={clsx('text-lg', {
            'font-bold  text-primary': currentPath === 'about'
          })}>Tentang</a>
        </li>
        <li className={clsx({
          'border-b-2 border-b-primary': currentPath === 'contact'
        })}>
          <a href="/" className={clsx('text-lg', {
            'font-bold text-primary': currentPath === 'contact'
          })}>Kontak</a>
        </li>
        <li>
          <a href="#form-donasi">
            <Button variant='outline' className='font-bold text-base text-primary border-primary hover:text-primary/80'>Infaq Di sini</Button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarMobile