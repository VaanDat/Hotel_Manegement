import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    refreshToken: {
      token: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    refreshTokenStart: (state) => {
      state.refreshToken.isFetching = true;
    },
    refreshTokenSuccess: (state, action) => {
      state.refreshToken.isFetching = false;
      state.refreshToken.token = action.payload;
      state.refreshToken.error = false;
    },
    refreshTokenFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  refreshTokenStart,
  refreshTokenSuccess,
  refreshTokenFailed,
} = authSlice.actions;

export default authSlice.reducer;
