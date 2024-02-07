import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";
import SideBar from "@/components/SideBar";
import { Box, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"space-evenly"}
        sx={{ backgroundColor: "red" }}
      >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}
