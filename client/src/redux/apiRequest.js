import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";
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

//Login
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/users");
  } catch (err) {
    dispatch(loginFailed());
  }
};

//Get All Users
export const GetAllUsers = async (accessToken, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("http://localhost:8000/user/", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed());
  }
};
//Get All Rooms
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
//Add New User
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

//Delete User
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
