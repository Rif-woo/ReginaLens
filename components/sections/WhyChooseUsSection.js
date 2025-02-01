import Image from 'next/image';
import ImageWText from '../ImageWText';

const WhyChooseUsSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full mb-48'>
      <h1 className='text-4xl font-medium mb-8 uppercase xl:max-[1515px]:text-2xl xl:max-[1515px]:mb-5 min-[768px]:max-[1280px]:text-2xl min-[768px]:max-[1280px]:mb-3 max-md:text-2xl max-md:w-full max-md:text-center '>Pourquoi choisir Regina Lens ?</h1>

       <div className='flex justify-center items-end gap-10 w-full p-4 rounded-lg max-md:flex-col  max-md:w-full max-md:p-0 max-md:items-center max-md:justify-center'>
        <ImageWText
          description="Garantie un service efficace et conforme aux attentes de ses clients."
          imageSrc="/ph7.jpeg"
        />

        <ImageWText
          description="Conçu pour les jeunes myopes, le JUMYOR HD FF aide à ralentir la progression de la myopie tout en offrant un confort visuel optimal."
          imageSrc="/kidsGlasses.jpeg"

        />
          <ImageWText
          description="Le rapport qualité/prix un de nos principaux points forts."
          imageSrc="/ph1.jpeg"
        />
       </div>

    </div>
  );
};

export default WhyChooseUsSection;
