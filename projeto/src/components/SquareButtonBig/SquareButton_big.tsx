import React from 'react';
import Image from 'next/image';
import styles from './SquareButton_big.module.css';

type SquareButtonBigProps = {
  iconSrc: string;
  label: string;
};

export default function SquareButtonBig({ iconSrc, label }: SquareButtonBigProps) {
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