import { Container as MuiContainer } from "@mui/material";

const Container = ({ children, sx }) => {
  return (
    <MuiContainer maxWidth="xl" sx={{ ...sx }}>
      {children}
    </MuiContainer>
  );
};

export default Container;
