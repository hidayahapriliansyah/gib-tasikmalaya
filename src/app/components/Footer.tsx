import React from 'react'

import Image from 'next/image'
import { FaFacebook, FaLocationDot, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LocateIcon, MapPin } from 'lucide-react';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className='relative w-full px-4 py-4 overflow-hidden border-t border-t-primary/20'>
      <div className='flex flex-col md:flex-row w-full px-4 py-8 max-w-7xl mx-auto '>
        <div className='w-full md:max-w-[30%]'>
          <Image
            alt='Logo Gerakan Infaq Beras'
            width={180}
            height={50}
            priority={false}
            src='/images/gib-logo.png'
          />
        </div>
        <div className='flex flex-col md:flex-row justify-start gap-8 w-full mt-4 md:mt-0'>
          <div className='w-full'>
            <span className='font-semibold text-primary'>Kontak Kami</span>
            <ul className='flex flex-col gap-1 mt-2'>
              <li className='flex gap-1 items-center'>
                <FaWhatsapp className='w-5 h-5' title='whatsapp' />08123456789
              </li>
              <li className='flex gap-1 items-center'>
                <MdOutlineEmail className='w-5 h-5' title='email' />
                gerakaninfaqberasemail@example.com
              </li>
              <li className='flex gap-1'>
                <MapPin className='-mt-2 w-10 h-10' />
                <span>
                  Perumahan Taman Yasmin 6, Jl. Pinang Merah I Nomer No.70/72, Curugmekar, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16113
                </span>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            <span className='font-semibold text-primary'>Social Media</span>
            <ul className='flex flex-col gap-1 mt-2'>
              <li className='flex gap-1 items-center'>
                <FaInstagram /> Instagram: gib.id
              </li>
              <li className='flex gap-1 items-center'>
                <FaTiktok /> TikTok: gib.id
              </li>
              <li className='flex gap-1 items-center'>
                <FaFacebook /> Facebook: facebook
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute -top-96 -left-16 -z-10 w-[50%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] flex justify-center items-center" />
      <div className="absolute -top-16 right-16 -z-10 w-[50%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] flex justify-center items-center" />
    </footer>
  )
}

export default Footer