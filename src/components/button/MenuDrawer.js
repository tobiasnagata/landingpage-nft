import { Button } from "@mui/material";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 100%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuDrawer = ({ handler, sx }) => {
  return (
    <Button onClick={handler} sx={sx} disableRipple>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <Path
          variants={{
            hidden: { d: "M 2 2.5 L 20 2.5" },
            visible: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            hidden: { d: "M 2 16.346 L 20 16.346" },
            visible: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </Button>
  );
};
