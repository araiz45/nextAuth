"use client";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { Mail, Notifications, Search } from "@mui/icons-material";
import { theme } from "@/theme";
import { useState } from "react";
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
  display: "none",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: ".5rem",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
            onClick={(e) => setIsOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random/1920x1080/?man"
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setIsOpen(true)}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolBar>
      {/* mui menu  */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose={(e) => setIsOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
