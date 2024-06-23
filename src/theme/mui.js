"use client";

// https://mui.com/material-ui/customization/default-theme/

import { createTheme, responsiveFontSizes } from "@mui/material";
import { breakpoints, color_dark, fontWeight, inter, fontSize } from "./theme";

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

const darkTheme = responsiveFontSizes(
  createTheme({
    ...default_theme,
    palette: {
      mode: "dark",
      ...color_dark,
    },
    typography: {
      fontFamily: inter.style.fontFamily,

      h1: {
        ...header_font_family,
        fontSize: fontSize.h1.main,

        // ----- MANUAL CUSTOM FONT SIZE -----
        // [default_theme.breakpoints.up("xl")]: {
        //   fontSize: fontSize.h1.xl,
        // },
      },
      h2: {
        ...header_font_family,
        fontSize: fontSize.h2.main,
      },
      h3: {
        ...header_font_family,
        fontSize: fontSize.h3.main,
      },
      h4: {
        ...header_font_family,
        fontSize: fontSize.h4.main,
      },
      h5: {
        ...header_font_family,
        fontSize: fontSize.h5.main,
      },
      h6: {
        ...header_font_family,
        fontSize: fontSize.h6.main,
      },

      subtitle1: {
        fontSize: fontSize.subtitle1.main,
      },
      subtitle2: {
        fontSize: fontSize.subtitle2.main,
      },
      body1: {
        fontSize: fontSize.body1.main,
      },
      body2: {
        fontSize: fontSize.body2.main,
      },
      button: {
        fontSize: fontSize.button.main,
      },
    },
  })
);

export { darkTheme };
