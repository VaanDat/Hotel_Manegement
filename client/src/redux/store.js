import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import roomReducer from "./roomSlice"
export default configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    rooms: roomReducer,
  },
});
