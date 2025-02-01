import Image from 'next/image';

const ImageWText = ({  description, imageSrc}) => {
  return (
    <div>
      <div className='relative'>
        <p className='text-2xl font-bold absolute bottom-0 left-0 text-white z-10 p-10 w-[500px] xl:max-[1515px]:w-[300px] min-[768px]:max-[1280px]:w-[250px] xl:max-[1515px]:text-base xl:max-[1515px]:p-5 min-[768px]:max-[1280px]:text-sm min-[768px]:max-[1280px]:p-5'>{description}</p>
        <div className='bg-black border-4 border-white rounded-xl'>
          <Image
            src={imageSrc}
            alt="Hero"
            width={600}
            height={700}
            className='object-cover object-bottom w-[600px] h-[700px] xl:max-[1515px]:h-[500px] min-[768px]:max-[1280px]:h-[450px] rounded-xl opacity-60'
          />
        </div>
        </div>
   </div>
  );
};

export default ImageWText;
