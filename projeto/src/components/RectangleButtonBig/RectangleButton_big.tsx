import React from 'react';
import Image from 'next/image';
import styles from './RectangleButton_big.module.css';

type RectangleButtonBigProps = {
  iconSrc: string;
  label: string;
};

export default function RectangleButtonBig({ iconSrc, label }: RectangleButtonBigProps) {
  return (
    <button className={styles.button}>
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
  );
}