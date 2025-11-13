"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type MenuItem = {
  label: string;
  onClick: () => void;
};

type RectangleButtonBigProps = {
  iconSrc: string;
  label: string;
  menuItems?: MenuItem[];
};

export default function RectangleButtonBig({ iconSrc, label, menuItems }: RectangleButtonBigProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (menuItems) {
      setMenuOpen(prev => !prev);
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

      {menuOpen && menuItems && (
        <div 
          className="
            bento-menu-dropdown
          "
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="
                bento-menu-item
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