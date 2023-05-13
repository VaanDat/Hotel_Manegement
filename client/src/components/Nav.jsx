import React, { useState } from "react";
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
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log(user);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 font-semibold bg-emerald-600 relative`}
      >
        {user ? (
          <div className="flex">
            <Link to="/" className="flex gap-x-4 items-center">
              <h1
                className={`text-white origin-left font-medium text-lg duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Welcome back, <span> {user.user.name} </span> !
              </h1>
            </Link>
          </div>
        ) : (
          <></>
        )}
        <ul className="pt-6">
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md ">
            <Link to="/dashboard" className="flex gap-x-4 items-center ">
              <img src={chart} alt="" className="w-6 h-6 text-white" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/reservations" className="flex gap-x-4 items-center ">
              <img src={bell} alt="" className="w-6 h-6 text-white" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Reservations
              </span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/arrivals" className="flex gap-x-4 items-center ">
              <img src={login} alt="" className="w-6 h-6 text-white" />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Arrivals
              </span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/departures" className="flex gap-x-4 items-center ">
              <img src={logout} alt="" className="w-6 h-6 text-white" />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Departures
              </span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/customer" className="flex gap-x-4 items-center ">
              <img src={customer} alt="" className="w-6 h-6 text-white" />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Customer
              </span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/rooms" className="flex gap-x-4 items-center ">
              <img src={room} alt="" className="w-6 h-6 text-white" />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Rooms
              </span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex  cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/roomtypes" className="flex gap-x-4 items-center ">
              <img src={roomtypes} alt="" className="w-6 h-6 text-white" />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Users
              </span>
            </Link>
          </li>
          <li className="mt-2 text-gray-300 text-sm flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md">
            <Link to="/housekeeping" className="flex gap-x-4">
              <img src={housekeeping} alt="" className="w-6 h-6 text-white" />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Housekeeping
              </span>
            </Link>
          </li>
        </ul>
        <div
          className={`flex justify-center space-x-4 ${
            !open && "hidden"
          } duration-200 `}
        >
          <Link to="/">
            <button class="mt-8 text-sm bg-white text-emerald-800 font-medium py-2 px-4 rounded hover:bg-green-400">
              Log out
            </button>
          </Link>
        </div>
        <div className={`mt-20 flex justify-center ${!open && "hidden"}`}>
          <img src={logo} alt="" className="w-30 h-10" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
