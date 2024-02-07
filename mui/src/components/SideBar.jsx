import { Box } from "@mui/material";

export default function SideBar() {
  return (
    <Box
      flex={1}
      p={3}
      sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "yellow" }}
    >
      Side Bars
    </Box>
  );
}
