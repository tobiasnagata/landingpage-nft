import { Button, styled } from "@mui/material";

const MainButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  textTransform: "capitalize",
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  borderRadius: theme.shape.borderRadius * 8,
  backgroundImage: `-webkit-linear-gradient(0deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
}));

export { MainButton };
