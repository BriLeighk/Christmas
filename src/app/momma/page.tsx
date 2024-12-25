import Card from '@/components/Card';
import Image from 'next/image';

export default function MommaCard() {
  const messages = [
    // First page
    "Dear Momma,\nMerry Christmas! I love you so much and am so grateful for everything you do for us. You are the best momma anyone could ask for.\n\nYour gift hasn't arrived yet, but we wanted to get you something special that you could keep with you and cherish always.",
    
    // Second page - with image
    <div key="page2" className="flex flex-col items-center font-cormorant">
      <p className="mb-6 text-xl leading-relaxed font-light">
        We bought you this necklace so you can keep a part of Blaze with you when we go to Portugal, and have it with you wherever you go.
      </p>
      
      {/* Framed Image */}
      <div className="relative max-w-[250px] mx-auto my-4">
        <div className="absolute inset-[-12px] border-[3px] border-black/20 rounded-lg" />
        <div className="absolute inset-[-8px] bg-white/60 rounded-lg" />
        <Image
          src="/necklace.png"
          alt="Necklace for Momma"
          width={250}
          height={250}
          className="relative rounded-lg shadow-lg"
        />
      </div>
    </div>,
    
    // Third page
    "We love you dearly, and hope you have a beautiful Christmas. \n\nYou have been such an amazing Momma. I can't wait to have many more memories together. Thank you for everything you do for us ♡\n\nlove you always,\nLove Bri, Cou, Dad, and Blaze ♡"
  ];

  return (
    <Card
      recipient="Momma"
      coverImage="/momma-cover.png"
      messages={messages}
      colors={{
        primary: '#f5f5f0',   // Cream
        secondary: '#eaeae0'  // Slightly darker cream
      }}
    />
  );
} 