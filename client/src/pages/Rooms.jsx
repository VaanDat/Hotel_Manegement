import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllRooms } from "../redux/apiRequest";

export default function Rooms() {
  const data = [
    {
      id: "1",
      roomnumber: "101",
      roomtype: "Standrad",
      floor: "1",
      status: "usable",
    },
    {
      id: "2",
      roomnumber: "102",
      roomtype: "Standrad",
      floor: "1",
      status: "usable",
    },
  ];
  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    GetAllRooms(user.accessToken, dispatch);
  });
  const dispatch = useDispatch();
  const roomList = useSelector((state) => state.rooms.rooms.allRooms);

  return (
    <div className="h-screen flex-1 p-7">
      <form>
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
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
        </div>
      </form>
      {/* <Link
      to="/adduser"
      className=" text-sm bg-emerald-600   text-white font-medium py-2 px-4 rounded hover:shadow-lg"
    >
      ADD +
    </Link> */}

      <table className="min-w-full divide-y divide-gray-200 mt-2 border">
        <thead className="bg-gray-500">
          <tr>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Roomnumber
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Roomtype
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Floor
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 border-collapse border border-gray-400">
          {roomList &&
            roomList.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 whitespace-nowrap">
                  {item.roomnumber}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{item.roomtype}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.floor}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
