"use client";

import React from 'react';
import styles from './RectangleButton_extraBig.module.css';

interface RectangleButtonExtraBigProps {
  iframeSrc: string;
  linkUrl: string;
}

export default function RectangleButtonExtraBig({ iframeSrc, linkUrl }: RectangleButtonExtraBigProps) {
  const handleClick = () => {
    window.open(linkUrl, '_blank');
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <div className={styles.iframeWrapper}>
        <iframe
          src={iframeSrc}
          title="Painel"
          className={styles.iframe}
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
    </div>
  );
}