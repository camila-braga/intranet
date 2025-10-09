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
    marginTop: "12px"
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
    { href: "http://intranet.unicat/magnetic/ramais.html", label: "E-mails e ramais", iconDark: "/icon/footer/ramal_dark.png", iconWhite: "/icon/footer/ramal_light.png" },
    { href: "http://10.19.12.251/regionais/", label: "Regionais", iconDark: "/icon/footer/regional_dark.png", iconWhite: "/icon/footer/regional_light.png" },
    { href: "http://10.19.12.251/calendario-niver/", label: "Calendário", iconDark: "/icon/footer/calendario_dark.png", iconWhite: "/icon/footer/calendario_light.png" },
    { href: "https://www.sead.rn.gov.br/postagem/assedio-nao/", label: "Assédio não!", iconDark: "/icon/footer/assedio_dark.png", iconWhite: "/icon/footer/assedio_light.png" },
];

export default function CustomFooter() {
    
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Box component="footer" sx={footerSx}>
            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", color: "#333333", fontSize: 24, fontWeight: 500, paddingX: "32px" }}>
                Tecnologia da Informação | Copyright © 2025
            </Typography>

            <Box sx={{ display: "flex", gap: "81px", paddingX: "32px" }}>
                {links.map((link, index) => (
                    <MuiLink
                        key={link.href}
                        href={link.href}
                        sx={linkSx}
                        underline="none"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={hoveredIndex === index ? link.iconWhite : link.iconDark}
                            alt={link.label}
                            width={22}
                            height={22}
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
