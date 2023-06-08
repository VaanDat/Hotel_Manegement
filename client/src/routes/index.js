import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import HouseKeeping from "../pages/Housekeeping";
import Reservations from "../pages/Booking";
import Customer from "../pages/Customer";
import Rooms from "../pages/Rooms";
import AddUser from "../components/UserForm";
import AddCustomer from "../components/CustomerForm";
import BookingForm from "../components/BookingForm";
import UpdateUser from "../components/UpdateUser";

const publicRoutes = [
  { path: "/dashboard", component: Dashboard, title: "Dashboard" },
  { path: "/users", component: Users, title: "RoomTypes" },
  { path: "/booking", component: Reservations, title: "Schedule" },
  { path: "/housekeeping", component: HouseKeeping, title: "HouseKeeping" },
  { path: "/customer", component: Customer, title: "Customer" },
  { path: "/rooms", component: Rooms, title: "Rooms" },
  { path: "/adduser", component: AddUser, title: "Add User" },
  { path: "/addcustomer", component: AddCustomer, title: "Add Customer" },
  { path: "/addbooking", component: BookingForm, title: "Booking Form" },
  { path: "/updateuser/:id", component: UpdateUser, title: "Update User" },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
