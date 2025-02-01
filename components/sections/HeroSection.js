import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className=' w-full h-full flex flex-col justify-start items-center gap-16 xl:max-[1515px]:gap-10 xl:max-[1515px]:mb-32 min-[768px]:max-[1280px]:gap-15 min-[768px]:max-[1280px]:mb-20 min-[768px]:max-[1514px]:h-[720px]
    min-[768px]:max-[1514px]:mb-0 '>
      <div>
        <Image
          src="/reginaLens.svg"
          alt="Hero"
          width={150}
          height={150}
          className="object-cover object-center xl:max-[1515px]:w-[120px] min-[768px]:max-[1280px]:w-[100px] max-md:w-[90px]"
        />
      </div>

      <div className='flex justify-center items-center w-full gap-16 min-[768px]:max-[1280px]:justify-around max-md:flex-col '>

        {/* Text */}
        <div className='flex flex-col items-left justify-left gap-10 w-full xl:max-[1515px]:w-1/2 xl:max-[1515px]:gap-5 min-[768px]:max-[1280px]:w-[300px] min-[768px]:max-[1280px]:gap-3 max-md:items-center max-md:justify-center max-md:gap-4 '>


          <h1 className='text-7xl font-bold xl:max-[1515px]:text-5xl min-[768px]:max-[1280px]:text-3xl max-md:text-center max-md:text-4xl max-md:w-[400px]'>L'Expertise au Service de Votre Vue</h1>

          <div className='w-[600px] min-[768px]:max-[1280px]:w-[350px] leading-[1.5] text-2xl xl:max-[1515px]:text-xl min-[768px]:max-[1280px]:text-base max-md:text-center max-md:text-base max-md:w-[400px]'>
            Lunetterie agrée par <span className='font-bold inline-flex'>ART'LENS France</span> qui répond aux normes en vigueur et Spécialisé dans les lunettes sur prescription medicale
          </div>

          {/* Button */}
          <button className='flex justify-left items-center gap-2 text-xl  bg-[#1E1E1E] w-fit p-2 pl-4 pr-4 text-white rounded-lg xl:max-[1515px]:px-2 xl:max-[1515px]:text-base min-[768px]:max-[1280px]:text-sm max-md:text-xs max-md:px-2 max-md:pl-2 max-md:pr-2'>
            Decouvrir Plus
            <Image
              src="/arrow-right2.svg"
              alt="Hero"
              width={35}
              height={20}
              className="object-cover object-top top-0 color-white xl:max-[1515px]:w-[30px] min-[768px]:max-[1280px]:w-[25px] max-md:w-[20px]"
            />
          </button>

        </div>
        {/* Image Hero */}
        <div className='w-3/4 xl:max-[1515px]:w-[600px] min-[768px]:max-[1280px]:w-[400px] max-md:w-[350px] '>
          <Image
            src="/ph10.jpeg"
            alt="Hero"
            width={800}
            height={400}
            className="object-cover object-center h-[650px] w-full rounded-lg xl:max-[1515px]:h-[400px] min-[768px]:max-[1280px]:h-[350px] max-md:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
