import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: {
      allBookings: null,
      isFetching: false,
      error: false,
    },
    addBooking: {
      booking: null,
      isFetching: false,
      error: true,
      success: false,
    },
  },
  reducers: {
    getBookingsStart: (state) => {
      state.bookings.isFetching = true;
    },
    getBookingsSuccess: (state, action) => {
      state.bookings.isFetching = false;
      state.bookings.allBookings = action.payload;
      state.bookings.error = false;
    },
    getBookingsFailed: (state) => {
      state.bookings.isFetching = false;
      state.bookings.error = true;
    },
    addBookingStart: (state) => {
      state.addBooking.isFetching = true;
    },
    addBookingSuccess: (state, action) => {
      state.addBooking.isFetching = false;
      state.addBooking.booking = action.payload;
      state.addBooking.error = false;
      state.addBooking.success = true;
    },
    addBookingFailed: (state) => {
      state.addBooking.isFetching=false;
      state.addBooking.error=true;
    }
  },
});
export const { getBookingsStart, getBookingsSuccess, getBookingsFailed, addBookingStart,addBookingSuccess,addBookingFailed } =
  bookingSlice.actions;
export default bookingSlice.reducer;
