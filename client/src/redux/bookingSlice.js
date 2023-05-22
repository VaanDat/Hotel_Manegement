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
    deleteBooking: {
      isFetching: false,
      error: false,
    },
    msg: "",
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
      state.addBooking.isFetching = false;
      state.addBooking.error = true;
    },
    deleteBookingStart: (state) => {
      state.deleteBooking.isFetching = true;
    },
    deleteBookingSuccess: (state, action) => {
      state.deleteBooking.isFetching = false;
      state.deleteBooking.error = false;
      state.msg = action.payload;
    },
    deleteBookingFailed: (state, action) => {
      state.deleteBooking.isFetching = false;
      state.deleteBooking.error = true;
      state.msg = action.payload;
    },
  },
});
export const {
  getBookingsStart,
  getBookingsSuccess,
  getBookingsFailed,
  addBookingStart,
  addBookingSuccess,
  addBookingFailed,
  deleteBookingStart,
  deleteBookingSuccess,
  deleteBookingFailed,
} = bookingSlice.actions;
export default bookingSlice.reducer;
