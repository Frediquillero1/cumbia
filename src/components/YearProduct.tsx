import React from 'react';
import Container from './Container';
import Image from 'next/image';
import productOfTheYear from '@/assets/productOfTheYear.webp';
import Link from 'next/link';

const YearProduct = () => {
  return (
    <div className='w-full bg-[#f3f3f3]'>
      <Container className='md:bg-transparent relative py-0 mb-10'>
        <Image
          src={productOfTheYear}
          alt='product'
          className='w-full h-full object-contain md:inline-block'
        />
        <div className='w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-4 right-0 flex flex-col items-start gap-6 justify-center'>
          <h1 className='text-3xl font-semibold text-white'>
            Product of the year
          </h1>
          <p className='text-base font-normal text-white max-w-[600px] mr-5'>
            Deadlights jack lad schooner scallywag dance the hempen jig carouser
            broadside cable strike colors. Bring a spring upon her cable
            holystone blow the man down spanker Shiver me timbers to go on
            account lookout wherry doubloon chase.
          </p>
          <Link
            href={'/shop'}
            className='bg-cumbiaOrange text-white text-lg w-[185px] h-[50px] hover:bg-cumbiaOrangeDark duration-300 hoverEffect font-bold flex items-center justify-center rounded-md'
          >
            Shop Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default YearProduct;
