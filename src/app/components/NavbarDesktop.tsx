'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

const NavbarDesktop: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname()
  const currentPath = pathname.split('/')[1]

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll ke bawah
      } else {
        setShowNavbar(true); // Scroll ke atas
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <nav
      className={clsx('hidden md:block fixed w-full top-0 left-0 z-50 border-b border-b-primary/20 py-2 px-16 transition-transform duration-300 transform -translate-y-full bg-background/80 backdrop-blur-sm', {
        'transform translate-y-0': showNavbar,
      })}
    >
      <div className='flex justify-center items-center w-full max-w-7xl mx-auto'>
        <a href='/' className='flex items-center'>
          <Image
            alt='Logo Gerakan Infaq Beras'
            width={140}
            height={50}
            priority={false}
            src='/images/gib-logo.png'
          />
        </a>
        <ul className='flex items-center gap-16 mx-auto font-medium'>
          <li>
            <Link
              href={'/'}
              className={clsx('hover:border-b-2 hover:border-b-primary', {
                'border-b-2 border-b-primary font-bold text-primary': currentPath === ''
              })}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href={'/#'}
              className={clsx('hover:border-b-2 hover:border-b-primary', {
                'border-b-2 border-b-primary font-bold text-primary': currentPath === 'about'
              })}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href={'/#'}
              className={clsx('hover:border-b-2 hover:border-b-primary', {
                'border-b-2 border-b-primary font-bold text-primary': currentPath === 'contact'
              })}
            >
              Kontak
            </Link>
          </li>
        </ul>
        <a href="#form-donasi">
          <Button variant='outline' className='font-bold text-base text-primary border-primary'>Infaq Di sini</Button>
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
