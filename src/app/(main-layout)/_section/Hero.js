"use client";

import Link from "next/link";
import Container from "@/components/base/Container";
import Image from "@/components/base/Image";
import HeroCTA from "@/components/button/HeroCTA";
import CircleBlur from "@/components/landingpage/CircleBlur";
import { MainButton } from "@/components/button/MainButton";
import { fontStyle, fontWeight } from "@/theme/theme";
import { Box, Grid, Hidden, Link as MUILink, Typography } from "@mui/material";

const Hero = () => {
  const info_nft = [
    {
      name: "Artwork",
      value: "25.1k",
    },
    {
      name: "Artist",
      value: "15.6k",
    },
    {
      name: "Aucition",
      value: "10.2",
    },
  ];

  const sponsor = [
    "/static/images/sponsor/Company logo.png",
    "/static/images/sponsor/Company logo-1.png",
    "/static/images/sponsor/Company logo-2.png",
    "/static/images/sponsor/Company logo-3.png",
    "/static/images/sponsor/Company logo-4.png",
  ];

  return (
    <>
      {/* Background */}
      <Hidden mdDown>
        <CircleBlur
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(-30%, -20%)",
          }}
        />
      </Hidden>

      {/* CONTENT */}
      <Container sx={{ pt: 14 }}>
        {/* Logo */}
        <Hidden mdUp>
          <MUILink
            component={Link}
            variant="h4"
            href="/"
            color="inherit"
            fontWeight={fontWeight.bold}
            sx={{ textDecoration: "none", position: "absolute", top: 25 }}
          >
            <Typography
              component={"span"}
              variant="inherit"
              className="gradient-text gradient-light-purple-to-dark-purple"
            >
              Apollo
            </Typography>
            <Typography component={"span"} variant="inherit" color="secondary">
              NFT
            </Typography>
          </MUILink>
        </Hidden>

        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            {/* Title */}
            <Typography variant="h1" fontWeight={"bold"} className="text-h1">
              Create Your
              <br /> Own{" "}
              <Typography
                variant="inherit"
                component={"span"}
                className="gradient-text gradient-light-purple-to-blue"
                sx={{ whiteSpace: "nowrap" }}
              >
                NFT Dream
              </Typography>
              <br />
              Gallery
              <Image
                src={"/static/icons/StarGradient.svg"}
                sx={{
                  display: { xs: "none", md: "inline" },
                  width: {
                    md: fontStyle.h1.md.fontSize,
                    lg: fontStyle.h1.lg.fontSize,
                    xl: fontStyle.h1.xl.fontSize,
                  },
                  transform: "translateY(22px)",
                }}
              />
            </Typography>

            {/* Description */}
            <Box sx={{ display: "flex", mt: 4 }}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <HeroCTA />
              </Box>

              <Typography
                variant="subtitle1"
                sx={{ maxWidth: { xs: 600, md: 400 }, ml: { md: 4 } }}
              >
                The Larges NFT Marketplace. Automatic and truly unique digital
                creation. Signed and issued by the creator, made possible by
                blockchain technologi
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <MainButton
                sx={{ backgroundImage: "none", width: "100%", mt: 4 }}
              >
                Discover NFT
              </MainButton>
            </Box>

            {/* Info - Desktop */}
            <Hidden mdDown>
              <Box sx={{ display: "flex", gap: 4, mt: 6 }}>
                {info_nft.map((data) => {
                  return (
                    <Box key={data.name}>
                      <Typography sx={{ mb: 1 }}>{data.name}</Typography>
                      <Typography component={"p"} variant="h4">
                        {data.value}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Hidden>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "end" },
              alignItems: "center",
            }}
          >
            <Image
              src={"/static/images/hero_image.png"}
              alt="Hero Image"
              sx={{
                width: "100%",
                maxWidth: "680px",
                pl: { md: 4 },
                my: 8,
              }}
            />

            {/* Info - Mobile */}
            <Hidden mdUp>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                {info_nft.map((data) => {
                  return (
                    <Box key={data.name}>
                      <Typography sx={{ mb: 1 }}>{data.name}</Typography>
                      <Typography component={"p"} variant="h4">
                        {data.value}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Hidden>
          </Grid>

          {/* SPONSOR */}
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              my: { xs: 8, md: 0 },
              mb: { md: 8 },
            }}
          >
            {sponsor.map((data, idx) => {
              const isFullwidth =
                sponsor.length % 2 == 1 && idx == sponsor.length - 1;
              return (
                <Box
                  key={idx}
                  sx={{
                    display: "inline-block",
                    width: { xs: isFullwidth ? "100%" : "50%", md: "auto" },
                    textAlign: "center",
                    mb: { xs: 2, md: 0 },
                  }}
                >
                  <Image src={data} />
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hero;
