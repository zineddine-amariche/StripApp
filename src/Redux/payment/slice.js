import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import paymentService from "./servcie";

export const paymentStripe = createAsyncThunk(
  "payment/stripe",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction,plan } = object;
    try {
      let res = await paymentService.api(obj);
      if (res.data.success) {
        console.log("succesful payement");
        onSuccessAction("succesful stripe payement",plan)
      }
    } catch (error) {
      const { onErrorAction } = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message --- ", message);
      onErrorAction(message.message ? message.message : message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const paymentSlice = createSlice({
  name: "auth",
  initialState: {
    stripe: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  reducers: {
    resetPayment: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.stripe = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(paymentStripe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(paymentStripe.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isAuth = true;
        state.isLoading = false;
        state.message = "";
        state.isError = false;
      })
      .addCase(paymentStripe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.result = null;
      });
  },
});

export const { resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
