import { Link } from "react-router-dom";
import ava from "../../src/assets/images/hacker.png";
import ava1 from "../../src/assets/images/hacker1.png";
export default function Dashboard() {
  return (
    <div className="flex-auto font-nunito">
      <div className="flex flex-col">
        <div className="flex flex-col bg-white">
          <h4 className="font-bold text-xl text-gray-950 pl-5 pt-5 pb-2">
            DASHBOARD
          </h4>

          <p className="text-sm pl-5">Welcome back!</p>
        </div>
        <div className="min-h-screen bg-white">
          <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols-2 p-4">
            <Link to="/booking">
              <div className="flex items-center bg-white rounded shadow-lg justify-between p-5 border border-emerald-600 hover:-translate-y-2 duration-75">
                <div className="">
                  <div className="text-sm text-gray-400">Check in Today</div>
                  <div className="text-3xl font-medium text-gray-600"> 15</div>
                </div>
                <div className="text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link to="/booking">
              {" "}
              <div className="flex items-center bg-white rounded shadow-lg justify-between p-5 border border-emerald-600 hover:-translate-y-2 duration-75">
                <div className="">
                  <div className="text-sm text-gray-400">Check out Today</div>
                  <div className="text-3xl font-medium text-gray-600"> 10</div>
                </div>
                <div className="text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link to="/customer">
              <div className="flex items-center bg-white rounded shadow-lg justify-between p-5 border border-emerald-600 hover:-translate-y-2 duration-75">
                <div className="">
                  <div className="text-sm text-gray-400">Total properties</div>
                  <div className="text-3xl font-medium text-gray-600">2002</div>
                </div>
                <div className="text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div class=" mt-5 grid  lg:grid-cols-3  md:grid-cols-3 p-4 gap-3">
            <div class="col-span-2 flex flex-col   p-8 bg-white rounded shadow-lg border border-emerald-600 hover:-translate-y-2 duration-75s">
              <div class=" font-bold text-gray-600">Clients</div>
              <div class="grid  lg:grid-cols-1  md:grid-cols-1 p-4 gap-3">
                <div class="col-span-2 flex flex-auto items-center justify-between  p-5 bg-white rounded shadow-sm">
                  <table class="min-w-full divide-y divide-gray-200 table-auto border">
                    <thead class="bg-emerald-600 text-white">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                src={ava}
                                alt=""
                                className=" w-10 h-10 text-white"
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Pham Van Dat
                              </div>
                              <div class="text-sm text-gray-500">
                                phamvandat@gmail.com
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                src={ava1}
                                alt=""
                                className=" w-10 h-10 text-white"
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Nguyen Cong Duy
                              </div>
                              <div class="text-sm text-gray-500">
                                nguyencongduy@gmail.com
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          User
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class=" flex flex-col p-5 bg-white rounded shadow-lg border border-emerald-600 hover:-translate-y-2 duration-75">
              <div class="col-span-2 flex flex-col  p-4 bg-white">
                <div class="mb-8 font-bold text-gray-600">Rooms</div>
                <table class="min-w-full divide-y divide-gray-200 table-auto border">
                  <thead class="bg-emerald-600 text-white">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        ROOM
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        Title
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-7 py-4 whitespace-nowrap">
                        <div class=" flex items-center">101</div>
                      </td>

                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Usable
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-7 py-4 whitespace-nowrap">
                        <div class=" flex items-center">102</div>
                      </td>

                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Usable
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-7 py-4 whitespace-nowrap">
                        <div class=" flex items-center">103</div>
                      </td>

                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                          Unusable
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
