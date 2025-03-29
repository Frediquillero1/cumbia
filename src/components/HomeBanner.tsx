import bannerImg from '@/assets/bannerOne.jpg';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div>
      <Image src={bannerImg} alt='banner image' className='w-full h-full' />
    </div>
  );
};

export default HomeBanner;
