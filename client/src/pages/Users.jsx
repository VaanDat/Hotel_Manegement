import React, { useEffect } from "react";
import { GetAllUsers, deleteUser } from "../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import edit from "../assets/images/edit.png";

export default function Users() {
  const user = useSelector((state) => state.auth.login.currentUser);

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.users?.allUsers);
  useEffect(() => {
    GetAllUsers(user.accessToken, dispatch);
  });
  const handleDelete = (id) => {
    deleteUser(user.accessToken, dispatch, id);
  };
  return (
    <div className="h-screen flex-1 font-nunito">
      {/* <div className="flex justify-center  mb-5 font-medium">{`YOUR ROLE: ${
        user.user?.isAdmin ? `ADMIN` : `USER`
      }`}</div> */}
      <div className="flex flex-col bg-white">
        <h4 className="font-bold text-xl text-gray-950 pl-5 pt-5 pb-2">USER</h4>

        <p className="text-sm pl-5">Welcome back!</p>
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
            to="/adduser"
            className="inline-block float-right text-sm bg-emerald-600  text-white font-medium py-3 px-5 hover:shadow-lg rounded"
          >
            Add user +
          </Link>
        </div>
        <table className="min-w-full divide-y divide-gray-200 mt-2 border shadow-md">
          <thead className="bg-emerald-600 ">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs  text-white uppercase "
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs  text-white uppercase "
              >
                Position
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs  text-white uppercase "
              ></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 border-collapse border border-gray-400">
            {userList?.map((item) => (
              <tr key={item.id}>
                <td className="px-4  whitespace-nowrap">{item.name}</td>
                <td className="px-4  whitespace-nowrap">{item.position}</td>
                <td className="flex px-4 py-2 whitespace-nowrap justify-center">
                  <button
                    className="text-sm mr-3 bg-red-600   text-white py-1  px-2 rounded hover:shadow-lg "
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                  <Link
                    to="/dashboard"
                    className="px-1 py-1 rounded bg-emerald-600 hover:shadow-lg"
                  >
                    <img src={edit} alt="" className="w-6 h-6 text-white" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
