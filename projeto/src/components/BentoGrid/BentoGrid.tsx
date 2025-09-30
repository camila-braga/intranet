import React from 'react';
import styles from './BentoGrid.module.css';
import SquareButtonBig from '../SquareButtonBig/SquareButton_big';
import RectangleButtonBig from '../RectangleButtonBig/RectangleButton_big';
import RectangleButtonExtraBig from '../RectangleButtonExtraBig/RectangleButton_extraBig';

export default function BentoGrid() {
  return (
    <div className={styles.grid}>
      <RectangleButtonBig iconSrc="/icon/bentoGrid/ponto.png" label="Controle de Ponto" />

      <SquareButtonBig iconSrc="/icon/bentoGrid/ceaf.png" label="CEAF" />

      <RectangleButtonExtraBig />

      <SquareButtonBig iconSrc="/icon/bentoGrid/sei.png" label="SEI RN" />

      <SquareButtonBig iconSrc="/icon/bentoGrid/horus.png" label="HÓRUS" />
    </div>
  );
}