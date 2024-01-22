import React, { useState } from "react";

import { Box, useTheme } from "@mui/material";
import ChoosePlan from "./ChoosePlan";
import PayementsForm from "./PayementsForm";

const PermissionDenied = () => {
  const theme = useTheme();

  const [plan, setplan] = useState(null);

  const choosePlan = (type) => {
    setplan(type);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#122",
        justifyContent: plan ? "center" : undefined,
        height: {
          lg: "100%",
          md: "100%",
          xs: plan ? "100%" : undefined,
          sm: plan ? "100%" : undefined,
        },
      }}
    >
      {plan ? (
        <PayementsForm plan={plan} />
      ) : (
        <ChoosePlan choosePlan={choosePlan} />
      )}
    </Box>
  );
};

export default PermissionDenied;
