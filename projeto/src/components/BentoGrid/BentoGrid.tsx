import React from 'react';
import styles from './BentoGrid.module.css';
import SquareButtonBig from '../SquareButtonBig/SquareButton_big';
import RectangleButtonBig from '../RectangleButtonBig/RectangleButton_big';
// importe outros botões aqui

export default function BentoGrid() {
  return (
    <div className={styles.grid}>
      <RectangleButtonBig iconSrc="/icon/bentoGrid/ponto.png" label="Controle de Ponto" />
      <SquareButtonBig iconSrc="/icon/bentoGrid/ceaf.png" label="CEAF" />
      <SquareButtonBig iconSrc="/icon/bentoGrid/sei.png" label="SEI RN" />
      <SquareButtonBig iconSrc="/icon/bentoGrid/horus.png" label="HÓRUS" />
      {/* outros botões */}
    </div>
  );
}