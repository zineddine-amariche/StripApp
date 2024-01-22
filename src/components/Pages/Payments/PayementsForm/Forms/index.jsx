import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Box, Button, Stack, useTheme } from "@mui/material";
import Space from "../../../../Layouts/Space";
import { paymentsHooks } from "../../hooks/paymentsHooks";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { paymentStripe } from "../../../../../Redux/payment/slice";
import "./styles.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#22407b",
      color: "#22407b",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "17px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#11203e" },
      "::placeholder": { color: "#000" },
    },
    invalid: {
      iconColor: "#F00",
      color: "#F00",
    },
  },
};

const FormStripe = ({ plan }) => {
  const theme = useTheme();
  const stripe = useStripe();
  const Elements = useElements();
  const dispatch = useDispatch();
  const { onErrorAction,onSuccessAction } = paymentsHooks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: Elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      let obj = {
        amount: 1000 * plan,
        id,
      };

      let object = {
        obj,
        error,
        onErrorAction,
        onSuccessAction,
        plan
      };

      //ijsll@yopmail.com
      dispatch(paymentStripe(object));
    } else {
      // console.log("error.message", error.message);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  };

  return (
    <Box sx={{}}>
      <Space space={30} />
      <form onSubmit={handleSubmit}>
        <Box className="FormGroup">
          <CardElement options={CARD_OPTIONS} />
        </Box>
        <Space space={30} />

        <Stack
          justifyContent="flex-end"
          maxWidth="100%"
          flexDirection="row"
          pt={3}
        >
          <Button
            variant="contained"
            sx={{
              px: 5,
              py: 1,
              color: theme.palette.primary.dark,
              bgcolor: theme.palette.primary.light,
              width: "100%",

              fontSize: 17,
              "&:hover": {
                color: theme.palette.primary.dark,
                bgcolor: theme.palette.primary.light,
              },
            }}
            onClick={handleSubmit}
          >
            Validate
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FormStripe;
