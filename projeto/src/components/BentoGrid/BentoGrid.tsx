import React from 'react';
import styles from './BentoGrid.module.css';
import SquareButtonSmall from '../SquareButtonSmall/SquareButton_small';
import SquareButtonBig from '../SquareButtonBig/SquareButton_big';
import RectangleButtonBig from '../RectangleButtonBig/RectangleButton_big';
import RectangleButtonExtraBig from '../RectangleButtonExtraBig/RectangleButton_extraBig';

export default function BentoGrid() {
  return (
    <div className={styles.grid}>
      <RectangleButtonBig iconSrc="/icon/bentoGrid/ponto.png" label="Controle de Ponto" />

      <SquareButtonBig iconSrc="/icon/bentoGrid/ceaf.png" label="CEAF" />

      <RectangleButtonExtraBig />

      <SquareButtonSmall iconSrc="/icon/bentoGrid/rh.png" label="Meu RH" />

      <SquareButtonSmall  label="SIGTAP" />

      <SquareButtonBig iconSrc="/icon/bentoGrid/horus.png" label="HÓRUS" />

      <RectangleButtonBig iconSrc="/icon/bentoGrid/sga.png" label="TESTE 1" />

      <SquareButtonBig iconSrc="/icon/bentoGrid/glpi.png" label="GLPI" />
    </div>
  );
}