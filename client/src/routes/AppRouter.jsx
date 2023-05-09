import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./index";
import Nav from "../components/Nav";
import Login from "../components/Login";

function Layout({ children }) {
  return (
    <div className="flex grid grid-cols-6">
      <Nav />
      <main className="col-span-5">{children}</main>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Login} />
        <Route element={<Layout />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
