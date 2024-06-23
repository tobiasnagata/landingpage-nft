"use client";

import Lottie from "react-lottie-player";
import LottieAnimation from "/public/static/json/lottie-animation.json";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Lottie
          loop
          animationData={LottieAnimation}
          play
          style={{ width: 150, height: 150 }}
        />
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          404 | Not Found
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
