import Image from 'next/image';

const ImageWText = ({  description, imageSrc , height}) => {
  return (
    <div>
      <div className='relative'>
        <p className='text-2xl font-medium absolute bottom-0 left-0 text-white z-10 p-10 w-[500px]'>{description}</p>
        <div className='bg-black border-4 border-white rounded-xl'>
          <Image
            src={imageSrc}
            alt="Hero"
            width={600}
            height={height}
            style={{ height: `${height}px` }}
            className='object-cover object-bottom w-[600px] rounded-xl opacity-60'
          />
        </div>
        </div>
   </div>
  );
};

export default ImageWText;
