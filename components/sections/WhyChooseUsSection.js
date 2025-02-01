import Image from 'next/image';
import ImageWText from '../ImageWText';

const WhyChooseUsSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full mb-48'>
       <h1 className='text-4xl font-medium mb-8 uppercase'>Pourquoi choisir Regina Lens ?</h1>
       <div className='flex justify-center items-end gap-10 w-full p-4 rounded-lg'>
        <ImageWText
          description="Garantie un service efficace et conforme aux attentes de ses clients."
          imageSrc="/ph7.jpeg"
          height={700}
        />
        {/* <div className='flex flex-col justify-center items-center relative gap-4'> */}
          <ImageWText
            description="Conçu pour les jeunes myopes, le JUMYOR HD FF aide à ralentir la progression de la myopie tout en offrant un confort visuel optimal."
            imageSrc="/kidsGlasses.jpeg"
            height={700}
          />
           <ImageWText
            description="Le rapport qualité/prix un de nos principaux points forts."
            imageSrc="/ph1.jpeg"
            height={700}
          />
        {/* </div> */}
       </div>

    </div>
  );
};

export default WhyChooseUsSection;
