import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    rooms: {
      allRooms: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getRoomsStart: (state) => {
      state.rooms.isFetching = true;
    },
    getRoomsSuccess: (state, action) => {
      state.rooms.isFetching = false;
      state.rooms.allRooms = action.payload;
      state.rooms.error = false;
    },
    getRoomsFailed: (state) => {
      state.rooms.isFetching = false;
      state.rooms.error = true;
    },
  },
});
export const { getRoomsStart, getRoomsSuccess, getRoomsFailed } =
  roomSlice.actions;
export default roomSlice.reducer;
