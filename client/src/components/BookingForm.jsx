import React from "react";
import { useState } from "react";
import { AddNewBooking } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function BookingForm() {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState("");
  const [roomtype, setRoomtype] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [request, setRequest] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBooking = (e) => {
    e.preventDefault();
    const newBooking = {
      fullname: fullname,
      phoneNumber: phoneNumber,
      email: email,
      guest: guest,
      roomtype: roomtype,
      arrivalDate: arrivalDate,
      departureDate: departureDate,
      request: request,
    };
    AddNewBooking(newBooking, dispatch, navigate);
  };
  return (
    <div class="bg-gray-200 min-h-screen flex font-nunito ">
      <div class="container max-w-5xl mx-auto flex-1 flex  items-center justify-center">
        <form
          class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          onSubmit={handleAddBooking}
        >
          <h1 class="mb-5 text-3xl text-gray-950">Booking room</h1>
          <hr class="border-slate-950 mb-4"></hr>
          <div className="flex">
            <div className="">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Fullname
              </label>
              <input
                type="text"
                className="block border border-gray-600 w-72 p-1.5 rounded mb-4"
                name="fullname"
                placeholder="Enter your fullname"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="ml-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Phone number
              </label>
              <input
                type="text"
                className="block border border-gray-600 w-72 p-1.5 rounded mb-4"
                name="phonenumber"
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="ml-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                className="block border border-gray-600 w-72 p-1.5 rounded mb-4"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Guest
              </label>
              <div class="">
                <input
                  type="number"
                  class="border border-gray-600 rounded-md p-1.5 w-20 text-center"
                  min="0"
                  max="20"
                  step="1"
                  onChange={(e) => setGuest(e.target.value)}
                />
              </div>
            </div>

            <div className="ml-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Room Type
              </label>
              <select
                class="block w-32 p-1.5 border border-gray-600 bg-white rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e) => setRoomtype(e.target.value)}
              >
                <option value="Standrad" selected>
                  Standrad
                </option>
                <option value="Superior">Superior</option>
                <option value="Deluxe">Deluxe</option>
              </select>
            </div>
            <div className="ml-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="date"
              >
                Arrival Date
              </label>
              <input
                class=" appearance-none border rounded w-full p-2 border-gray-600 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                onChange={(e) => setArrivalDate(e.target.value)}
              />
            </div>
            <div className="ml-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="date"
              >
                Departure Date
              </label>
              <input
                class=" appearance-none border rounded w-full p-2 border-gray-600 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mt-3 justify-between">
            <div className="">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="date"
              >
                Special request
              </label>
              <textarea
                class="resize border rounded-md p-2 w-96 border-gray-600"
                rows="3"
                placeholder="Enter request ..."
                onChange={(e) => setRequest(e.target.value)}
              ></textarea>
            </div>
            <div className="flex space-x-2 ">
              <Link to="/booking">
                <button
                  type="submit"
                  class="w-full mt-24 text-center py-1 px-3 rounded bg-opacity-0 border-gray-950 border hover:bg-opacity-10 text-gray-950 focus:outline-none my-1"
                >
                  Return
                </button>
              </Link>
              <button
                type="submit"
                class="w-full mt-24 text-center py-1 px-9 rounded bg-emerald-600 hover:shadow-lg text-white focus:outline-none my-1"
              >
                Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
