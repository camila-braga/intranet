import React from 'react';
import Image from 'next/image';
import styles from './RectangleButton_small.module.css';

type RectangleButtonSmallProps = {
  iconSrc: string;
  label: string;
};

export default function RectangleButtonSmall({ iconSrc, label }: RectangleButtonSmallProps) {
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