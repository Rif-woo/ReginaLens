import Image from 'next/image';

const ShowcaseSection = () => {
  return (
    <div className='flex justify-center items-center w-full mb-48'>
      <div className='flex justify-center items-center gap-8 relative border-4 border-white rounded-xl pt-8 pb-64 p-16'>
        <Image
          src="/ph6.jpeg"
          alt="Hero"
          width={600}
          height={400}
          className="object-cover object-top h-[350px] w-[350px] rounded-lg"
        />
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-4xl font-medium relative top-32'>Nos Lunettes</h1>
          <Image
            src="/ph9.jpeg"
            alt="Hero"
            width={600}
            height={400}
            className="object-cover object-top h-[350px] w-[350px] rounded-lg relative top-56 right-0"
          />
        </div>
         <Image
          src="/ph5.jpeg"
          alt="Hero"
          width={600}
          height={400}
          className="object-cover object-top h-[350px] w-[350px] rounded-lg"
        />
      </div>
   </div>
  );
};

export default ShowcaseSection;
