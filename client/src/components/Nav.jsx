import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import chart from "../../src/assets/images/dashboard.png";
import customer from "../../src/assets/images/customer.png";
import room from "../../src/assets/images/double-bed.png";
import roomtypes from "../../src/assets/images/money.png";
import housekeeping from "../../src/assets/images/cleaning.png";
import login from "../../src/assets/images/log-in.png";
import logout from "../../src/assets/images/log-out.png";
import bell from "../../src/assets/images/reception-bell.png";
import logo from "../../src/assets/images//logo.png";

function Nav() {
  const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <div className="flex">
      <div className="w-72 h-screen p-5 pt-8 font-semibold bg-emerald-600 relative">
        {user ? (
          <div className="flex justify-center">
            <h1 className="text-white origin-left font-medium text-lg italic">
              Hi, <span> {user.user.name} </span> !
            </h1>
          </div>
        ) : (
          <></>
        )}
        <ul className="pt-6">
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/dashboard" className="flex gap-x-4 items-center ">
              <img src={chart} alt="" className="w-6 h-6 text-white" />
              <span className="text-white">Dashboard</span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/reservations" className="flex gap-x-4 items-center ">
              <img src={bell} alt="" className="w-6 h-6 text-white" />
              <span className="text-white">Reservations</span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/arrivals" className="flex gap-x-4 items-center ">
              <img src={login} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Arrivals</span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/departures" className="flex gap-x-4 items-center ">
              <img src={logout} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Departures</span>
            </Link>
          </li>
          <li className="mt-2  text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/customer" className="flex gap-x-4 items-center ">
              <img src={customer} alt="" className="w-6 h-6 text-white" />

              <span className=" text-white">Customer</span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/rooms" className="flex gap-x-4 items-center ">
              <img src={room} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Rooms</span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/users" className="flex gap-x-4 items-center ">
              <img src={roomtypes} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Users</span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md ">
            <Link to="/housekeeping" className="flex gap-x-4 ">
              <img src={housekeeping} alt="" className="w-6 h-6 text-white" />

              <span className="text-white">Housekeeping</span>
            </Link>
          </li>
        </ul>
        <div className="flex justify-center space-x-4">
          <Link to="/">
            <button class="mt-8 text-sm bg-white text-emerald-800 font-medium py-2 px-4 rounded hover:-translate-y-2 duration-75 shadow-lg">
              Log out
            </button>
          </Link>
        </div>
        <div className="mt-20 flex justify-center">
          <img src={logo} alt="" className="w-30 h-10" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
