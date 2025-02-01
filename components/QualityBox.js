import Image from 'next/image';

const QualityBox = ({ title, description, logo }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 border border-[#1E1E1E] p-8 xl:max-[1515px]:p-6 min-[768px]:max-[1280px]:p-4 rounded-lg w-[600px] xl:max-[1515px]:w-[450px] min-[768px]:max-[1280px]:w-[350px] max-md:w-full max-md:p-3 max-md:gap-2'>

      <div className='flex justify-center items-center gap-4 max-md:gap-2'>
        <h1 className='text-3xl font-medium xl:max-[1515px]:text-xl min-[768px]:max-[1280px]:text-lg max-md:text-base'>{title}</h1>
        <div>
          <Image
            src={logo}
            alt="Hero"
            width={35}
            height={35}
            className="object-cover object-center xl:max-[1515px]:w-[30px] min-[768px]:max-[1280px]:w-[25px] max-md:w-[20px]"
          />
        </div>
      </div>

      <p className='text-center text-2xl xl:max-[1515px]:text-base min-[768px]:max-[1280px]:text-sm max-md:text-xs'>{description}</p>
   </div>
  );
};

export default QualityBox;
