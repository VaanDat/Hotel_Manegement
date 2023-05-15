import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
    addUser: {
      user: null,
      isFetching: false,
      error: true,
      success: false,
    },
    deleteUser: {
      isFetching: false,
      error: false,
    },
    msg: "",
  },
  reducers: {
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
      state.users.error = false;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    addUserStart: (state) => {
      state.addUser.isFetching = true;
    },
    addUserSuccess: (state, action) => {
      state.addUser.isFetching = false;
      state.addUser.user = action.payload;
      state.addUser.error = false;
      state.addUser.success = true;
    },
    addUserFailed: (state) => {
      state.addUser.isFetching = false;
      state.addUser.error = true;
    },
    deleteUserStart: (state) => {
      state.deleteUser.isFetching = true;
    },
    deleteUserSuccess: (state, action) => {
      state.deleteUser.isFetching = false;
      state.deleteUser.error = false;
      state.msg = action.payload;
    },
    deleteUserFailed: (state, action) => {
      state.deleteUser.isFetching = false;
      state.deleteUser.error = true;
      state.msg = action.payload;
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
  addUserStart,
  addUserSuccess,
  addUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
} = userSlice.actions;

export default userSlice.reducer;
