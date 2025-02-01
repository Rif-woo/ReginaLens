import Image from 'next/image';

const QualityBox = ({ title, description, logo }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 border border-[#1E1E1E] p-8 rounded-lg w-[600px]'>
      
      <div className='flex justify-center items-center gap-4 '>
        <h1 className='text-3xl font-medium'>{title}</h1>
        <div>
          <Image
            src={logo}
            alt="Hero"
            width={35}
            height={35}
            className="object-cover object-center"
          />
        </div>
      </div>

      <p className='text-center text-2xl'>{description}</p>
   </div>
  );
};

export default QualityBox;
