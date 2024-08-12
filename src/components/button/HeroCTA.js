import { fontWeight } from "@/theme/theme";
import { Box } from "@mui/material";
import Image from "@/components/base/Image";

const RADIUS = 120;

const HeroCTA = () => {
  return (
    <Box
      className="gradient-light-purple-to-blue"
      sx={{
        position: "relative",
        width: `${RADIUS}px`,
        height: `${RADIUS}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: "white",
        fontWeight: fontWeight.semibold,
        textTransform: "none",
        cursor: "pointer",
      }}
    >
      <Image
        src={"/static/icons/ArrowDiagonalCTA.svg"}
        sx={{
          position: "absolute",
          top: 16,
          right: 4,
        }}
      />
      Discover NFT
    </Box>
  );
};

export default HeroCTA;
