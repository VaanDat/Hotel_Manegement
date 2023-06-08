import React from "react";
import { useState } from "react";
import { AddNewCustomer } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const newCustomer = {
      name: name,
      gender: gender,
      date: date,
      phoneNumber: phoneNumber,
      country: country,
    };
    AddNewCustomer(newCustomer, dispatch, navigate);
  };

  return (
    <div class="bg-gray-200 min-h-screen flex font-nunito">
      <div class="container max-w-2xl mx-auto flex-1 flex  items-center justify-center">
        <form
          class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          onSubmit={handleAddCustomer}
        >
          <h1 class="mb-3 text-3xl font-medium">Add new customer !</h1>
          <hr class="border-slate-950 mb-4"></hr>
          <div className="flex">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Fullname
              </label>
              <input
                type="text"
                class="block border border-grey-light w-72 p-1.5 rounded mb-4"
                name="name"
                placeholder="Enter your fullname"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="ml-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <select
                class="block border border-grey-light w-36 p-1.5 rounded mb-4"
                placeholder=""
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="ml-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Birthday
              </label>
              <input
                class=" appearance-none border rounded w-full p-2 border-gray-600 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone number
              </label>
              <input
                type="text"
                class="block border border-grey-light w-72 p-1.5 rounded mb-4"
                name="phonenumber"
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="ml-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country
              </label>
              <input
                type="string"
                class="block border border-grey-light w-80 p-1.5 rounded mb-4"
                name="country"
                placeholder="Enter your country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-3">
            <Link to="/customer">
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
