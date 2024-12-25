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

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative perspective-1000">
        <div 
          className="relative w-[800px] h-[567px] transition-all duration-1000"
          style={{
            transform: isOpen 
              ? 'translateX(0)'
              : 'translateX(-200px)',
          }}
        >
          {/* Right Page */}
          <div 
            className={`absolute right-0 w-[400px] h-full rounded-r-sm shadow-2xl transition-all duration-1000 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={pageStyle}
          >
            {/* Semi-transparent overlay for text readability */}
            <div className="absolute inset-0 bg-white/40" />
            
            <div className="relative h-full flex flex-col items-center justify-between p-8">
              <div className={`text-black text-center max-w-md mx-auto mt-8 ${textStyle}`}>
                <h3 className="text-2xl font-bold mb-4">⋇⋆✦⋆⋇</h3>
                {typeof messages[currentPage] === 'string' ? (
                  <p className="text-xl leading-relaxed whitespace-pre-line">
                    {messages[currentPage]}
                  </p>
                ) : (
                  messages[currentPage]
                )}
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between w-full mt-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage(prev => Math.max(0, prev - 1));
                  }}
                  disabled={currentPage === 0}
                  className="px-4 py-1 bg-red-800 text-white rounded-sm disabled:opacity-50 transition-all hover:bg-red-900"
                >
                  ❮ Previous
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
                  className="px-4 py-1 bg-red-800 text-white rounded-sm transition-all hover:bg-red-900"
                >
                  {currentPage === messages.length - 1 ? 'Close Card ❌' : 'Next ❯'}
                </button>
              </div>
            </div>
          </div>

          {/* Cover */}
          <div 
            className="absolute w-[400px] h-full transition-all duration-1000 transform-style-3d cursor-pointer"
            style={{
              transformOrigin: 'right center',
              transform: isOpen 
                ? 'translateX(-100%) rotateY(-180deg)' 
                : 'translateX(100%) rotateY(0deg)',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)'
            }}
            onClick={() => !isOpen && setIsOpen(true)}
          >
            {/* Front of Cover */}
            <div 
              className="absolute w-full h-full backface-hidden rounded-sm shadow-2xl overflow-hidden"
            >
              {/* Cover Image */}
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
              
              {/* Click to open message */}
              {!isOpen && (
                <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                  <motion.p 
                    className="text-white/90 text-sm bg-black/40 px-4 py-2 rounded-sm backdrop-blur-sm"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Click to open your card!
                  </motion.p>
                </div>
              )}
            </div>

            {/* Back of Cover */}
            <div 
              className="absolute w-full h-full backface-hidden rounded-l-sm shadow-2xl"
              style={{
                transform: 'rotateY(180deg)',
                ...pageStyle
              }}
            >
              {/* Semi-transparent overlay for text readability */}
              <div className="absolute inset-0 bg-white/40" />
              
              <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                <div className={`text-black ${textStyle}`}>
                  <p className="text-3xl mb-8 leading-relaxed whitespace-pre-line">
                  ♡ Merry Christmas {recipient} ♡ <br /><br />

                    I will love you forever and always.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Edge/Spine */}
          <div 
            className="absolute right-[400px] top-0 w-[2px] h-full bg-gradient-to-r from-black/20 to-transparent"
          />
        </div>
      </div>
    </div>
  );
} 