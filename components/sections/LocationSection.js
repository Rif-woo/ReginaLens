import Image from 'next/image';
import Link from 'next/link';

const LocationSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full mb-32 max-md:mb-16'>
      <h1 className='text-4xl font-medium mb-8 uppercase xl:max-[1515px]:text-2xl min-[768px]:max-[1280px]:text-2xl max-md:text-xl text-center max-md:font-semibold underline'>Nous retrouver ici </h1>

      <Link href="https://maps.google.com/?q=14.742954,-17.457909" target="_blank" className="relative">
        <div className="relative">
          <Image
            src="/locationNonZoom.png"
            alt="Hero"
            width={500}
            height={550}
            className="object-cover object-center h-[450px] w-[850px] xl:max-[1515px]:h-[300px] xl:max-[1515px]:w-[550px] min-[768px]:max-[1280px]:w-[450px] min-[768px]:max-[1280px]:h-[250px] rounded-xl transition-opacity duration-300 hover:opacity-0 max-md:w-[300px] max-md:h-[300px]"
          />
          <Image
            src="/locationZoomed.png"
            alt="Hero Hover"
            width={500}
            height={550}
            className=" h-[450px] w-[850px] xl:max-[1515px]:h-[300px] xl:max-[1515px]:w-[550px] min-[768px]:max-[1280px]:w-[450px] min-[768px]:max-[1280px]:h-[250px] rounded-xl absolute top-0 left-0 object-cover object-center opacity-0 hover:opacity-100 transition-opacity duration-300 max-md:w-[300px] max-md:h-[300px]"
          />
        </div>
        <p>📌 HLM GY vers la dibiterie koromack 🇸🇳</p>
      </Link>
   </div>
  );
};

export default LocationSection;
