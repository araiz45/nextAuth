"use client";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { Mail, Notifications, Search } from "@mui/icons-material";
import { theme } from "@/theme";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px ",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <XIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Araix
        </Typography>
        <SearchBar>
          <InputBase placeholder="search" />
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={425} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random/1920x1080/?man"
            sx={{ width: 30, height: 30 }}
          />
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
}
