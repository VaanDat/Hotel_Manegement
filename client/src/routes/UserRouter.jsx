import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../components/AddUser";

export default function UserRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/adduser" element={<AddUser />}></Route>
      </Routes>
    </Router>
  );
}
