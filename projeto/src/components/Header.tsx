"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Image from "next/image";

function MenuSpacer() {
  return (
    <span className="
    text-white
      font-light
      text-xl       // Base (20px)
      hd:text-3xl   // HD (30px)
      qhd:text-4xl  // QHD (36px)
      4k:text-6xl   // 4K (60px)
    ">
      |
    </span>
  );
}

export default function MenuHeader() {
  const [anchorElCarreira, setAnchorElCarreira] = React.useState<null | HTMLElement>(null);
  const [anchorElDashboard, setAnchorElDashboard] = React.useState<null | HTMLElement>(null);

  const handleOpenCarreira = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCarreira(event.currentTarget);
  };
  const handleCloseCarreira = () => {
    setAnchorElCarreira(null);
  };
  const handleOpenDashboard = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElDashboard(event.currentTarget);
  };
  const handleCloseDashboard = () => {
    setAnchorElDashboard(null);
  };

  const buttonBaseSx = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    textTransform: "none",
    color: "white",
    padding: '0 0',
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#495057",
    },
    fontSize: '1.125rem',                // Base, 18px
    '@media (min-width: 1920px)': {      // HD, 24px
      fontSize: '1.5rem',
    },
    '@media (min-width: 2560px)': {      // QHD, 30px
      fontSize: '1.875rem',
    },
    '@media (min-width: 3840px)': {      // 4K, 48px
      fontSize: '3rem',
    },
  };

  const menuItemSx = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem 0 1rem',
    backgroundColor: "#028BCA",
    "&:hover": {
      background: "#C3E6F9",
      color: "#028BCA",
    },
    "&:not(:last-child)": {
      borderBottom: "1px dashed rgba(255, 255, 255, 0.7)", 
    },
    fontSize: '1rem',                  // Base, 16px
    height: '3.75rem',                 // 60px
    lineHeight: '3.75rem',             // 60px
    '@media (min-width: 1920px)': {    // HD
      fontSize: '1.375rem',            // 22px
      height: '4.5rem',                // 72px
      lineHeight: '4.5rem',            // 72px
    },
    '@media (min-width: 2560px)': {    // QHD
      fontSize: '1.75rem',             // 28px
      height: '6rem',                  // 96px
      lineHeight: '6rem',              // 96px
      padding: '0 1.5rem 0 1.5rem',    // 24px
    },
    '@media (min-width: 3840px)': {    // 4K
      fontSize: '2.875rem',            // 46px
      height: '10rem',                 // 160px
      lineHeight: '10rem',             // 160px
      padding: '0 1.75rem 0 1.75rem',  // 28px
    },
  };

  /* If the header's height changes, the 'mt' property must be updated as well to keep the submenu anchored to the header's bottom. */
  const paperSx = {
    border: 'none',
    boxShadow: '3',
    mt: 6.5,                                 // Base
    borderRadius: '0 0 1rem 1rem',           // 16px
    '@media (min-width: 1920px)': {          // HD
      mt: 6.9,                       
      borderRadius: '0 0 1.25rem 1.25rem'    // 20px
    },
    '@media (min-width: 2560px)': {          // QHD
      mt: 8.5,                       
      borderRadius: '0 0 1.875rem 1.875rem'  // 30px
    },
    '@media (min-width: 3840px)': {          // 4K
      mt: 11.5,                       
      borderRadius: '0 0 3rem 3rem'          // 48px
    },
  }

  return (
    <nav 
      className="
        flex items-center justify-center w-full 
        bg-primary shadow-md
        
        h-[8.5rem] px-16                 // Base, height: 136px, padding: 64px
        hd:h-[9.5rem] hd:px-16           // HD, height: 152px, padding: 64px
        qhd:h-[12.5rem] qhd:px-20        // QHD, height: 200px, padding: 80px
        4k:h-[19rem] 4k:px-32            // 4K, height: 304px, padding: 128px
      "
    > 
      <div className="flex w-full h-full items-center justify-between">

        {/* Logo */}
        <div>
          <Image
            src="/intranet/icon/header/logo.png"
            alt="Logo"
            width={318}
            height={106}
            priority
            className="
              h-auto transition-all duration-100
              
              w-[17.625rem]            // Base, 282px
              hd:w-[25.125rem]         // HD, 402px
              qhd:w-[30.75rem]         // QHD, 492px
              4k:w-[40.875rem]         // 4K, 654px
            "
          />
        </div>

        {/* Menu Options */}
        <div 
          className="
            flex items-center
            
            gap-[2.25rem]             // Base, 36px
            hd:gap-12                 // HD, 48px
            qhd:gap-16                // QHD, 64px
            4k:gap-[6.25rem]          // 4K, 100px
          "
        >
          <Button 
            onClick={handleOpenCarreira}
            sx={buttonBaseSx} 
          >
            Carreira e Rendimentos
          </Button>

          <Menu
            anchorEl={anchorElCarreira}
            open={Boolean(anchorElCarreira)}
            onClose={handleCloseCarreira}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            slotProps={{
              paper: {
                sx: paperSx,
              },
              list: { sx: { paddingTop: 0, paddingBottom: 0 } },
            }}
          >
            {[
              { label: "Informe dos rendimentos", href: "http://servicos.searh.rn.gov.br/searh/Dirf" },
              { label: "Portal do servidor", href: "https://portaldoservidor.rn.gov.br/login" }, 
              { label: "Qualificação profissional", href: "http://pccr.saude.rn.gov.br/pccr/" },
              { label: "Novo PCCR/SESAP", href: "https://padlet.com/hospitalregionalrh/cartilha-servidor-hetff-q990zg8ick4zelqv/wish/2454003973" },
              { label: "Regime Jurídico Único", href: "https://leisestaduais.com.br/rn/lei-complementar-n-122-1994-rio-grande-do-norte-dispoe-sobre-o-regime-juridico-unico-dos-servidores-publicos-civis-do-estado-e-das-autarquias-e-fundacoes-publicas-estaduais-institui-o-respectivo-estatuto-e-da-outras-providencias?origin=instituicao" },
              ].map(({ label, href }) => (
                <MenuItem
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseCarreira}
                  sx={menuItemSx}
                >
                  {label}
                </MenuItem>
              ))
            }
          </Menu>

          <MenuSpacer />

          <Button 
            onClick={handleOpenDashboard}
            sx={buttonBaseSx}
          >
            Dashboard
          </Button>

          <Menu
            anchorEl={anchorElDashboard}
            open={Boolean(anchorElDashboard)}
            onClose={handleCloseDashboard}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            slotProps={{
              paper: {
                sx: paperSx,
              },
              list: { sx: { paddingTop: 0, paddingBottom: 0 } },
            }}
          >
            {[
              { label: "CEAF", href: "https://lookerstudio.google.com/reporting/150a2bc2-2ef9-4068-b0f1-58f703613c5a/page/YUDyD" },
              { label: "Hospitalar Interno", href: "https://lookerstudio.google.com/u/0/reporting/b6bceaa2-37ce-4949-873c-8d4c48efcf93/page/p_atqfoutygd" },
              { label: "Painel Gestor", href: "https://lookerstudio.google.com/reporting/1e0a4d56-07c0-443f-b1a7-e1b7d672172d" },
              ].map(({ label, href }) => (
                <MenuItem
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseDashboard}
                  sx={menuItemSx}
                >
                  {label}
                </MenuItem>
              ))
            }
          </Menu>

          <MenuSpacer />

          <Button 
            component="a" 
            href="http://central.rn.gov.br/admin/index.php?class=LoginForm&method="
            target="_blank"
            rel="noopener noreferrer"
            sx={buttonBaseSx}
          >
            Agendamento gestor
          </Button>

          <MenuSpacer />

          <Button 
            component="a" 
            href="http://www.saude.rn.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            sx={buttonBaseSx}
          >
            SESAP
          </Button>

        </div>
      </div>
    </nav>
  );
}