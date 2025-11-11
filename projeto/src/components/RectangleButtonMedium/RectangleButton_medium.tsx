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
        w-full h-full 
        
        bg-white border border-black/15 
        cursor-pointer 
        shadow-[0_4px_12px_rgba(0,0,0,0.1)]
        transition-transform duration-200 ease-in-out
        hover:scale-105 
        hover:bg-accent-light
        
        p-6                              // Base, padding: 24px
        hd:p-8                           // HD, padding: 32px
        qhd:p-10                         // QHD, padding: 40px
        4k:p-14                          // 4K, padding: 56px

        gap-[0.875rem]                   // Base, gap: 14px
        hd:gap-4                         // HD, gap: 16px
        qhd:gap-5                        // QHD, gap: 20px
        4k:gap-8                         // 4k, gap: 32px

        rounded-2xl                      // Base, rounded: 16px
        hd:rounded-2xl                   // HD, rounded: 16px
        qhd:rounded-[1.25rem]            // QHD, rounded: 20px
        4k:rounded-3xl                   // 4k, rounded: 24px
      "
      onClick={handleClick}
    >
      {/* .icon */}
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
      {/* .label */}
      <div 
        className="
          font-medium text-text-muted text-center
          
          text-xl                // Base, 20px
          hd:text-2xl            // HD, 24px
          qhd:text-3xl           // QHD, 30px
          4k:text-5xl            // 4K, 48px
        "
      >
        {label}
      </div>
    </button>
  );
}

// import React from 'react';
// import Image from 'next/image';
// import styles from './RectangleButton_medium.module.css';

// type RectangleButtonMediumProps = {
//   iconSrc: string;
//   label: string;
//   link: string;
// };

// export default function RectangleButtonMedium({ iconSrc, label, link  }: RectangleButtonMediumProps) {
//   const handleClick = () => {
//     window.open(link, '_blank');
//   };

//   return (
//     <button className={styles.button} onClick={handleClick}>
//       <div className={styles.icon}>
//         <Image
//           src={iconSrc}
//           alt={label}
//           fill
//           style={{ objectFit: 'contain' }}
//           priority
//         />

//       </div>
//       <div className={styles.label}>{label}</div>
//     </button>
//   );
// }