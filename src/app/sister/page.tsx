import Card from '@/components/Card';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function SisterCard() {
  const messages = [
    // First page
    "Dear Coco, \n\nMerry Christmas!\n I love you a lot and hope you have an amazing Christmas. \n\nI have a Christmas gift picked out for you, but haven't bought it yet. I wanted to give you the chance to pick what you would prefer!",
    
    // Second page - with smaller image and clickable link
    <div key="page2" className="flex flex-col items-center font-cormorant scale-75 sm:scale-90 md:scale-100">
      <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed font-light">
        I know you like makeup, and I thought you'd really like the products from this site:{' '}
        <a 
          href="https://flowerknows.co/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-800 hover:text-red-900 underline"
        >
          flowerknows.co
        </a>
        . I wanted to get you one main item and one accessory of your choice.
      </p>
      
      {/* Framed Image */}
      <div className="relative w-[100px] sm:w-[130px] md:w-[170px] mx-auto my-0 sm:my-2">
        <div className="absolute inset-[-12px] border-[3px] border-black/20 rounded-lg" />
        <div className="absolute inset-[-8px] bg-white/60 rounded-lg" />
        <Image
          src="/flowerknows.jpg"
          alt="Flower Knows Website"
          width={150}
          height={150}
          className="relative rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>,
    
    // Third page
    "I love you dearly, and I hope you have the best Christmas ever. I missed you a lot, and hope we can spend more time together before you leave for Portugal.\n\nTo making many more memories together ♡\n\nLove you always,\nLove Bri"
  ];

  return (
    <>
      <Navigation />
      <Card
        recipient="Courtney"
        coverImage="/sister-cover.png"
        messages={messages}
        colors={{
          primary: '#ffe6eb',
          secondary: '#ffd6e0'
        }}
      />
    </>
  );
} 