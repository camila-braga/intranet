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
        flex items-center justify-center
        button-base

        p-0                       // Base, padding: 0px
        hd:p-0                    // HD, padding: 0px 
        qhd:p-0                   // QHD, padding: 0px 
        4k:p-0                    // 4K, padding: 0px
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

          rounded-2xl               // Base, rounded: 16px
          hd:rounded-2xl            // HD, rounded: 16px
          qhd:rounded-[1.25rem]     // QHD, rounded: 20px
          4k:rounded-3xl            // 4K, rounded: 24px

          top-[-1px]           // Base, px
          hd:top-[-44px]       // HD, px
          qhd:top-[-104px]     // QHD, px
          4k:top-[-180px]      // 4k, px

          left-[-115px]         // Base, px
          hd:left-[-48px]       // HD, px
          qhd:left-[-136px]     // QHD, px
          4k:left-[-80px]       // 4k, px

          scale-[0.5]          // Base
          hd:scale-[0.6]       // HD, px
          qhd:scale-[0.9]      // QHD, px
          4k:scale-[1.2]       // 4k, px
        "
        sandbox="allow-same-origin allow-scripts"
      />
      </div>
    </div>
  );
}