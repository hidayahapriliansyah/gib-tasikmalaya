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
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6282120836161&text=Assalamualaikum,%20kak.%20Saya%20ingin%20menghubungi%20Admin%20Gerakan%20Infaq%20Beras%20Tasik%20dan%20menanyakan%20beberapa%20hal."
                  target='_blank'
                  className='flex gap-1 items-center hover:underline'
                >
                  <FaWhatsapp className='w-5 h-5' title='whatsapp' />+62 821 2083 6161
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir//Sukamajukidul,+Kec.+Indihiang,+Kab.+Tasikmalaya,+Jawa+Barat+46151/@-7.2868399,108.1057904,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e6f511c69b8ea01:0xaa476dfcff24a26d!2m2!1d108.1881941!2d-7.286837?entry=ttu"
                  target='_blank'
                  className='flex gap-1 hover:underline'
                >
                  <MapPin className='mt-1 w-5 h-5' />
                  <span className='w-full'>
                    Sukamajukidul, Kec. Indihiang, Kab. Tasikmalaya, Jawa Barat 46151
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            <span className='font-semibold text-primary'>Social Media</span>
            <ul className='flex flex-col gap-1 mt-2'>
              <li>
                <a
                  href="https://www.instagram.com/gib.tasikmalaya"
                  target='_blank'
                  className='flex gap-1 items-center hover:underline'
                >
                  <FaInstagram /> gib.tasikmalaya
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@infaqberastasik"
                  target='_blank'
                  className='flex gap-1 items-center hover:underline'
                >
                  <FaTiktok /> infaqberastasik
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/infaqberastasik"
                  target='_blank'
                  className='flex gap-1 items-center hover:underline'
                >
                  <FaFacebook /> infaqberastasik
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute -top-96 -left-16 -z-10 w-[50%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] flex justify-center items-center" />
      <div className="absolute -top-16 right-16 -z-10 w-[50%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] flex justify-center items-center" />
    </footer >
  )
}

export default Footer