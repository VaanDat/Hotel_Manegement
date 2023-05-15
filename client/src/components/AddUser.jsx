import React from "react";
import { useState } from "react";
import { AddNewUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AddUser() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: fullname,
      username: username,
      password: password,
      email: email,
      position: position,
    };
    AddNewUser(newUser, dispatch, navigate);
  };
  return (
    <div class="bg-gray-200 min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          onSubmit={handleAddUser}
        >
          <h1 class="mb-8 text-3xl text-center font-medium">New User</h1>
          <label>Fullname</label>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Username</label>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="pasword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Position</label>
          <select
            class="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="Manager">Manager</option>
            <option value="Reception">Reception</option>
            <option value="Staff">Staff</option>
            <option value="Chef">Chef</option>
            <option value="Trash collector">Trash collector</option>
          </select>

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-emerald-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
