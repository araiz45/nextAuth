"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography, styled } from "@mui/material";

export default function Home() {
  const BlueButton = styled(Button)(({ theme }) => ({
    margin: 5,
    background: theme.palette.otherColor.light,
    color: "green",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  return (
    <>
      <Button variant="contained" color="otherColor">
        Text
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<SettingsIcon />}
        endIcon={<SettingsIcon />}
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Typography variant="h6" component="h2">
        h1. Heading
      </Typography>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <BlueButton>Hello Pakistan</BlueButton>
      <BlueButton>My name is araiz</BlueButton>
    </>
  );
}
