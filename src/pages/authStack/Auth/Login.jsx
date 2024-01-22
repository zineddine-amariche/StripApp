import React from "react";
import { Box, useTheme } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#122",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
