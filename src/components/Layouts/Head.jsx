import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { ChevronLeft, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

const Head = ({ title, retur, button, onClick, mode }) => {
  console.log("mode", mode);
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "25px",
        color: theme.palette.primary.light,
        fontSize: "22px",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
        justifyContent: "space-between",
        flexDirection: "row",
        "&:hover": {
          textDecoration: retur ? "underline" : "none",
        },
      }}
    >
      <Box>
        {retur ? (
          <ChevronLeft sx={{ color: theme.palette.primary.light }} />
        ) : null}
        {title}
      </Box>
      <Box>
        {button && mode == 1 ? (
          <IconButton
            onClick={() => {
              onClick(2);
            }}
            sx={{
              color: theme.palette.primary.dark,
              bgcolor: theme.palette.primary.light,
              "&:hover": {
                color: theme.palette.primary.dark,
                bgcolor: theme.palette.primary.light,
              },
            }}
          >
            <AddCircle />
          </IconButton>
        ) : null}

        {button && mode == 2 ? (
          <IconButton
            onClick={() => {
              onClick(1);
            }}
            sx={{
              color: theme.palette.primary.dark,
              bgcolor: theme.palette.error.light,
              "&:hover": {
                color: theme.palette.primary.dark,
                bgcolor: theme.palette.error.light,
              },
            }}
          >
            <Close />
          </IconButton>
        ) : null}
      </Box>
    </Box>
  );
};

export default Head;
