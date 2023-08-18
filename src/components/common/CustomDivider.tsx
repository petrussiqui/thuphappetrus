import { Box } from "@mui/material";

export const DividerBox = ({
  width = 40,
  height = 2,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Box
      sx={{
        borderRadius: "4px",
        width: width,
        height: height,
        background: "var(--primary)",
      }}
    />
  );
};
