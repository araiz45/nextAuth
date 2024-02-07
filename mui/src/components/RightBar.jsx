import { Box } from "@mui/material";

export default function RightBar() {
  return (
    <Box
      sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "green" }}
      flex={2}
      p={3}
    >
      Side Bars
    </Box>
  );
}
