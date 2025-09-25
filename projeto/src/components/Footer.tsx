"use client";

import { Box, Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const footerSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5AA7CE",
    paddingX: "32px",
    width: "100%",
    height: "155px",
};

const linkSx = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    fontSize: 24,
    textTransform: "none",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    "&:hover": {
    color: "#495057", // secondary text
    },
};

const links = [
    { href: "/emailramais", label: "E-mails e ramais", iconDark: "/ramal_dark.png", iconWhite: "/ramal_light.png" },
    { href: "/regionais", label: "Regionais", iconDark: "/regional_dark.png", iconWhite: "/regional_light.png" },
    { href: "/calendario", label: "Calendário", iconDark: "/calendario_dark.png", iconWhite: "/calendario_light.png" },
    { href: "https://www.sead.rn.gov.br/postagem/assedio-nao/", label: "Assédio não!", iconDark: "/assedio_dark.png", iconWhite: "/assedio_light.png" },
];

export default function CustomFooter() {
    // Estados locais para controlar o hover de cada link
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
    <Box component="footer" sx={footerSx}>
        {/* Lado esquerdo */}
        <Typography sx={{ fontFamily: "'Montserrat', sans-serif", color: "#333333", fontSize: 24, fontWeight: 500, paddingX: "32px" }}>
        Tecnologia da Informação | Copyright © 2025
        </Typography>

        {/* Lado direito com links e ícones */}
        <Box sx={{ display: "flex", gap: "81px", paddingX: "32px" }}>
        {links.map((link, index) => (
            <MuiLink
            key={link.href}
            href={link.href}
            sx={linkSx}
            underline="none"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            >
            <Image
                src={hoveredIndex === index ? link.iconWhite : link.iconDark}
                alt={link.label}
                width={20}
                height={17}
                style={{
                    transition: "all 0.3s ease",
                }}
            />
            <span>{link.label}</span>
            </MuiLink>
        ))}
        </Box>
    </Box>
    );
}
