import { darkTheme } from "@/theme/mui";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={darkTheme}>{children}</MuiThemeProvider>;
};

export { ThemeProvider };
