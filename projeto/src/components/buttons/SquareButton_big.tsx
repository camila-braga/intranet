"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type MenuItem = {
  label: string;
  onClick: () => void;
};

type SquareButtonBigProps = {
  iconSrc: string;
  label: string;
  link?: string;
  menuItems?: MenuItem[];
};

export default function SquareButtonBig({ iconSrc, label, link, menuItems }: SquareButtonBigProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = () => {
    if (menuItems) {
      setMenuOpen(prev => !prev);
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="relative w-full h-full" ref={buttonRef}>
      <button 
        className="
          flex flex-col items-center justify-center 
          button-base
          
          gap-4                            // Base, gap: 16px
          hd:gap-5                         // HD, gap: 20px
          qhd:gap-6                        // QHD, gap: 24px
          4k:gap-8                         // 4k, gap: 32px
        " 
        onClick={handleClick}
      >
        {/* Icon */}
        <div 
          className="
            relative flex items-center justify-center
            w-14 h-14              // Base, 56x56px
            hd:w-20 hd:h-20        // HD, 80x80px
            qhd:w-24 qhd:h-24      // QHD, 96x96px
            4k:w-36 4k:h-36        // 4K, 144x144px
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