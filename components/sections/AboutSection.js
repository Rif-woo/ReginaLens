import Image from 'next/image';
import QualityBox from '../QualityBox';

const AboutSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full mb-48'>
      <h1 className='text-4xl font-medium mb-16'>QUI SOMME NOUS ?</h1>
      <div className='flex justify-center items-center gap-16 w-full'>
        {/* Image */}
         <div className=''>
          <Image
            src="/ph3.jpeg"
            alt="Hero"
            width={600}
            height={400}
            className="object-cover object-top h-[720px] w-[600px] rounded-lg"
          />
        </div>

        {/* QualityBoxes */}
        <div className='flex flex-col justify-center items-center gap-10'>
          <QualityBox
            title="Expertise & Qualité"
            description="Lunetterie agrée par ART'LENS France, spécialisée dans les lunettes médicales et solaires."
            logo="/diamond.svg"
          />
          <QualityBox
            title="Notre Vision"
            description="Étendre notre présence dans toutes les régions du Sénégal pour mieux répondre aux besoins en optique."
            logo="/globe-world-earth.svg"
          />
           <QualityBox
            title="Votre Satisfaction, Notre Priorité"
            description="Avec Regina Lens, bénéficiez d’un accompagnement sur mesure et d’un savoir-faire éprouvé pour prendre soin de votre regard avec expertise et excellence."
            logo="/sparkle-stars-ai_2.svg"
          />
        </div>
    </div>
    </div>
  );
};

export default AboutSection;
