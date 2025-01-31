import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-16'>
      <div>
        <Image
          src="/reginaLens.svg"
          alt="Hero"
          width={150}
          height={150}
          className="object-cover object-center"
        />
      </div>

      <div className='flex justify-center items-center w-full gap-16'>
        <div className='flex flex-col items-left justify-left gap-10 w-full'>
          <h1 className='text-7xl font-bold'>L'Expertise au Service de Votre Vue</h1>
          <div className='w-[600px] leading-[1.5] text-2xl'>
            Lunetterie agrée par <span className='font-bold inline-flex'>ART'LENS France</span> qui répond aux normes en vigueur et Spécialisé dans les lunettes sur prescription medicale
          </div>
          <button className='flex justify-left items-center gap-2 text-xl  bg-[#1E1E1E] w-fit p-2 pl-4 pr-4 text-white rounded-lg'>
            Decouvrir Plus
            <Image
              src="/arrow-right2.svg"
              alt="Hero"
              width={35}
              height={20}
              className="object-cover object-top top-0 color-white"
            />
          </button>
        </div>
        <div className='w-3/4'>
          <Image
            src="/ph10.jpeg"
            alt="Hero"
            width={800}
            height={400}
            className="object-cover object-center h-[650px] w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
