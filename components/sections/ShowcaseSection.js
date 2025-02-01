import Image from 'next/image';

const ShowcaseSection = () => {
  return (
    <div className='flex justify-center items-center w-full mb-48 xl:max-[1515px]:mb-32 min-[768px]:max-[1280px]:mb-28 max-md:mb-28'>
      <div className='flex justify-center items-center gap-8 relative border-4 border-white rounded-xl pt-8 pb-64 p-16 xl:max-[1515px]:pb-60 min-[768px]:max-[1280px]:pb-52 min-[768px]:max-[1280px]:p-12 max-md:flex-col max-md:p-2 max-md:w-[850px]'>
           <h1 className='text-2xl font-medium md:hidden  max-md:font-semibold'>Nos Lunettes</h1>
        <Image
          src="/ph6.jpeg"
          alt="Hero"
          width={600}
          height={400}
          className="object-cover object-top h-[350px] w-[350px] rounded-lg xl:max-[1515px]:h-[250px] xl:max-[1515px]:w-[250px] min-[768px]:max-[1280px]:h-[220px] min-[768px]:max-[1280px]:w-[220px] max-md:w-[250px] max-md:h-[250px]"
        />
        <div className='flex flex-col justify-center items-center gap-4 max-md:gap-0'>
          <h1 className='text-4xl font-medium relative top-32 min-[768px]:max-[1280px]:top-28 min-[768px]:max-[1280px]:text-3xl max-md:hidden'>Nos Lunettes</h1>
          <Image
            src="/ph9.jpeg"
            alt="Hero"
            width={600}
            height={400}
            className="object-cover object-top h-[350px] w-[350px] rounded-lg relative top-56 min-[768px]:max-[1280px]:top-40 xl:max-[1515px]:top-44 right-0 xl:max-[1515px]:h-[250px] xl:max-[1515px]:w-[250px] min-[768px]:max-[1280px]:h-[220px] min-[768px]:max-[1280px]:w-[220px] max-md:top-0 max-md:w-[250px] max-md:h-[250px]"
          />
        </div>
         <Image
          src="/ph5.jpeg"
          alt="Hero"
          width={600}
          height={400}
          className="object-cover object-top h-[350px] w-[350px] rounded-lg xl:max-[1515px]:h-[250px] xl:max-[1515px]:w-[250px] min-[768px]:max-[1280px]:h-[220px] min-[768px]:max-[1280px]:w-[220px] max-md:w-[250px] max-md:h-[250px]"
        />
      </div>
   </div>
  );
};

export default ShowcaseSection;
