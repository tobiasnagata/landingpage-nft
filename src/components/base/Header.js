"use client";

import { fontWeight } from "@/theme/theme";
import {
  AppBar,
  Box,
  Hidden,
  Link as MUILink,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MainButton } from "../button/MainButton";
import { motion } from "framer-motion";
import { MenuDrawer } from "../button/MenuDrawer";
import Link from "next/link";
import Container from "./Container";
import useVariantHeader from "@/styles/animation/header";

const Header = () => {
  const navLink = [
    { name: "Drop", href: "#drop", group: "" },
    { name: "Marketplace", href: "#marketplace", group: "" },
    { name: "Creator", href: "#creator", group: "" },
    { name: "Community", href: "#community", group: "" },
  ];

  const [drawer, setDrawer] = useState(false);
  const router = usePathname();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const theme = useTheme();
  const variant = useVariantHeader();

  const isMenuActive = (group) => {
    return (
      navLink.filter((link) => link.group == group && link.href == router)
        .length != 0
    );
  };

  return (
    <>
      {/* HEADER DESKTOP */}
      <Hidden mdDown>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundImage: "none",
            backgroundColor: "transparent",
          }}
        >
          <Container>
            <Toolbar disableGutters sx={{ height: "80px" }}>
              <motion.div
                variants={variant.v_bg_scroll_down}
                animate={scrollTrigger ? "visible" : "hidden"}
                initial={false}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: theme.shape.borderRadius * 8,
                }}
              >
                <MUILink
                  component={Link}
                  variant="h4"
                  href="/"
                  color="inherit"
                  fontWeight={fontWeight.bold}
                  sx={{ textDecoration: "none" }}
                >
                  <Typography
                    component={"span"}
                    variant="inherit"
                    className="gradient-text gradient-light-purple-to-dark-purple"
                  >
                    Apollo
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="inherit"
                    color="secondary"
                  >
                    NFT
                  </Typography>
                </MUILink>

                <Box sx={{ display: "flex", gap: 5 }}>
                  {navLink.map((link) => {
                    return (
                      <MUILink
                        component={Link}
                        key={link.href}
                        color="inherit"
                        href={link.href}
                        sx={{
                          textDecoration: "none",
                          ...(isMenuActive(link.group) ? {} : {}),
                        }}
                      >
                        {link.name}
                      </MUILink>
                    );
                  })}
                </Box>

                <MainButton>Contact Us</MainButton>
              </motion.div>
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>

      {/* MENU DRAWER MOBILE */}
      <Hidden mdUp>
        <motion.div
          animate={drawer ? "visible" : "hidden"}
          initial={false}
          style={{ position: "fixed", top: 0, right: 0, zIndex: 9999 }}
        >
          {/* Background */}
          <motion.div
            variants={variant.v_menu_drawer}
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          />

          {/* Button drawer */}
          <MenuDrawer
            handler={() => setDrawer(!drawer)}
            sx={{ position: "absolute", top: 23, right: 22, minWidth: 0 }}
          />

          {/* Navigation */}
          <motion.div
            variants={variant.v_stagger_menu}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              gap: theme.spacing(4),
            }}
          >
            {navLink.map((link) => {
              return (
                <motion.div variants={variant.v_menu_item} key={link.href}>
                  <MUILink
                    component={Link}
                    variant="h3"
                    color="inherit"
                    href={link.href}
                    sx={{
                      textDecoration: "none",
                      fontWeight: fontWeight.bold,
                      ...(isMenuActive(link.group) ? {} : {}),
                    }}
                  >
                    {link.name}
                  </MUILink>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Hidden>
    </>
  );
};

export default Header;
