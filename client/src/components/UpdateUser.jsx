import React from "react";
import { useState } from "react";
import { AddNewUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdateUser() {
  const { id } = useParams();
  console.log(id);
  const userList = useSelector((state) => state.users.users?.allUsers);
  console.log(userList);
  const existingUser = userList.filter((f) => f._id === id);
  console.log(existingUser[0]);
  const { name, username, password, position, email } = existingUser[0];
  console.log(password);
  const [uname, setName] = useState(name);
  const [uusername, setUsername] = useState(username);
  const [upassword, setPassword] = useState(password);
  const [uemail, setEmail] = useState(email);
  const [uposition, setPosition] = useState(position);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div class="bg-gray-200 min-h-screen flex font-nunito">
      <div class="container max-w-2xl mx-auto flex-1 flex  items-center justify-center">
        <form class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-3 text-3xl font-medium">Edit user</h1>
          <hr class="border-slate-950 mb-4"></hr>
          <div className="flex">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Fullname
              </label>
              <input
                type="text"
                class="block border border-grey-light w-72 p-1.5 rounded mb-4"
                name="fullname"
                placeholder="Fullname"
                value={uname}
              />
            </div>
            <div className="ml-3">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <select
                class="block border border-grey-light w-36 p-1.5 rounded mb-4"
                placeholder="Position"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="ml-3">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Position
              </label>
              <select
                class="block border border-grey-light w-40 p-1.5 rounded mb-4"
                placeholder="Position"
              >
                <option selected>{uposition}</option>
                <option value="Reception">Reception</option>
                <option value="Staff">Staff</option>
                <option value="Chef">Chef</option>
                <option value="Trash collector">Trash collector</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                class="block border border-grey-light w-72 p-1.5 rounded mb-4"
                name="username"
                placeholder="Enter your username"
                value={uusername}
              />
            </div>
            <div className="ml-3">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                class="block border border-grey-light w-80 p-1.5 rounded mb-4"
                name="pasword"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                class="block border border-grey-light w-72 p-1.5 rounded mb-4"
                name="email"
                placeholder="Enter your email"
                value={uemail}
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <Link to="/users">
              <button
                type="submit"
                class="w-full text-center py-3 px-9 rounded bg-opacity-0 border border-green-600 hover:bg-opacity-10 text-green-600 focus:outline-none my-1"
              >
                Return
              </button>
            </Link>
            <button
              type="submit"
              class="w-full text-center py-3  rounded bg-emerald-600 text-white hover:shadow-lg focus:outline-none my-1"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
