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
  const dispatch = useDispatch();
  const roomList = useSelector((state) => state.rooms.rooms.allRooms);
  useEffect(() => {
    GetAllRooms(user.accessToken, dispatch);
  });
  return (
    <div className="h-screen flex-1 p-7">
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
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Roomnumber
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Roomtype
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Floor
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 border-collapse border border-gray-400">
          {roomList.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.roomnumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.roomtype}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.floor}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
