import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import roomReducer from "./roomSlice";
import customerReducer from "./customerSlice";
import bookingReducer from "./bookingSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    rooms: roomReducer,
    customers: customerReducer,
    bookings: bookingReducer,
  },
});
