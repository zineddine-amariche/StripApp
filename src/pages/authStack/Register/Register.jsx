import React from "react";
import { Box, useTheme } from "@mui/material";
import RegisterForm from "./RegisterForm";

const Register = () => {

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#122"
      }}
    >
      <RegisterForm />
    </Box>
  );
};

export default Register;
