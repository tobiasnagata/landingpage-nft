import { useTheme } from "@mui/material";

const useVariantHeader = () => {
  const theme = useTheme();

  const v_bg_scroll_down = {
    visible: {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      background: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(8px)",
    },
    hidden: {
      padding: 0,
      background: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
    },
  };

  const v_menu_drawer = {
    visible: {
      width: "100vw",
      height: "100vh",
      top: 0,
      right: 0,
      borderRadius: 0,
      background: `-webkit-linear-gradient(225deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
    },
    hidden: {
      width: "40px",
      height: "40px",
      top: 20,
      right: 20,
      borderRadius: 10,
      background: theme.palette.secondary.main,
      transition: {
        delay: 0.5,
      },
    },
  };

  const v_stagger_menu = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const v_menu_item = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return { v_bg_scroll_down, v_menu_drawer, v_stagger_menu, v_menu_item };
};

export default useVariantHeader;
