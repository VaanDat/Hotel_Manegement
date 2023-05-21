import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import HouseKeeping from "../pages/Housekeeping";
import Arrivals from "../pages/Arrivals";
import Reservations from "../pages/Reservations";
import Customer from "../pages/Customer";
import Rooms from "../pages/Rooms";
import Departures from "../pages/Departures";
import AddUser from "../components/AddUser";
import AddCustomer from "../components/AddCustomer";
import BookingForm from "../components/BookingForm";

const publicRoutes = [
  { path: "/dashboard", component: Dashboard, title: "Dashboard" },
  { path: "/users", component: Users, title: "RoomTypes" },
  { path: "/booking", component: Reservations, title: "Schedule" },
  { path: "/housekeeping", component: HouseKeeping, title: "HouseKeeping" },
  { path: "/arrivals", component: Arrivals, title: "Arrivals" },
  { path: "/customer", component: Customer, title: "Customer" },
  { path: "/departures", component: Departures, title: "Departures" },
  { path: "/rooms", component: Rooms, title: "Rooms" },
  { path: "/adduser", component: AddUser, title: "Add User" },
  { path: "/addcustomer", component: AddCustomer, title: "Add Customer" },
  { path: "/addbooking", component: BookingForm, title: "Booking Form" },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
