'use client';

import { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
  recipient: string;
  coverImage?: string;
  messages: (string | JSX.Element)[];
  colors: {
    primary: string;
    secondary: string;
  };
}

export default function Card({ recipient, coverImage, messages, colors }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pageStyle = {
    backgroundImage: recipient === 'Momma' 
      ? 'url(/mom-page.png)'
      : 'url(/dad-page.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const textStyle = "font-cormorant font-light tracking-wide";

  const buttonStyle = recipient === 'Momma' 
    ? 'bg-[#a6393a] hover:bg-[#8f3132] text-white' 
    : 'bg-[#e6f3ff] hover:bg-[#d9edff] text-gray-800';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[800px]">
        <div className="relative w-full aspect-[1.41] perspective-1000">
          <div 
            className="absolute inset-0 transition-all duration-1000"
            style={{
              transform: isOpen 
                ? 'translateX(0)'
                : 'translateX(-12.5%)',
            }}
          >
            <div 
              className={`absolute right-0 w-1/2 h-full rounded-r-sm shadow-2xl transition-all duration-1000 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                ...pageStyle,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-white/40" />
              
              <div className="relative h-full flex flex-col items-center justify-between p-[5%]">
                <div className={`text-black text-center w-full max-w-[90%] mx-auto mt-[5%] overflow-y-auto flex-grow ${textStyle}`}>
                  <h3 className="text-[clamp(16px,4vw,24px)] font-bold mb-[2%]">⋇⋆✦⋆⋇</h3>
                  {typeof messages[currentPage] === 'string' ? (
                    <p className="text-[clamp(14px,3vw,20px)] leading-relaxed whitespace-pre-line">
                      {messages[currentPage]}
                    </p>
                  ) : (
                    <div className="scale-[clamp(0.6,0.8vw,1)]">
                      {messages[currentPage]}
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between w-full mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPage(prev => Math.max(0, prev - 1));
                    }}
                    disabled={currentPage === 0}
                    className={`px-[3%] py-[1%] ${buttonStyle} text-[clamp(12px,2.5vw,16px)] rounded-sm disabled:opacity-50 transition-all whitespace-nowrap`}
                  >
                    ❮ Prev
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (currentPage === messages.length - 1) {
                        setIsOpen(false);
                        setTimeout(() => setCurrentPage(0), 500);
                      } else {
                        setCurrentPage(prev => prev + 1);
                      }
                    }}
                    className={`px-[3%] py-[1%] ${buttonStyle} text-[clamp(12px,2.5vw,16px)] rounded-sm transition-all whitespace-nowrap`}
                  >
                    {currentPage === messages.length - 1 ? 'Close x' : 'Next ❯'}
                  </button>
                </div>
              </div>
            </div>

            <div 
              className="absolute w-1/2 h-full transition-all duration-1000 transform-style-3d cursor-pointer"
              style={{
                transformOrigin: 'right center',
                transform: isOpen 
                  ? 'translateX(-100%) rotateY(-180deg)' 
                  : 'translateX(100%) rotateY(0deg)',
                boxShadow: '0 0 15px rgba(0,0,0,0.3)'
              }}
              onClick={() => !isOpen && setIsOpen(true)}
            >
              <div className="absolute w-full h-full backface-hidden rounded-sm shadow-2xl overflow-hidden">
                {coverImage && (
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${coverImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
                
                {!isOpen && (
                  <div className="absolute bottom-[2%] left-0 right-0 flex justify-center">
                    <motion.p 
                      className="text-[min(2.5vw,sm)] text-white/90 bg-black/40 px-[5%] py-[2%] rounded-sm backdrop-blur-sm"
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Click to open your card!
                    </motion.p>
                  </div>
                )}
              </div>

              <div 
                className="absolute w-full h-full backface-hidden rounded-l-sm shadow-2xl"
                style={{
                  transform: 'rotateY(180deg)',
                  ...pageStyle
                }}
              >
                <div className="absolute inset-0 bg-white/40" />
                
                <div className="relative h-full flex flex-col items-center justify-center text-center p-[5%]">
                  <div className={`text-black ${textStyle}`}>
                    <p className="text-[clamp(18px,4vw,32px)] mb-[5%] leading-relaxed whitespace-pre-line">
                      Merry Christmas {recipient}
                      <br /><br />
                      I will love you forever and always.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-1/2 top-0 w-[2px] h-full bg-gradient-to-r from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
} 