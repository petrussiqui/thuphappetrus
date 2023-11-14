import { Box, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box component="img" src="/images/common/loading.svg" />
    </Stack>
  );
}
