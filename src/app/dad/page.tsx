import Card from '@/components/Card';
import Image from 'next/image';

export default function DadCard() {
  const messages = [
    // First page
    "Dear Dad,\n\n Merry Christmas! I love you so much and couldn't wish for a better Dad. You've always been so supportive and loving, and I'm so grateful and proud of you for everything you do.\n\n I'm so excited to be part of your multifamily journey, and will always be here to support you and help you make that dream a reality.",
    
    // Second page - with smaller image
    <div key="page2" className="flex flex-col items-center font-cormorant">
      <p className="mb-6 text-xl leading-relaxed font-light">
        Your gift hasn't arrived yet, but I got you a new phone case! I hope you like it
      </p>
      
      {/* Framed Image - reduced size */}
      <div className="relative max-w-[180px] mx-auto my-4">
        <div className="absolute inset-[-12px] border-[3px] border-black/20 rounded-lg" />
        <div className="absolute inset-[-8px] bg-white/60 rounded-lg" />
        <Image
          src="/phone.png"
          alt="Phone Case for Dad"
          width={180}
          height={180}
          className="relative rounded-lg shadow-lg"
        />
      </div>
    </div>,
    
    // Third page
    "I love you so much and hope you have a great Christmas. I can't wait to make many more memories together, traveling Europe, going to the new Universal park, and more ♡\n\nLove you always,\n Love Bri"
  ];

  return (
    <Card
      recipient="Dad"
      coverImage="/dad-cover.png"
      messages={messages}
      colors={{}}
    />
  );
} 