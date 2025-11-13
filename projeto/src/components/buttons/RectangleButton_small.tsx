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
        {/* Label */}
        <div 
          className="
            bento-label
          "
        >
          {label}
        </div>
      </button>
      {/* Menu */}
      {menuOpen && menuItems && (
        <div 
          className="
            bento-menu-dropdown
          "
        >
          {/* Menu Itens */}
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