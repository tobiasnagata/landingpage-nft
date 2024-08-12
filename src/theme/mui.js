"use client";

// https://mui.com/material-ui/customization/default-theme/

import { createTheme } from "@mui/material";
import { breakpoints, colorDark, fontStyle, fontWeight, inter } from "./theme";

const header_font_family = {
  fontFamily: inter.style.fontFamily,
  fontWeight: fontWeight.semibold,
};

const default_theme = createTheme({
  breakpoints: {
    values: {
      ...breakpoints,
    },
  },
});

const font_types = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "button",
];

const createFontStyles = (ftype) => {
  const isHeader = ftype[0] === "h";
  return {
    ...(isHeader ? header_font_family : {}),
    fontSize: fontStyle[ftype].xs.fontSize,
    lineHeight: fontStyle[ftype].xs.lineHeight,

    [default_theme.breakpoints.up("sm")]: {
      fontSize: fontStyle[ftype].sm.fontSize,
      lineHeight: fontStyle[ftype].sm.lineHeight,
    },

    [default_theme.breakpoints.up("md")]: {
      fontSize: fontStyle[ftype].md.fontSize,
      lineHeight: fontStyle[ftype].md.lineHeight,
    },

    [default_theme.breakpoints.up("lg")]: {
      fontSize: fontStyle[ftype].lg.fontSize,
      lineHeight: fontStyle[ftype].lg.lineHeight,
    },

    [default_theme.breakpoints.up("xl")]: {
      fontSize: fontStyle[ftype].xl.fontSize,
      lineHeight: fontStyle[ftype].xl.lineHeight,
    },
  };
};
const custom_font = font_types.reduce((acc, ftype) => {
  acc[ftype] = createFontStyles(ftype);
  return acc;
}, {});

const darkTheme = createTheme({
  ...default_theme,
  palette: {
    mode: "dark",
    ...colorDark,
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    ...custom_font,
  },
});

export { darkTheme };
