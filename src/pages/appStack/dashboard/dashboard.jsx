import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Head from "../../../components/Layouts/Head";
import { Formik } from "formik";
import ElearningForm from "./components/ElearningForm/ElearningForm";
import { ElearningList } from "./components/ElearningList/ElearningList";

const Dashboard = () => {
  const theme = useTheme();

  const [mode, setmode] = useState(1);

  const handleMode = (mode) => {
    setmode(mode);
  };

  const title =
    mode == 1 ? "Learning resource" : "Enter your learning resource";
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: theme.palette.neutral.main,
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Head title={title} button onClick={handleMode} mode={mode} />
      {mode == 1 ? (
        <ElearningList />
      ) : (
        <ElearningForm handleMode={handleMode} />
      )}
    </Box>
  );
};

export default Dashboard;
