import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import chart from "../../src/assets/images/dashboard.png";
import customer from "../../src/assets/images/customer.png";
import room from "../../src/assets/images/double-bed.png";
import bell from "../../src/assets/images/booking.png";
import ava from "../../src/assets/images/hacker.png";
import roomtype from "../../src/assets/images/money.png";
import users from "../../src/assets/images/user.png";
import setting from "../../src/assets/images/setting.png";
function Nav() {
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log(user);
  return (
    <div className="flex font-nunito">
      <div className="w-72 h-screen p-5 pt-8 font-semibold bg-emerald-600 relative">
        <div className="flex gap-x-4">
          <div className="">
            <img src={ava} alt="" className=" w-10 h-10 text-white" />
          </div>

          {user ? (
            <div className="flex justify-center">
              <h1 className="mt-2 text-white origin-left font-medium text-lg italic">
                <span> {user.user.name} </span>
              </h1>
            </div>
          ) : (
            <></>
          )}
        </div>
        <hr class="border-white my-6"></hr>
        <ul className="mt-8 font-medium">
          <li className="mt-3 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md ">
            <Link to="/dashboard" className="flex gap-x-4 items-center ">
              <img src={chart} alt="" className="w-6 h-6 text-white" />
              <span className="text-white">Dashboard</span>
            </Link>
          </li>
          <li className="mt-5 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/booking" className="flex gap-x-4 items-center ">
              <img src={bell} alt="" className="w-6 h-6 text-white" />
              <span className="text-white">Booking</span>
            </Link>
          </li>
          <li className="mt-5  text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/customer" className="flex gap-x-4 items-center ">
              <img src={customer} alt="" className="w-6 h-6 text-white" />

              <span className=" text-white">Customer</span>
            </Link>
          </li>
          <li className="mt-5 text-gray-300 text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/rooms" className="flex gap-x-4 items-center ">
              <img src={room} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Rooms</span>
            </Link>
          </li>
          <li className="mt-5 text-gray-300 text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/users" className="flex gap-x-4 items-center ">
              <img src={users} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Users</span>
            </Link>
          </li>

          <li className="mt-5 text-gray-300 text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/housekeeping" className="flex gap-x-4 items-center ">
              <img src={roomtype} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Room Types</span>
            </Link>
          </li>
          <li className="mt-5 text-gray-300 text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/housekeeping" className="flex gap-x-4 items-center ">
              <img src={setting} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Setting</span>
            </Link>
          </li>
        </ul>
        <div className="flex justify-center space-x-4">
          <Link to="/">
            <button class="mt-28 text-sm  bg-white text-emerald-800  py-2 px-4 rounded hover:-translate-y-2 duration-75 shadow-lg">
              Log out
            </button>
          </Link>
        </div>
        {/* <div className="mt-20 flex justify-center">
          <img src={logo} alt="" className="w-30 h-10" />
        </div> */}
      </div>
    </div>
  );
}

export default Nav;
