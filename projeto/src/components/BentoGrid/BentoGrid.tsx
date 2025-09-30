import React from 'react';
import styles from './BentoGrid.module.css';
import SquareButtonBig from '../SquareButtonBig/SquareButton_big';
// importe outros botões aqui

export default function BentoGrid() {
  return (
    <div className={styles.grid}>
      <SquareButtonBig iconSrc="/icon/bentoGrid/sei.png" label="SEI RN" />
      <SquareButtonBig iconSrc="/icon/bentoGrid/horus.png" label="HÓRUS" />
      {/* outros botões */}
    </div>
  );
}