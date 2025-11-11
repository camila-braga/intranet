"use client";

import React from 'react';
import SquareButtonSmall from './buttons/SquareButton_small';
import SquareButtonBig from './buttons/SquareButton_big';
import RectangleButtonSmall from './buttons/RectangleButton_small';
import RectangleButtonMedium from './buttons/RectangleButton_medium';
import RectangleButtonBig from './buttons/RectangleButton_big';
import RectangleButtonExtraBig from './buttons/RectangleButton_extraBig';

export default function BentoGrid() {
  return (
     <div 
      className="
        grid w-full flex-grow grid-cols-12 grid-rows-4 
        
        gap-3 py-6 px-16                 // Base, gap: 12px, padding y: 24px, padding x: 64px
        hd:gap-5 hd:py-7 hd:px-16        // HD, gap: 20px, padding y: 28px, padding x: 64px
        qhd:gap-6 qhd:py-9 qhd:px-20     // QHD, gap: 24px, padding y: 36px, padding x: 80px
        4k:gap-8 4k:py-12 4k:px-32       // 4K, gap: 32px, padding y: 48px, padding x: 128px
      "
    >

      {/* Ponto */}
      <div className="col-span-4">
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
      <div className="col-span-1 row-start-2">
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
             {
              label: "Organograma",
              onClick: () => {
                window.open("http://10.19.12.251/calculadora/", "_blank");  //alterar link
              },
            },
          ]}
        />
      </div>

      {/* SIGTAP */}
      <div className="col-start-2 row-start-2">
        <SquareButtonSmall 
          label="SIGTAP"
          link="http://sigtap.datasus.gov.br/tabela-unificada/app/sec/inicio.jsp"
        />
      </div>

      {/* HORUS */}
      <div className="col-start-3 col-span-2 row-start-2 row-span-2">
        <SquareButtonBig 
          iconSrc="/icon/bentoGrid/horus.png" 
          label="HÓRUS" 
          link="https://scaweb.saude.gov.br/scaweb/"
        />
      </div>

      {/* SEI */}
      <div className="col-span-2 row-start-3 row-span-2">
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
      <div className="col-start-3 col-span-2 row-start-4">
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
      <div className="col-start-5 col-span-2 row-span-2">
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
      <div className="col-start-5 col-span-3 row-start-3">
        <RectangleButtonMedium 
          iconSrc="/icon/bentoGrid/sga.png" 
          label="SGA"
          link="http://10.19.12.252/novosga/public/login"
        />
      </div>

      {/* Transporte */}
      <div className="col-start-5 row-start-4">
        <SquareButtonSmall 
          iconSrc="/icon/bentoGrid/transporte.png"
          link="https://sgt.saude.rn.gov.br/index.php?redirect=%2Fplugins%2Fformcreator%2Ffront%2Fformdisplay.php%3Fid%3D13&error=3"
        />
      </div>

      {/* SIPAC */}
      <div className="col-start-6 col-span-2 row-start-4">
        <RectangleButtonSmall 
          iconSrc="/icon/bentoGrid/sipac.png" 
          label="SIPAC"
          link="https://sipac.rn.gov.br/sipac/"
        />
      </div>

      {/* Painel */}
      <div className="col-start-7 col-span-6 row-span-2">
        <RectangleButtonExtraBig
          iframeSrc="http://10.19.12.252/novosga-dashboard/index_atendimentos.html"
          linkUrl="http://10.19.12.252/novosga-dashboard/index_atendimentos.html"
        />
      </div>

      {/* GLPI */}
      <div className="col-start-8 col-span-2 row-start-3 row-span-2">
        <SquareButtonBig 
          iconSrc="/icon/bentoGrid/glpi.png" 
          label="GLPI"
          link="http://10.19.12.251/glpi/"
        />
      </div>

      {/* SGH */}
      <div className="col-start-10 col-span-3 row-start-3">
        <RectangleButtonMedium 
          iconSrc="/icon/bentoGrid/sgh.png" 
          label="SGH"
          link="https://farmacia.sgh.saude.rn.gov.br/"
        />
      </div>

      {/* Intranet */}
      <div className="col-start-10 row-start-4">
        <SquareButtonSmall 
          label="Intranet RN"
          link="http://intranet.govrn/"
        />
      </div>

      {/* REPEPS */}
      <div className="col-start-11 row-start-4">
        <SquareButtonSmall 
          label="REPEPS"
          link="https://sueds.imd.ufrn.br/"
        />
      </div>

      {/* TV */}
      <div className="col-start-12 row-start-4">
        <SquareButtonSmall 
          iconSrc="/icon/bentoGrid/tv.png"
          link="http://10.19.12.252/painel-web-master/"
        />
      </div>
    </div>
  );
}