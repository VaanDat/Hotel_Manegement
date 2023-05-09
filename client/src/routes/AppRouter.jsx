import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./index";
import Nav from "../components/Nav";

function AppRouter() {
  return (
    <Router>
      <div className="flex grid grid-cols-6">
        <Nav />
        <main className="col-span-5">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
