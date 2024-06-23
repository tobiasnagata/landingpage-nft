import "./global.css";
import { ThemeProvider } from "@/contexts/theme";

// static metadata
export const metadata = {
  title: {
    default: "Apollo NFT",
  },
  description: "The largest NFT Marketplace by Apollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
