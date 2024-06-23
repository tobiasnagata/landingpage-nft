import { Container as MuiContainer } from "@mui/material";

const Container = ({ children, sx }) => {
  return <MuiContainer sx={{ ...sx, pt: 12 }}>{children}</MuiContainer>;
};

export default Container;
