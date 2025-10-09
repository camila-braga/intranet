'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './SquareButton_small.module.css';

type MenuItem = {
  label: string;
  onClick: () => void;
};

type SquareButtonSmallProps = {
  iconSrc?: string;
  label?: string;
  menuItems?: MenuItem[];
};

export default function SquareButtonSmall({ iconSrc, label, menuItems }: SquareButtonSmallProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const hasIcon = Boolean(iconSrc);
  const hasLabel = Boolean(label);

  const toggleMenu = () => {
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={buttonRef}>
      <button
        className={`
          ${styles.button}
          ${!hasIcon ? styles.noIcon : ''}
          ${!hasLabel ? styles.noLabel : ''}
        `}
        onClick={toggleMenu}
      >
        {hasIcon && (
          <div className={styles.icon}>
            <Image
              src={iconSrc as string}
              alt={label || 'Ícone'}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        )}

        {hasLabel && (
          <div className={styles.label}>{label}</div>
        )}
      </button>

      {menuOpen && menuItems && (
        <div className={styles.menu}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={styles.menuItem}
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