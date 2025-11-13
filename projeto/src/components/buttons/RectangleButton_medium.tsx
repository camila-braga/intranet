"use client";

import React from 'react';
import Image from 'next/image';

type RectangleButtonMediumProps = {
  iconSrc: string;
  label: string;
  link: string;
};

export default function RectangleButtonMedium({ iconSrc, label, link }: RectangleButtonMediumProps) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button 
      className="
        flex flex-row items-center justify-center
        button-base
        
        gap-[0.875rem]                   // Base, gap: 14px
        hd:gap-4                         // HD, gap: 16px
        qhd:gap-5                        // QHD, gap: 20px
        4k:gap-8                         // 4k, gap: 32px
      "
      onClick={handleClick}
    >
      {/* Icon */}
      <div 
        className="
          relative flex items-center justify-center
          
          w-12 h-12                          // Base, 48x48px
          hd:w-16 hd:h-16                    // HD, 64x64px
          qhd:w-20 qhd:h-20                  // QHD, 80x80px
          4k:w-32  4k:h-32                   // 4K, 128x128px
        "
      >
        <Image
          src={iconSrc}
          alt={label}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      {/* Label */}
      <div 
        className="
          bento-label
        "
      >
        {label}
      </div>
    </button>
  );
}