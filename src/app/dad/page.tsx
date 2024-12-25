import Card from '@/components/Card';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function DadCard() {
  const messages = [
    // First page
    "Dear Dad,\n\n Merry Christmas! I love you so much and couldn't wish for a better Dad. You've always been so supportive and loving, and I'm so grateful and proud of you for everything you do.\n\n I'm so excited to be part of your multifamily journey, and will always be here to support you and help you make that dream a reality.",
    
    // Second page - with smaller image
    <div key="page2" className="flex flex-col items-center font-cormorant scale-75 sm:scale-90 md:scale-100">
      <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed font-light">
        Your gift hasn't arrived yet, but I got you a new phone case! I hope you like it
      </p>
      
      {/* Framed Image */}
      <div className="relative w-[120px] sm:w-[150px] md:w-[180px] mx-auto my-2 sm:my-4">
        <div className="absolute inset-[-12px] border-[3px] border-black/20 rounded-lg" />
        <div className="absolute inset-[-8px] bg-white/60 rounded-lg" />
        <Image
          src="/phone.png"
          alt="Phone Case for Dad"
          width={180}
          height={180}
          className="relative rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>,
    
    // Third page
    "I love you so much and hope you have a great Christmas. I can't wait to make many more memories together, traveling Europe, going to the new Universal park, and more ♡\n\nLove you always,\n Love Bri"
  ];

  return (
    <>
      <Navigation />
      <Card
        recipient="Dad"
        coverImage="/dad-cover.png"
        messages={messages}
        colors={{
          primary: '#e6f3ff',
          secondary: '#d9edff'
        }}
      />
    </>
  );
} 