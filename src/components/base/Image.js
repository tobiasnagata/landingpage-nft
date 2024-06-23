import { Box } from "@mui/material";

const Image = ({
  src,
  alt,
  sx,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "low",
}) => {
  return (
    <Box
      component={"img"}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sx={sx}
    />
  );
};

export default Image;
