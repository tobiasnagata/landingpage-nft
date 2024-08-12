import { Inter } from "next/font/google";

// DISPLAY
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// TYPOGRAPHY
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const fontStyle = {
  h1: {
    xs: {
      fontSize: "2.6rem",
      lineHeight: "0.95",
    },
    sm: {
      fontSize: "4rem",
      lineHeight: "0.95",
    },
    md: {
      fontSize: "3.3rem",
      lineHeight: "0.95",
    },
    lg: {
      fontSize: "4.55rem",
      lineHeight: "0.95",
    },
    xl: {
      fontSize: "5.875rem",
      lineHeight: "0.95",
    },
  },
  h2: {
    xs: {
      fontSize: "2.4rem",
      lineHeight: "1.1",
    },
    sm: {
      fontSize: "2.8rem",
      lineHeight: "1.1",
    },
    md: {
      fontSize: "3.4rem",
      lineHeight: "1.1",
    },
    lg: {
      fontSize: "3.8rem",
      lineHeight: "1.1",
    },
    xl: {
      fontSize: "4.2rem",
      lineHeight: "1.1",
    },
  },
  h3: {
    xs: {
      fontSize: "2rem",
      lineHeight: "1.1",
    },
    sm: {
      fontSize: "2.25rem",
      lineHeight: "1.1",
    },
    md: {
      fontSize: "2.625rem",
      lineHeight: "1.1",
    },
    lg: {
      fontSize: "2.75rem",
      lineHeight: "1.1",
    },
    xl: {
      fontSize: "3rem",
      lineHeight: "1.1",
    },
  },
  h4: {
    xs: {
      fontSize: "2rem",
      lineHeight: "1.1",
    },
    sm: {
      fontSize: "2rem",
      lineHeight: "1.1",
    },
    md: {
      fontSize: "2rem",
      lineHeight: "1.1",
    },
    lg: {
      fontSize: "2rem",
      lineHeight: "1.1",
    },
    xl: {
      fontSize: "2rem",
      lineHeight: "1.1",
    },
  },
  h5: {
    xs: {
      fontSize: "1.5rem",
      lineHeight: "1.1",
    },
    sm: {
      fontSize: "1.5rem",
      lineHeight: "1.1",
    },
    md: {
      fontSize: "1.5rem",
      lineHeight: "1.1",
    },
    lg: {
      fontSize: "1.5rem",
      lineHeight: "1.1",
    },
    xl: {
      fontSize: "1.5rem",
      lineHeight: "1.1",
    },
  },
  h6: {
    xs: {
      fontSize: "1.125rem",
      lineHeight: "1.1",
    },
    sm: {
      fontSize: "1.125rem",
      lineHeight: "1.1",
    },
    md: {
      fontSize: "1.125rem",
      lineHeight: "1.1",
    },
    lg: {
      fontSize: "1.125rem",
      lineHeight: "1.1",
    },
    xl: {
      fontSize: "1.125rem",
      lineHeight: "1.1",
    },
  },
  subtitle1: {
    xs: {
      fontSize: "1rem",
      lineHeight: "1.625",
    },
    sm: {
      fontSize: "1rem",
      lineHeight: "1.625",
    },
    md: {
      fontSize: "1rem",
      lineHeight: "1.625",
    },
    lg: {
      fontSize: "1rem",
      lineHeight: "1.625",
    },
    xl: {
      fontSize: "1rem",
      lineHeight: "1.625",
    },
  },
  subtitle2: {
    xs: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    md: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    lg: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    xl: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
  },
  body1: {
    xs: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    sm: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    md: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    lg: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    xl: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
  body2: {
    xs: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    md: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    lg: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    xl: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
  },
  button: {
    xs: {
      fontSize: "1rem",
      lineHeight: "1.75",
    },
    sm: {
      fontSize: "1rem",
      lineHeight: "1.75",
    },
    md: {
      fontSize: "1rem",
      lineHeight: "1.75",
    },
    lg: {
      fontSize: "1rem",
      lineHeight: "1.75",
    },
    xl: {
      fontSize: "1rem",
      lineHeight: "1.75",
    },
  },
};

// COLOR
const colorDark = {
  common: {
    black: "#000",
    white: "#FFF",
  },
  primary: {
    main: "#110929",
    light: "#8D1CFE",
  },
  secondary: {
    main: "#1C51FE",
  },

  custom_gray: {
    main: "#39324D",
    "light-1": "#999999",
    "light-2": "#98A2B3",
  },
  custom_purple: {
    main: "#D622DA",
  },

  text: {
    primary: "#FFF",
  },
  background: {
    default: "#110929",
    paper: "#110929",
  },
};

export { breakpoints, inter, fontWeight, fontStyle, colorDark };
