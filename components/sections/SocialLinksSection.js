import Image from 'next/image';
import Link from 'next/link';

const SocialLinksSection = () => {
  return (
    <div className='flex justify-center items-center w-full p-4'>
      <div className='flex justify-between items-center gap-4 bg-[#f7f7f7] w-[800px] rounded-2xl px-8'>
        <div>
            <Link
            href="https://www.reginalens.com/"
            target="_blank">
            <Image
            src="/reginaLens.svg"
            alt="Hero"
            width={65}
            height={60}
            className="object-cover object-center min-[768px]:max-[1280px]:w-[60px] min-[768px]:max-[1280px]:h-[55px]"
            />
            </Link >
        </div>

        <div className='flex justify-center items-center gap-4'>
           <Link
            href="http://wa.me/+221773952929"
            target="_blank">
            <Image
            src="/icons8-whatsapp.svg"
            alt="Hero"
            width={40}
            height={60}
            className="object-cover object-center min-[768px]:max-[1280px]:w-[30px] min-[768px]:max-[1280px]:h-[30px]"
            />
         </Link >
             <Link
            href="mailto:reginalens.sn@gmail.com?subject=Subject&body=Body%20content"
            target="_blank">
             <Image
            src="/icons8-gmail-nouveau.svg"
            alt="Hero"
            width={40}
            height={60}
            className="object-cover object-center min-[768px]:max-[1280px]:w-[30px] min-[768px]:max-[1280px]:h-[30px]"
            />
          </Link >
               <Link
            href="https://www.instagram.com/reginalens.sn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank">
             <Image
            src="/instagram.svg"
            alt="Hero"
            width={40}
            height={60}
            className="object-cover object-center min-[768px]:max-[1280px]:w-[30px] min-[768px]:max-[1280px]:h-[30px]"
            />
          </Link >
             <Link
            href="https://snapchat.com/t/512Q1M1V"
            target="_blank">
              <Image

            src="/icons8-snapchat (1).svg"
            alt="Hero"
            width={40}
            height={60}
            className="object-cover object-center min-[768px]:max-[1280px]:w-[30px] min-[768px]:max-[1280px]:h-[30px]"
            />
         </Link >

        </div>
      </div>
   </div>
  );
};

export default SocialLinksSection;
