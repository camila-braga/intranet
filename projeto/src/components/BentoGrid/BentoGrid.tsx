import React from 'react';
import styles from './BentoGrid.module.css';
import SquareButtonSmall from '../SquareButtonSmall/SquareButton_small';
import SquareButtonBig from '../SquareButtonBig/SquareButton_big';
import RectangleButtonSmall from '../RectangleButtonSmall/RectangleButton_small';
import RectangleButtonMedium from '../RectangleButtonMedium/RectangleButton_medium';
import RectangleButtonBig from '../RectangleButtonBig/RectangleButton_big';
import RectangleButtonExtraBig from '../RectangleButtonExtraBig/RectangleButton_extraBig';

export default function BentoGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.ponto}>
        <RectangleButtonBig iconSrc="/icon/bentoGrid/ponto.png" label="Controle de Ponto" />
      </div>

      <div className={styles.rh}>
        <SquareButtonSmall label="Meu RH" />
      </div>

      <div className={styles.sigtap}>
        <SquareButtonSmall label="SIGTAP" />
      </div>

      <div className={styles.horus}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/horus.png" label="HÓRUS" />
      </div>

      <div className={styles.sei}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/sei.png" label="SEI RN" />
      </div>

      <div className={styles.correio}>
        <RectangleButtonSmall iconSrc="/icon/bentoGrid/correio.png" label="Correio" />
      </div>

      <div className={styles.ceaf}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/ceaf.png" label="CEAF" />
      </div>

      <div className={styles.sga}>
        <RectangleButtonMedium iconSrc="/icon/bentoGrid/sga.png" label="SGA" />
      </div>

      <div className={styles.transporte}>
        <SquareButtonSmall iconSrc="/icon/bentoGrid/transporte.png" />
      </div>

      <div className={styles.sipac}>
        <RectangleButtonSmall iconSrc="/icon/bentoGrid/sipac.png" label="SIPAC" />
      </div>

      <div className={styles.painel}>
        <RectangleButtonExtraBig  />
      </div>

      <div className={styles.glpi}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/glpi.png" label="GLPI" />
      </div>

      <div className={styles.sgh}>
        <RectangleButtonMedium iconSrc="/icon/bentoGrid/sgh.png" label="SGH" />
      </div>

      <div className={styles.intranet}>
        <SquareButtonSmall label="Intranet RN" />
      </div>

      <div className={styles.repeps}>
        <SquareButtonSmall label="REPEPS" />
      </div>

      <div className={styles.tv}>
        <SquareButtonSmall iconSrc="/icon/bentoGrid/tv.png" />
      </div>
    </div>
  );
}