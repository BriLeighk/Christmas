import Card from '@/components/Card';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function MommaCard() {
  const messages = [
    // First page
    "Dear Momma,\nMerry Christmas! I love you so much and am so grateful for everything you do for us. You are the best momma anyone could ask for.\n\nYour gift hasn't arrived yet, but we wanted to get you something special that you could keep with you and cherish always.",
    
    // Second page - with image
    <div key="page2" className="flex flex-col items-center font-cormorant w-full">
      <p className="text-[clamp(14px,3vw,20px)] mb-[5%] leading-relaxed font-light">
        We bought you this necklace so you can keep a part of Blaze with you when we go to Portugal, and have it with you wherever you go.
      </p> <br />
      
      <div className="relative w-[clamp(150px,30%,250px)] mx-auto">
        <div className="absolute inset-[-12px] border-[3px] border-black/20 rounded-lg" />
        <div className="absolute inset-[-8px] bg-white/60 rounded-lg" />
        <Image
          src="/necklace.png"
          alt="Necklace for Momma"
          width={300}
          height={300}
          className="relative rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>,
    
    // Third page
    "We love you dearly, and hope you have a beautiful Christmas. \n\nYou have been such an amazing Momma. I can't wait to have many more memories together. Thank you for everything you do for us ♡\n\nlove you always,\nLove Bri, Cou, Dad, and Blaze ♡"
  ];

  return (
    <>
      <Navigation />
      <Card
        recipient="Momma"
        coverImage="/momma-cover.png"
        messages={messages}
        colors={{
          primary: '#f5f5f0',
          secondary: '#eaeae0'
        }}
      />
    </>
  );
} 