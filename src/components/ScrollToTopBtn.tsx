'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';

import { Button } from './ui/button';

const ScrollToTopBtn = ({ upper }: { upper?: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Menampilkan/menyembunyikan tombol scroll to top
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Menambah event listener ketika komponen dimount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Menggulir ke atas ketika tombol diklik
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      className={clsx('fixed z-10 bottom-5 right-5 w-fit text-white p-2 rounded-full transition-all duration-300 translate-y-0', {
        'translate-y-12 pointer-events-none': !isVisible,
        'mb-[64px]': upper,
      })}
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
      type="button"
    >
      <IoMdArrowRoundUp size={24} />
    </Button>
  );
};

export default ScrollToTopBtn;