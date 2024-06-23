"use client";

import { fontWeight } from "@/theme/theme";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Hidden,
  IconButton,
  Link as MUILink,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const navLink = [{ name: "Nav", href: "/", group: "" }];

  const router = usePathname();

  const isMenuActive = (group) => {
    return (
      navLink.filter((link) => link.group == group && link.href == router)
        .length != 0
    );
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container>
          <Toolbar disableGutters>
            <Hidden mdUp>
              <IconButton onClick={() => setDrawer(!drawer)} color="inherit">
                <Menu />
              </IconButton>
            </Hidden>

            <MUILink
              component={Link}
              variant="h6"
              href="/"
              color="inherit"
              fontWeight={fontWeight.bold}
              sx={{ flexGrow: 1, textDecoration: "none" }}
            >
              Apollo NFT
            </MUILink>

            <Hidden mdDown>
              <Box sx={{ display: "flex", gap: 2 }}>
                {navLink.map((link) => {
                  return (
                    <MUILink
                      component={Link}
                      key={link.href}
                      color="inherit"
                      href={link.href}
                      sx={{
                        textDecoration: "none",
                        ...(isMenuActive(link.group)
                          ? { fontWeight: fontWeight.bold }
                          : {}),
                      }}
                    >
                      {link.name}
                    </MUILink>
                  );
                })}
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      <Hidden mdUp>
        <Drawer open={drawer} onClose={() => setDrawer(false)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 300,
              padding: 6,
            }}
          >
            {navLink.map((link) => {
              return (
                <MUILink
                  component={Link}
                  key={link.href}
                  color="inherit"
                  href={link.href}
                  sx={{
                    textDecoration: "none",
                    ...(isMenuActive(link.group)
                      ? { fontWeight: fontWeight.bold }
                      : {}),
                  }}
                >
                  {link.name}
                </MUILink>
              );
            })}
          </Box>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Header;
