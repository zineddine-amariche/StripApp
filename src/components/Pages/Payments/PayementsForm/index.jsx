import { Box, Stack, useTheme } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../../Layouts/Loader";
import Space from "../../../Layouts/Space";
import { PrimaryText } from "../../../utils/typography";
import FormStripe from "./Forms";

const PayementsPage = ({ plan }) => {
  const { result } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.payment);
  const theme = useTheme();
  const PUBLIC_KEY = import.meta.env.VITE_REACT_API_URL;

  const striprTestPromise = loadStripe(PUBLIC_KEY);

  return isLoading ? (
    <Loader />
  ) : (
    <Stack
      p={5}
      bgcolor={theme.palette.primary.dark}
      width={{
        xs: "93%",
        sm: "80%",
        lg: "30%",
        md: "60%",
      }}
      borderRadius={2}
      sx={{ alignItems: isLoading ? "center" : undefined ,position:"absolute" , top:'20%' }}
    >
      <PrimaryText
        fontWeight={"500"}
        fontSize={"25px"}
        text={`Welcome ${result?.data?.fullName}`}
        color={theme.palette.primary.light}
        cursor
      />
      <Space space={10} />
      <PrimaryText
        fontWeight={"400"}
        fontSize={"16px"}
        text={`please enter your card informations`}
        color={theme.palette.primary.contrastText}
        cursor
      />
      <Elements stripe={striprTestPromise}>
        <FormStripe plan={plan} />
      </Elements>
    </Stack>
  );
};

export default PayementsPage;
