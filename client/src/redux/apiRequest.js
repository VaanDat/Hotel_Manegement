import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  refreshTokenFailed,
  refreshTokenStart,
  refreshTokenSuccess,
} from "./authSlice";
import {
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
  addUserStart,
  addUserSuccess,
  addUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
} from "./userSlice";
import { getRoomsStart, getRoomsSuccess, getRoomsFailed } from "./roomSlice";
import {
  getCustomersStart,
  getCustomersSuccess,
  getCustomerFailed,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailed,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailed,
} from "./customerSlice";
import {
  addBookingFailed,
  addBookingStart,
  addBookingSuccess,
  deleteBookingFailed,
  deleteBookingStart,
  deleteBookingSuccess,
  getBookingsFailed,
  getBookingsStart,
  getBookingsSuccess,
} from "./bookingSlice";

//LOGIN
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/dashboard");
  } catch (err) {
    dispatch(loginFailed());
  }
};
//REFRESH TOKEN
export const RefreshToken = async (refreshToken, dispatch) => {
  dispatch(refreshTokenStart());
  try {
    const res = await axios.post("http://localhost:8000/auth/refresh", {
      headers: { Cookie: `${refreshToken}` },
    });
    dispatch(refreshTokenSuccess(res.data));
  } catch (err) {
    dispatch(refreshTokenFailed());
  }
};

//GET ALL USERS
export const GetAllUsers = async (user, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("http://localhost:8000/user/", user);
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed());
  }
};
//GET ALL ROOMS
export const GetAllRooms = async (accessToken, dispatch) => {
  dispatch(getRoomsStart());
  try {
    const res = await axios.get("http://localhost:8000/room/", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getRoomsSuccess(res.data));
  } catch (err) {
    dispatch(getRoomsFailed());
  }
};
//GET ALL CUSTOMERS
export const GetAllCustomers = async (accessToken, dispatch) => {
  dispatch(getCustomersStart);
  try {
    const res = await axios.get("http://localhost:8000/customer/", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getCustomersSuccess(res.data));
  } catch (err) {
    dispatch(getCustomerFailed());
  }
};
//GET ALL BOOKINGS
export const GetAllBookings = async (accessToken, dispatch) => {
  dispatch(getBookingsStart());
  try {
    const res = await axios.get("http://localhost:8000/booking", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getBookingsSuccess(res.data));
  } catch (err) {
    dispatch(getBookingsFailed());
  }
};
//ADD NEW USER
export const AddNewUser = async (user, dispatch, navigate) => {
  dispatch(addUserStart());
  try {
    const res = await axios.post("http://localhost:8000/auth/register", user);
    dispatch(addUserSuccess(res.data));
    navigate("/users");
  } catch (err) {
    dispatch(addUserFailed());
  }
};
//ADD NEW BOOKING
export const AddNewBooking = async (booking, dispatch, navigate) => {
  dispatch(addBookingStart());
  try {
    const res = await axios.post("http://localhost:8000/booking/add", booking);
    dispatch(addBookingSuccess(res.data));
    navigate("/booking");
  } catch (err) {
    dispatch(addBookingFailed());
  }
};
//ADD NEW CUSTOMER
export const AddNewCustomer = async (customer, dispatch, navigate) => {
  dispatch(addCustomerStart());
  try {
    const res = await axios.post(
      "http://localhost:8000/customer/add",
      customer
    );
    dispatch(addCustomerSuccess(res.data));
    navigate("/customer");
  } catch (err) {
    dispatch(addCustomerFailed());
  }
};

//DELETE USER
export const deleteUser = async (accessToken, dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    const res = await axios.delete("http://localhost:8000/user/" + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFailed(err.response.data));
  }
};
//DELETE CUSTOMER
export const deleteCustomer = async (accessToken, dispatch, id) => {
  dispatch(deleteCustomerStart());
  try {
    const res = await axios.delete("http://localhost:8000/customer/" + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteCustomerSuccess(res.data));
  } catch (err) {
    dispatch(deleteCustomerFailed(err.response.data));
  }
};

//DELETE CUSTOMER
export const deleteBooking = async (accessToken, dispatch, id) => {
  dispatch(deleteBookingStart());
  try {
    const res = await axios.delete("http://localhost:8000/booking/" + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteBookingSuccess(res.data));
  } catch (err) {
    dispatch(deleteBookingFailed(err.response.data));
  }
};
