import React from 'react';
import Image from 'next/image';
import styles from './SquareButton_small.module.css';

type SquareButtonSmallProps = {
  iconSrc?: string; // agora opcional
  label: string;
};

export default function SquareButtonSmall({ iconSrc, label }: SquareButtonSmallProps) {
  const hasIcon = !!iconSrc;

  return (
    <button className={`${styles.button} ${!hasIcon ? styles.noIcon : ''}`}>
      {hasIcon && (
        <div className={styles.icon}>
          <Image
            src={iconSrc}
            alt={label}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      )}
      <div className={styles.label}>{label}</div>
    </button>
  );
}

