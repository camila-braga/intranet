"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type MenuItem = {
  label: string;
  onClick: () => void;
};

type SquareButtonSmallProps = {
  iconSrc?: string;
  label?: string;
  link?: string;
  menuItems?: MenuItem[];
};

export default function SquareButtonSmall({ iconSrc, label, link, menuItems }: SquareButtonSmallProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const hasIcon = Boolean(iconSrc);
  const hasLabel = Boolean(label);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
  };
  }, []);

  const handleClick = () => {
  if (menuItems) {
  setMenuOpen(prev => !prev);
  } else if (link) {
  window.open(link, '_blank');
  }
  };

  return (
    <div className="relative w-full h-full" ref={buttonRef}>
      <button
        className={`
          flex flex-col items-center justify-center 
          w-full h-full         
          bg-white border border-black/15 
          cursor-pointer 
          shadow-[0_4px_12px_rgba(0,0,0,0.1)]
          transition-transform duration-200 ease-in-out
          hover:scale-105 
          hover:bg-accent-light
          
          p-6                       // Base, padding: 24px
          hd:p-8                    // HD, padding: 32px
          qhd:p-10                  // QHD, padding: 40px
          4k:p-14                   // 4K, padding: 56px

          rounded-2xl               // Base, rounded: 16px
          hd:rounded-2xl            // HD, rounded: 16px
          qhd:rounded-[1.25rem]     // QHD, rounded: 20px
          4k:rounded-3xl            // 4K, rounded: 24px
 
         
        `}
        onClick={handleClick}
      >
        {/* Icon */}
        {hasIcon && (
          <div className="
            relative flex items-center justify-center
            
            w-12 h-12              // Base, 48x48px
            hd:w-16 hd:h-16        // HD - 64x64px
            qhd:w-20 qhd:h-20      // QHD - 80x80px
            4k:w-28 4k:h-28        // 4K - 112x112px
          ">
            <Image
              src={iconSrc as string}
              alt={label || 'Ícone'}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        )}
        {/* Label */}
        {hasLabel && (
          <div className={`
            font-medium text-text-muted text-center
            
            text-xl                // Base,  20px
            hd:text-2xl            // HD, 24px
            qhd:text-3xl           // QHD, 36px
            4k:text-5xl            // 4K, 48px

            ${!hasIcon ? 'flex-1 h-full flex items-center justify-center' : ''}
          `}>
            {label}
          </div>
        )}
      </button>
      {/* Menu */}
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
          {/* Menu Itens */}
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