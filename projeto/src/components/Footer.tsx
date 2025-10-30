/*"use client";

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

*/

"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
    { href: "http://intranet.unicat/magnetic/ramais.html", label: "E-mails e ramais", iconDark: "/icon/footer/ramal_dark.png", iconWhite: "/icon/footer/ramal_light.png" },
    { href: "http://10.19.12.251/regionais/", label: "Regionais", iconDark: "/icon/footer/regional_dark.png", iconWhite: "/icon/footer/regional_light.png" },
    { href: "http://10.19.12.251/calendario-niver/", label: "Calendário", iconDark: "/icon/footer/calendario_dark.png", iconWhite: "/icon/footer/calendario_light.png" },
    { href: "https://www.sead.rn.gov.br/postagem/assedio-nao/", label: "Assédio não!", iconDark: "/icon/footer/assedio_dark.png", iconWhite: "/icon/footer/assedio_light.png" },
];

export default function CustomFooter() {
    
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <footer 
          className="
            flex items-center justify-between w-full 
            bg-footer-background text-white
            mt-0
            
            h-[136px] px-16                  // Base, padding 64px
            hd:h-[152px] hd:px-16           // HD, padding 64px
            qhd:h-[200px] qhd:px-20         // QHD, padding 80px
            4k:h-[304px] 4k:px-30           // 4K, padding 120px
          "
        >
            {/* Texto do Copyright */}
            <p 
              className="
                font-medium text-dark-text 
                
                text-lg px-0                 // Base: 18px 
                hd:text-2xl hd:px-0         // HD: 24px 
                qhd:text-3xl qhd:px-0      // QHD: 30px 
                4k:text-5xl 4k:px-0        // 4K: 48px 
              "
            >
                Tecnologia da Informação | Copyright © 2025
            </p>

            {/* Container dos Links */}
            <div 
              className="
                flex 
                
                gap-[24px] px-0              // Base 
                hd:gap-[72px] hd:px-0       // HD 
                qhd:gap-[104px] qhd:px-0    // QHD 
                4k:gap-[144px] 4k:px-0      // 4K 
              "
            >
                {links.map((link, index) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="
                          group flex items-center no-underline 
                          text-white font-medium 
                          hover:text-foreground transition-colors duration-100
                          
                          text-lg gap-3              // Base: 18px font, 12px gap 
                          hd:text-2xl hd:gap-3         // HD: 24px font, 12px gap 
                          qhd:text-3xl qhd:gap-5     // QHD: 30px font, 20px gap 
                          4k:text-5xl 4k:gap-7         // 4K: 48px font, 28px gap 
                        "
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={hoveredIndex === index ? link.iconWhite : link.iconDark}
                            alt={link.label}
                            width={24} 
                            height={20}
                            className="
                              transition-all duration-100
                              
                              w-6 h-5               // Base: 24x20px 
                              hd:w-6 hd:h-5         // HD: 24x20px
                              qhd:w-8 qhd:h-[28px]       // QHD: 32x28px 
                              4k:w-14 4k:h-12       // 4K: 56x48px 
                            "
                        />
                        <span>{link.label}</span>
                    </a>
                ))}
            </div>
        </footer>
    );
}
