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
            bg-primary text-white
            mt-0
            
            h-[8.5rem] px-16                  // Base, height: 136px, padding: 64px
            hd:h-[9.5rem] hd:px-16            // HD, height: 152px, padding: 64px
            qhd:h-[12.5rem] qhd:px-20         // QHD, height: 200px, padding: 80px
            4k:h-[19rem] 4k:px-32             // 4K, height: 304px, padding: 128px
          "
        >
            {/* Texto do Copyright */}
            <p 
              className="
                font-medium text-text-main
                
                text-lg px-0                 // Base, 18px 
                hd:text-2xl hd:px-0          // HD, 24px 
                qhd:text-3xl qhd:px-0        // QHD, 30px 
                4k:text-5xl 4k:px-0          // 4K, 48px 
              "
            >
                Tecnologia da Informação | Copyright © 2025
            </p>

            {/* Container dos Links */}
            <div 
              className="
                flex 
                
                gap-6 px-0                    // Base, 24px
                hd:gap-[4.5rem] hd:px-0       // HD, 72px 
                qhd:gap-[6.5rem] qhd:px-0     // QHD, 104px
                4k:gap-36 4k:px-0             // 4K, 144px
              "
            >
                {links.map((link, index) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="
                          group flex items-center no-underline 
                          text-white font-medium 
                          hover:text-text-muted transition-colors duration-100
                          
                          text-lg gap-3               // Base, font: 18px, gap: 12px 
                          hd:text-2xl hd:gap-3        // HD, font: 24px, gap: 12px 
                          qhd:text-3xl qhd:gap-5      // QHD, font: 30px, gap: 20px
                          4k:text-5xl 4k:gap-7        // 4K, font: 48px, gap: 28px
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
                              
                              w-6 h-5                  // Base: 24x20px 
                              hd:w-6 hd:h-5            // HD: 24x20px
                              qhd:w-8 qhd:h-7          // QHD: 32x28px 
                              4k:w-14 4k:h-12          // 4K: 56x48px 
                            "
                        />
                        <span>{link.label}</span>
                    </a>
                ))}
            </div>
        </footer>
    );
}
