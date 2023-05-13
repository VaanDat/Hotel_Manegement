import React, { useState } from "react";

export default function Users() {
  const data = [
    { name: "John", position: "Developer" },
    { name: "Jane", position: "Designer" },
    { name: "Jim", position: "Manager" },
  ];
  return (
    <div className="h-screen flex-1 p-7">
      <h1 className="text-2xl font-semibold ">Users List</h1>
      <button class="mt-8 text-sm bg-green-700 text-blue-50 font-medium py-2 px-4 rounded hover:bg-green-400">
        Create +
      </button>
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
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
