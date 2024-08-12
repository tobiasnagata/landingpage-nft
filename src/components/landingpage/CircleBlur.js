import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const CircleBlur = ({ sx }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `radial-gradient(circle, ${theme.palette.custom_purple.main} 20%, ${theme.palette.primary.main} 70%)`,
        opacity: 0.4,
        width: "1000px",
        height: "1000px",
        filter: "blur(100px)",
        zIndex: -1,
        ...sx,
      }}
    />
  );
};

export default CircleBlur;
