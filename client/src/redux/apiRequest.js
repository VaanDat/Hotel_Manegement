import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

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

//GetAllUsers
export const GetAllUsers = async (accessToken, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("http://localhost:8000/user/", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed);
  }
};
