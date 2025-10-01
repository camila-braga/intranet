import React from 'react';
import Image from 'next/image';
import styles from './SquareButton_small.module.css';

type SquareButtonSmallProps = {
  iconSrc?: string;
  label?: string; 
};

export default function SquareButtonSmall({ iconSrc, label }: SquareButtonSmallProps) {
  const hasIcon = Boolean(iconSrc);
  const hasLabel = Boolean(label);

  return (
    <button
      className={`
        ${styles.button}
        ${!hasIcon ? styles.noIcon : ''}
        ${!hasLabel ? styles.noLabel : ''}
      `}
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
  );
}
