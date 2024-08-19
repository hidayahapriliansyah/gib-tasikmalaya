// components/ImageSlider.tsx

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const ImageSlider = () => {
  return (
    <Marquee
      loop={0}
      autoFill
      speed={20}
      className='w-full p-8'
      pauseOnHover
    >
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran1.jpg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={50}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran1.jpeg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={80}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran2.jpeg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={80}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran3.jpg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={80}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran4.jpg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={80}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran5.jpg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={80}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran6.jpg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={80}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran7.jpg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={80}
      />
      <Image
        alt='Penyaluran'
        width={240}
        height={240}
        src={'/images/penyaluran9.jpg'}
        className='aspect-square object-cover rounded-xl mx-4 hover:scale-110 transition-all duration-300'
        quality={50}
      />
    </Marquee>
  );
};

export default ImageSlider;
