"use client";

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

      {/* Ponto */}
      <div className={styles.ponto}>
        <RectangleButtonBig 
          iconSrc="/icon/bentoGrid/ponto.png" 
          label="Controle de Ponto"
          menuItems={[
            {
              label: "Registrar ponto",
              onClick: () => {
                window.open("https://biometria.saude.rn.gov.br/ponto_biometria/", "_blank");
              },
            },
            {
              label: "Justificar ponto eventual",
              onClick: () => {
                window.open("https://biometria.saude.rn.gov.br/eventual/index.php?class=LoginForm", "_blank");
              },
            },
          ]}
        />
      </div>

      {/* RH */}
      <div className={styles.rh}>
        <SquareButtonSmall label="Meu RH" />
      </div>

      {/* SIGTAP */}
      <div className={styles.sigtap}>
        <SquareButtonSmall label="SIGTAP" />
      </div>

      {/* HORUS */}
      <div className={styles.horus}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/horus.png" label="HÓRUS" />
      </div>
      
      {/* SEI */}
      <div className={styles.sei}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/sei.png" label="SEI RN" />
      </div>

      {/* Correio */}
      <div className={styles.correio}>
        <RectangleButtonSmall iconSrc="/icon/bentoGrid/correio.png" label="Correio" />
      </div>

      {/* CEAF */}
      <div className={styles.ceaf}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/ceaf.png" label="CEAF" />
      </div>

      {/* SGA */}
      <div className={styles.sga}>
        <RectangleButtonMedium iconSrc="/icon/bentoGrid/sga.png" label="SGA" />
      </div>
      
      {/* Transporte */}
      <div className={styles.transporte}>
        <SquareButtonSmall iconSrc="/icon/bentoGrid/transporte.png" />
      </div>

      {/* SIPAC */}
      <div className={styles.sipac}>
        <RectangleButtonSmall iconSrc="/icon/bentoGrid/sipac.png" label="SIPAC" />
      </div>

      {/* Painel */}
      <div className={styles.painel}>
        <RectangleButtonExtraBig
          iframeSrc="http://10.19.12.252/novosga-dashboard/index_atendimentos.html"
          linkUrl="http://10.19.12.252/novosga-dashboard/index_atendimentos.html"
        />
      </div>

      {/* GLPI */}
      <div className={styles.glpi}>
        <SquareButtonBig iconSrc="/icon/bentoGrid/glpi.png" label="GLPI" />
      </div>

      {/* SGH */}
      <div className={styles.sgh}>
        <RectangleButtonMedium iconSrc="/icon/bentoGrid/sgh.png" label="SGH" />
      </div>

      {/* Intranet */}
      <div className={styles.intranet}>
        <SquareButtonSmall label="Intranet RN" />
      </div>

      {/* REPEPS */}
      <div className={styles.repeps}>
        <SquareButtonSmall label="REPEPS" />
      </div>

      {/* TV */}
      <div className={styles.tv}>
        <SquareButtonSmall iconSrc="/icon/bentoGrid/tv.png" />
      </div>
    </div>
  );
}