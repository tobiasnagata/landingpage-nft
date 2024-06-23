import Header from "@/components/base/Header";
import { CssBaseline } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
}
