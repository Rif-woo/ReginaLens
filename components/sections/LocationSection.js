import Image from 'next/image';
import Link from 'next/link';

const LocationSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full mb-32'>
      <h1 className='text-4xl font-medium mb-8 uppercase'>Nous retrouver ici </h1>

      <Link href="https://maps.google.com/?q=14.742954,-17.457909" target="_blank" className="relative">
        <div className="relative">
          <Image
            src="/locationNonZoom.png"
            alt="Hero"
            width={500}
            height={550}
            className="object-cover object-center h-[450px] w-[850px] rounded-xl transition-opacity duration-300 hover:opacity-0"
          />
          <Image
            src="/locationZoomed.png"
            alt="Hero Hover"
            width={500}
            height={550}
            className=" h-[450px] w-[850px] rounded-xl absolute top-0 left-0 object-cover object-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p>📌 HLM GY vers la dibiterie koromack 🇸🇳</p>
      </Link>
   </div>
  );
};

export default LocationSection;
