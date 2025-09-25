"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

export default function MenuHeader() {
  const [anchorElCarreira, setAnchorElCarreira] = React.useState<null | HTMLElement>(null);

  const handleOpenCarreira = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCarreira(event.currentTarget);
  };

  const handleCloseCarreira = () => {
    setAnchorElCarreira(null);
  };

  const menuItemSx = {
    height: 70,
    lineHeight: "70px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    fontSize: 24,
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "#028BCA", //secondary
    "&:hover": {
      backgroundColor: "rgba(135, 204, 242, 0.5)", //tertiary
    },
    "&:not(:last-child)": {
      borderBottom: "1px dashed rgba(255, 255, 255, 0.7)",  //white dots
    },
  };

  const buttonBaseSx = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    fontSize: 28,
    textTransform: "none",
    color: "white",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#495057", //secondary text
    },
  };

  return (
    <AppBar position="static"  sx={{ 
        backgroundColor: "#5AA7CE",  //primary
        height: "155px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        paddingX: "32px"
      }}> 

      <Toolbar sx={{
          width: "100%",
          maxWidth: "1920px",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

        {/* Logo */}
        <Box>
          <Image
            src="/logo.png"
            alt="Logo"
            width={366}
            height={122}
            priority
          />
        </Box>

        {/* Opcoes */}
        <Box sx={{
            display: "flex", 
            gap: 6, 
            alignItems: "center", 
            '& .MuiButton-root': buttonBaseSx, 
          }}>

            <Button color="inherit" onClick={handleOpenCarreira} >
              Carreira e Rendimentos
            </Button>
            
            <Menu
              anchorEl={anchorElCarreira}
              open={Boolean(anchorElCarreira)}
              onClose={handleCloseCarreira}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              slotProps={{
                paper: {
                  sx: {
                    border: 'none',
                    boxShadow: '3',
                    mt: 6,
                    ml: 1,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                },
                list: {
                  sx: {
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                },
              }}
              
            >
              {[
                { label: "Informe dos rendimentos", href: "http://servicos.searh.rn.gov.br/searh/Dirf" },
                { label: "Portal do servidor", href: "http://servicos.searh.rn.gov.br/searh/copag/contra_cheque.asp" },   //Trocar pelo site novo
                { label: "Qualificação profissional", href: "http://pccr.saude.rn.gov.br/pccr/" },
                { label: "Novo PCCR/SESAP", href: "https://padlet.com/hospitalregionalrh/cartilha-servidor-hetff-q990zg8ick4zelqv/wish/2454003973" },
                { label: "Regime Jurídico Único", href: "https://leisestaduais.com.br/rn/lei-complementar-n-122-1994-rio-grande-do-norte-dispoe-sobre-o-regime-juridico-unico-dos-servidores-publicos-civis-do-estado-e-das-autarquias-e-fundacoes-publicas-estaduais-institui-o-respectivo-estatuto-e-da-outras-providencias?origin=instituicao" },
              ].map(({ label, href }) => (
                <MenuItem key={href}
                  component={Link}
                  href={href}
                  onClick={handleCloseCarreira}
                  sx={menuItemSx}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>

            <Box sx={{ color: "white", fontSize: 28 }}>
              |
            </Box>

            <Button component="a" 
              href="http://central.rn.gov.br/admin/index.php?class=LoginForm&method="
              target="_blank"
              rel="noopener noreferrer"
              color="inherit" 
            >
              Agendamento gestor
            </Button>

            <Box sx={{ color: "white", fontSize: 28 }}>
              |
            </Box>

            <Button component="a" 
              href="http://www.saude.rn.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              SESAP
            </Button>

          </Box>
        
      </Toolbar>
    </AppBar>
  );
}