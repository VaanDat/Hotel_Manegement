import React, { useEffect, useState } from "react";
import { GetAllUsers } from "../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Users() {
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.users?.allUsers);
  console.log(userList);
  useEffect(() => {
    GetAllUsers(user.accessToken, dispatch);
  }, []);
  return (
    <div className="h-screen flex-1 p-7">

      <Link 
        to="/adduser"
        className=" text-sm bg-emerald-600   text-white font-medium py-2 px-4 rounded hover:shadow-lg"
      >
        Create +
      </Link>

      <table className="min-w-full divide-y divide-gray-200 mt-2">
        <thead className="bg-gray-500">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Position
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            ></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 border-collapse border border-gray-400">
          {userList?.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
              <td className="flex px-6 py-4 whitespace-nowrap justify-center">
                <button class="text-sm mr-3 bg-red-600   text-white font-medium py-2 px-4 rounded hover:shadow-lg ">
                  Delete
                </button>
                <button class="text-sm bg-emerald-600   text-white font-medium py-2 px-4  rounded hover:shadow-lg">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
