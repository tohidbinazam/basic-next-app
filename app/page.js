import Image from 'next/image';
import baby from '@/public/baby-boy-posing.webp';

export default function Home() {
  return (
    <>
      <h1> Hello World </h1>
      <Image
        src={baby}
        width={'500'}
        height={'400'}
        alt='Picture of the author'
      />
    </>
  );
}
