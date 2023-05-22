import React from "react";
import room1 from "../../src/assets/images/room1.jpg";
import room2 from "../../src/assets/images/room2.jpg";
import room3 from "../../src/assets/images/room3.jpg";
export default function Housekeeping() {
  return (
    <div className="items-center h-screen font-nunito ">
      <div className="flex flex-col bg-white mb-4">
        <h4 className="font-bold text-xl text-gray-950 pl-5 pt-5 pb-2">
          ROOM TYPE
        </h4>

        <p className="text-sm pl-5">Welcome back!</p>
      </div>
      <div class="container  px-4 py-8 flex justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div class="bg-white rounded-lg shadow-lg p-4 border border-emerald-600 hover:-translate-y-2 duration-75">
            <img
              src={room1}
              alt="Image 1"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Standrad</h3>
            <p class="text-gray-600">
              A standard room in a hotel is the simplest type of room with
              minimal amenities. It has a small area, located on lower floors,
              and does not offer any view or has an unattractive view.
            </p>
            <h3 class="text-xl font-semibold mt-3">Price: 300.000 VND</h3>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-4 border border-emerald-600 hover:-translate-y-2 duration-75">
            <img
              src={room2}
              alt="Image 2"
              class="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Superior</h3>
            <p class="text-gray-600">
              This is a type of room that has higher quality than the standard
              (STD) room, with a larger area and equipped with more convenient
              facilities and a beautiful view.
            </p>
            <h3 class="text-xl font-semibold mt-3">Price: 500.000 VND</h3>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-4 border border-emerald-600 hover:-translate-y-2 duration-75">
            <img
              src={room3}
              alt="Image 3"
              class="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Deluxe</h3>
            <p class="text-gray-600">
              The Deluxe room has a
              spacious area and offers beautiful views, along with premium
              amenities.
            </p>
            <h3 class="text-xl font-semibold mt-14">Price: 1.000.000 VND</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
