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

const fontSize = {
  h1: {
    main: "3.5rem",
    xl: "6rem",
  },
  h2: {
    main: "3rem",
  },
  h3: {
    main: "2.5rem",
  },
  h4: {
    main: "2rem",
  },
  h5: {
    main: "1.5rem",
  },
  h6: {
    main: "1.125rem",
  },

  subtitle1: {
    main: "1.25rem",
  },
  subtitle2: {
    main: "1rem",
  },
  body1: {
    main: "1rem",
  },
  body2: {
    main: "0.875rem",
  },
  button: {
    main: "1rem",
  },
};

// COLOR
const color_dark = {
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

  text: {
    primary: "#FFF",
  },
  background: {
    default: "#110929",
    paper: "#110929",
  },
};

export { breakpoints, inter, fontWeight, fontSize, color_dark };
