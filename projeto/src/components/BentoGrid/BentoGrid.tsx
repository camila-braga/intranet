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
        <SquareButtonSmall 
          label="Meu RH"
          menuItems={[
            {
              label: "Acessar",
              onClick: () => {
                window.open("http://www.portalrh.saude.rn.gov.br/MEUPORTALRH/Formularios/Principal", "_blank");
              },
            },
            {
              label: "Calculadora do plantão eventual",
              onClick: () => {
                window.open("http://10.19.12.251/calculadora/", "_blank");
              },
            },
          ]}
        />
      </div>

      {/* SIGTAP */}
      <div className={styles.sigtap}>
        <SquareButtonSmall 
          label="SIGTAP"
          link="http://sigtap.datasus.gov.br/tabela-unificada/app/sec/inicio.jsp"
        />
      </div>

      {/* HORUS */}
      <div className={styles.horus}>
        <SquareButtonBig 
          iconSrc="/icon/bentoGrid/horus.png" 
          label="HÓRUS" 
          link="https://scaweb.saude.gov.br/scaweb/"
        />
      </div>
      
      {/* SEI */}
      <div className={styles.sei}>
        <SquareButtonBig 
          iconSrc="/icon/bentoGrid/sei.png" 
          label="SEI RN"
          menuItems={[
            {
              label: "Acessar",
              onClick: () => {
                window.open("https://sei.rn.gov.br/sip/login.php?sigla_orgao_sistema=SEAD&sigla_sistema=SEI", "_blank");
              },
            },
            {
              label: "Usuário externo",
              onClick: () => {
                window.open("https://sei.rn.gov.br/sei/controlador_externo.php?acao=usuario_externo_logar&acao_origem=usuario_externo_gerar_senha&id_orgao_acesso_externo=0", "_blank");
              },
            },
            {
              label: "Nova senha",
              onClick: () => {
                window.open("http://sistemas.intranet.govrn/AlterarSenhaAD", "_blank");
              },
            },
          ]}
        />
      </div>

      {/* Correio */}
      <div className={styles.correio}>
        <RectangleButtonSmall 
          iconSrc="/icon/bentoGrid/correio.png" 
          label="Correio" 
          menuItems={[
            {
              label: "Acessar",
              onClick: () => {
                window.open("https://correio.rn.gov.br/", "_blank");
              },
            },
            {
              label: "Manual",
              onClick: () => {
                window.open("https://perfect-tamarind-033.notion.site/Zimbra-E-mail-f4eb426846d7409d9fd7dc47753a844e", "_blank");
              },
            },
          ]}
        />
      </div>

      {/* CEAF */}
      <div className={styles.ceaf}>
        <SquareButtonBig 
          iconSrc="/icon/bentoGrid/ceaf.png" 
          label="CEAF" 
          menuItems={[
            {
              label: "Cadastro",
              onClick: () => {
                window.open("https://www.appsheet.com/Account/Login?appName=Cadastro%20e%20Acompanhamento&FullScope=False&provider=google&returnUrl=https%3A%2F%2Fwww.appsheet.com%2Fstart%2F91eaa9a8-4ac4-4c10-a027-f19c8d724011", "_blank");
              },
            },
            {
              label: "R. A. Atendimento",
              onClick: () => {
                window.open("https://www.appsheet.com/Account/Login?appName=Renova%C3%A7%C3%A3o%20Antecipada%20ATT&FullScope=False&provider=google&returnUrl=https%3A%2F%2Fwww.appsheet.com%2Fstart%2Fbdca8050-5f03-4abb-8f20-681c46c9431d", "_blank");
              },
            },
            {
              label: "R. A. Farmacêutico",
              onClick: () => {
                window.open("https://www.appsheet.com/Account/Login?appName=Renova%C3%A7%C3%A3o%20Antecipada%20Farma&FullScope=False&provider=google&returnUrl=https%3A%2F%2Fwww.appsheet.com%2Fstart%2F4ede67a0-b6b7-4035-93e8-0c3da521513b", "_blank");
              },
            },
            {
              label: "Calculadora de medicamentos",
              onClick: () => {
                window.open("http://10.19.12.251/multcalculadora/", "_blank");
              },
            },
          ]}
        />
      </div>

      {/* SGA */}
      <div className={styles.sga}>
        <RectangleButtonMedium iconSrc="/icon/bentoGrid/sga.png" label="SGA" />
      </div>
      
      {/* Transporte */}
      <div className={styles.transporte}>
        <SquareButtonSmall 
          iconSrc="/icon/bentoGrid/transporte.png"
          link="https://sgt.saude.rn.gov.br/index.php?redirect=%2Fplugins%2Fformcreator%2Ffront%2Fformdisplay.php%3Fid%3D13&error=3"
        />
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
        <SquareButtonBig 
          iconSrc="/icon/bentoGrid/glpi.png" 
          label="GLPI"
          link="http://10.19.12.251/glpi/"
        />
      </div>

      {/* SGH */}
      <div className={styles.sgh}>
        <RectangleButtonMedium iconSrc="/icon/bentoGrid/sgh.png" label="SGH" />
      </div>

      {/* Intranet */}
      <div className={styles.intranet}>
        <SquareButtonSmall 
          label="Intranet RN"
          link="http://intranet.govrn/"
        />
      </div>

      {/* REPEPS */}
      <div className={styles.repeps}>
        <SquareButtonSmall 
          label="REPEPS"
          link="https://sueds.imd.ufrn.br/"
        />
      </div>

      {/* TV */}
      <div className={styles.tv}>
        <SquareButtonSmall 
          iconSrc="/icon/bentoGrid/tv.png"
          link="http://10.19.12.252/painel-web-master/"
        />
      </div>
    </div>
  );
}