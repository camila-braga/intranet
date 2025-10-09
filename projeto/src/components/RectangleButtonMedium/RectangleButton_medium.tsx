import React from 'react';
import Image from 'next/image';
import styles from './RectangleButton_medium.module.css';

type RectangleButtonMediumProps = {
  iconSrc: string;
  label: string;
  link: string;
};

export default function RectangleButtonMedium({ iconSrc, label, link  }: RectangleButtonMediumProps) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
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