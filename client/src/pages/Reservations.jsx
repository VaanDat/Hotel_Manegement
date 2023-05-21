import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBookings } from "../redux/apiRequest";
export default function Reservations() {
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    GetAllBookings(user.accessToken, dispatch);
  });
  const bookingList = useSelector(
    (state) => state.bookings.bookings.allBookings
  );
  function normal_date(date) {
    var year = date.substring(0, 4);
    var month = date.substring(5, 7);
    var day = date.substring(8, 10);
    var normal_date = day + "-" + month + "-" + year;
    return normal_date;
  }
  // console.log(normal_date(bookingList[0].arrivalDate.substring(0,10)))
  // console.log((bookingList[0].arrivalDate.substring(0,10))) checktype
  return (
    <div className="h-screen flex-1 font-nunito">
      <div className="flex flex-col bg-white">
        <h4 className="font-bold text-xl text-gray-950 pl-5 pt-5 pb-2">
          BOOKING
        </h4>

        <p className="text-sm pl-5">21th May 2023</p>
      </div>
      <div className="p-7">
        <div className="">
          <form className="inline-block">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-96 p-2 pl-10 text-sm text-gray-900 border rounded border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </form>
          <Link
            to="/addbooking"
            className="inline-block float-right text-sm bg-emerald-600  text-white font-medium py-3 px-5 hover:shadow-lg rounded"
          >
            Create a booking +
          </Link>
        </div>
        <table className="min-w-full divide-y divide-gray-200 mt-2 border shadow-md">
          <thead className="bg-emerald-600">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                NAME
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                PHONENUMBER
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                GUEST
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Room Type
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Arrival Date
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Departure Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 border-collapse border border-gray-400">
            {bookingList &&
              bookingList.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {item.fullname}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {item.phoneNumber}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{item.guest}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {item.roomtype}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {normal_date(item.arrivalDate.substring(0, 10))}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {normal_date(item.departureDate.substring(0, 10))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
