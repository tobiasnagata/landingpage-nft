import { Button, styled } from "@mui/material";

const MainButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export { MainButton };
