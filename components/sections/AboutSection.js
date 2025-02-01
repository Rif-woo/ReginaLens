import Image from 'next/image';
import QualityBox from '../QualityBox';

const AboutSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full mb-48 ' id='AboutUs'>
      <h1 className='text-4xl font-medium mb-16 xl:max-[1515px]:text-2xl xl:max-[1515px]:mb-10 min-[768px]:max-[1280px]:mb-5 min-[768px]:max-[1280px]:text-2xl max-md:text-center max-md:text-xl max-md:w-full max-md:mb-5 max-md:mt-16  max-md:font-semibold underline'>QUI SOMME NOUS ?</h1>
      <div className='flex justify-center items-center gap-16 w-full max-md:flex-col'>
        {/* Image */}
         <div className='max-md:hidden'>
          <Image
            src="/ph3.jpeg"
            alt="Hero"
            width={600}
            height={400}
            className="object-cover object-top h-[720px] w-[600px] rounded-lg xl:max-[1515px]:h-[500px] xl:max-[1515px]:w-[450px] min-[768px]:max-[1280px]:h-[450px] min-[768px]:max-[1280px]:w-[350px]"
          />
        </div>

        {/* QualityBoxes */}
        <div className='flex flex-col justify-center items-center gap-10 xl:max-[1515px]:gap-5 min-[768px]:max-[1280px]:gap-3 max-md:gap-2'>
          <QualityBox
            title="Expertise & Qualité"
            description="Lunetterie agrée par ART'LENS France, spécialisée dans les lunettes médicales et solaires."
            logo="/diamond.svg"
          />
        <div className='md:hidden'>
          <Image
            src="/ph3.jpeg"
            alt="Hero"
            width={600}
            height={300}
            className="object-cover object-top h-[350px] w-[400px] rounded-lg max-md:mb-8"
          />
        </div>
          <QualityBox
            title="Notre Vision"
            description="Étendre notre présence dans toutes les régions du Sénégal pour mieux répondre aux besoins en optique."
            logo="/globe-world-earth.svg"
          />
           <div className='md:hidden'>
          <Image
            src="/ph7.jpeg"
            alt="Hero"
            width={600}
            height={300}
            className="object-cover object-top h-[350px] w-[400px] rounded-lg max-md:mb-8"
          />
        </div>
           <QualityBox
            title="Votre Satisfaction, Notre Priorité"
            description="Avec Regina Lens, bénéficiez d’un accompagnement sur mesure et d’un savoir-faire éprouvé pour prendre soin de votre regard avec expertise et excellence."
            logo="/sparkle-stars-ai_2.svg"
          />
           <div className='md:hidden'>
          <Image
            src="/ph4.jpeg"
            alt="Hero"
            width={600}
            height={300}
            className="object-cover object-top h-[350px] w-[400px] rounded-lg max-md:mb-8"
          />
        </div>
        </div>
    </div>
    </div>
  );
};

export default AboutSection;
