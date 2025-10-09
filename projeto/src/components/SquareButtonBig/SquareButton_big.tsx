import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './SquareButton_big.module.css';

type MenuItem = {
  label: string;
  onClick: () => void;
};

type SquareButtonBigProps = {
  iconSrc: string;
  label: string;
  menuItems?: MenuItem[];
};

export default function SquareButtonBig({ iconSrc, label, menuItems }: SquareButtonBigProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (menuItems) setMenuOpen(prev => !prev);
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
    <div className={styles.wrapper} ref={buttonRef}>
      <button className={styles.button} onClick={toggleMenu}>
        <div className={styles.icon}>
          <Image
            src={iconSrc}
            alt={label}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <div className={styles.label}>{label}</div>
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