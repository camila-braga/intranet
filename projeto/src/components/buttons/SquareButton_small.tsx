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
        className="
          flex flex-col items-center justify-center
          button-base
        "
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
            bento-label
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