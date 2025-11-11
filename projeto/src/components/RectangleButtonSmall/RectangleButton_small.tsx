"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type MenuItem = {
  label: string;
  onClick: () => void;
};

type RectangleButtonSmallProps = {
  iconSrc: string;
  label: string;
  link?: string;
  menuItems?: MenuItem[];
};

export default function RectangleButtonSmall({ iconSrc, label, link, menuItems }: RectangleButtonSmallProps) {

  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (menuItems) {
      setMenuOpen(prev => !prev);
    } else if (link) {
      window.open(link, '_blank');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full h-full" ref={buttonRef}>
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
        <div 
          className="
            relative flex items-center justify-center
            
            w-11 h-11                          // Base, 44x44px
            hd:w-14 hd:h-14                    // HD, 56x56px
            qhd:w-[4.5rem] qhd:h-[4.5rem]      // QHD, 72x72px
            4k:w-24  4k:h-24                   // 4K, 96x96px
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

      {menuOpen && menuItems && (
        <div 
          className="
            absolute top-0 left-full z-50 ml-2 
            w-max overflow-hidden
            shadow-lg

            min-w-44                          // Base, width: 176px
            hd:min-w-56                       // HD, width: 224px
            qhd:min-w-64                      // QHD, width: 256px
            4k:min-w-80                       // 4K, width: 320px

            rounded-2xl                       // Base, rounded: 16px
            hd:rounded-[1.25rem]              // HD, rounded: 20px
            qhd:rounded-[1.875rem]            // QHD, rounded: 30px
            4k:rounded-[3rem]                 // 4K, rounded: 48px 
          "
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center 
                cursor-pointer 
                bg-secondary text-white 
                font-medium
                border-b border-dashed border-white/70 
                last:border-b-0
                hover:text-secondary 
                hover:bg-secondary-hover

                h-[3.75rem]                   // Base, altura: 60px
                hd:h-[3.75rem]                // HD, altura: 60px
                qhd:h-[5rem]                  // QHD, altura: 80px
                4k:h-[10rem]                  // 4K, altura: 160px

                leading-[3.75rem]             // Base, leading: 60px
                hd:leading-[3.75rem]          // HD, leading: 60px
                qhd:leading-[5rem]            // QHD, leading: 80px
                4k:leading-[10rem]            // 4K,, leading: 160px

                text-base                     // Base, text: 16px
                hd:text-[1.25rem]             // HD, text: 20px
                qhd:text-[1.75rem]            // QHD, text: 28px
                4k:text-[2.875rem]            // 4K, text: 46px

                px-4                          // Base, padding:16px
                hd:px-4                       // HD, padding:16px
                qhd:px-6                      // QHD, padding:24px
                4k:px-[1.75rem]               // 4K, padding:28px
              "
              onClick={() => {
                item.onClick();
                setMenuOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import styles from './RectangleButton_small.module.css';

// type MenuItem = {
//   label: string;
//   onClick: () => void;
// };

// type RectangleButtonSmallProps = {
//   iconSrc: string;
//   label: string;
//   link?: string;
//   menuItems?: MenuItem[];
// };

// export default function RectangleButtonSmall({ iconSrc, label, link, menuItems }: RectangleButtonSmallProps) {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const buttonRef = useRef<HTMLDivElement>(null);

//   const handleClick = () => {
//     if (menuItems) {
//       setMenuOpen(prev => !prev);
//     } else if (link) {
//       window.open(link, '_blank');
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
  
//   return (
//     <div className={styles.wrapper} ref={buttonRef}>
//       <button className={styles.button} onClick={handleClick}>
//         <div className={styles.icon}>
//           <Image
//             src={iconSrc}
//             alt={label}
//             fill
//             style={{ objectFit: 'contain' }}
//             priority
//           />
//         </div>
//         <div className={styles.label}>{label}</div>
//       </button>

//       {menuOpen && menuItems && (
//         <div className={styles.menu}>
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className={styles.menuItem}
//               onClick={() => {
//                 item.onClick();
//                 setMenuOpen(false);
//               }}
//             >
//               {item.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }