import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "./serviceLogin";
import registerService from "./serviceRegister";
import serviceUpdateUserInfo from "./serviceUpdateUserInfo";

export const login = createAsyncThunk(
  "auth/login",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction } = object;
    try {
      let res = await loginService.api(obj);
      // console.log("res.data", res.status);
      if (res.status == 200) {
        onSuccessAction("Connection completed successfully");
        return res.data;
      } else {
        onErrorAction("Somthing went wrong.");
        return res.data;
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
export const register = createAsyncThunk(
  "register/sigin",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction } = object;
    try {
      let res = await registerService.api(obj);
      if (res.status == 201) {
        onSuccessAction("Account created successfully");
        return res.data;
      } else {
        onErrorAction("Somthing went wrong.");
        return res;
      }
    } catch (error) {
      const { onErrorAction } = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      onErrorAction(message.message ? message.message : message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateUserInfo = createAsyncThunk(
  "update/user",
  async (object, thunkAPI) => {
    const { data, onSuccessUpdate } = object;
    try {
      let res = await serviceUpdateUserInfo.api(data);
      console.log("res---update", res);

      if (res.status == 200) {
        onSuccessUpdate();
        return res.data;
      } else {
        onErrorAction("Somthing went wrong.");
        return res.data;
      }
    } catch (error) {
      const { onErrorAction } = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      onErrorAction(message.message ? message.message : message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    result: null,
    isError: false,
    isLoading: false,
    isAuth: false,
    message: "",
    loader: false,
    update: null,
  },
  reducers: {
    Logout: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = null;
      state.isAuth = false;
    },

    getPermission: (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
    },

    setUserInfoOnLogin: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isAuth = true;
        state.isLoading = false;
        state.message = "";
        state.isError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.result = null;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isAuth = true;
        state.message = "";
        state.isError = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.result = null;
      })

      .addCase(updateUserInfo.pending, (state) => {
        state.loader = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.update = true;
        state.loader = false;
        state.message = "";
        state.result = action.payload;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loader = false;
        state.isError = true;
        state.message = action.payload;
        state.update = null;
      });
  },
});

export const {
  resetLogin,
  Logout,
  getPermission,
  payment,
  setUserInfoOnLogin,
} = loginSlice.actions;
export default loginSlice.reducer;
