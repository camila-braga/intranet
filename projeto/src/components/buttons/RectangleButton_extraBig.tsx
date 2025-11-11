"use client";

import React from 'react';

interface RectangleButtonExtraBigProps {
  iframeSrc: string;
  linkUrl: string;
}

export default function RectangleButtonExtraBig({ iframeSrc, linkUrl }: RectangleButtonExtraBigProps) {
  const handleClick = () => {
    window.open(linkUrl, '_blank');
  };

  return (
    <div 
      className="
        w-full h-full 
        bg-white border border-black/15
        shadow-[0_4px_12px_rgba(0,0,0,0.1)]
        cursor-pointer 
        overflow-hidden p-0
        flex items-center justify-center
        transition-transform duration-200 ease-in-out
        hover:scale-105
        hover:bg-accent-light

        rounded-2xl                      // Base, rounded: 16px
        hd:rounded-2xl                   // HD, rounded: 16px
        qhd:rounded-[1.25rem]            // QHD, rounded: 20px
        4k:rounded-3xl                   // 4k, rounded: 24px
      "
      onClick={handleClick}
    >
      {/* Frame */}
      <div className="w-full h-full overflow-hidden relative">
        <iframe
        src={iframeSrc}
        title="Painel"
        className="
          absolute border-none
          pointer-events-none
          origin-top-left
          w-[1600px]
          h-[1200px]

          top-[-1px]         // Base, px
          hd:top-[-44px]      // HD, px
          qhd:top-[-104px]     // QHD, px
          4k:top-[-180px]      // 4k, px

          left-[-115px]         // Base, px
          hd:left-[-48px]      // HD, px
          qhd:left-[-136px]     // QHD, px
          4k:left-[-80px]      // 4k, px

          scale-[0.5]         // Base
          hd:scale-[0.6]      // HD, px
          qhd:scale-[0.9]     // QHD, px
          4k:scale-[1.2]     // 4k, px
        "
        sandbox="allow-same-origin allow-scripts"
      />
      </div>
    </div>
  );
}