import "./layout.css"

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function AppLayout() {

  const location = useLocation();
  const currentPage = location.pathname;

  const isVideoPage = currentPage.startsWith("/watch/");

  return (
    <>
      <Navbar />

      <div className="layout">

        {isVideoPage ? <Sidebar collapsed /> : <Sidebar />}

        <main className="page-content">
          <Outlet />
        </main>

      </div>
    </>
  );
}

export default AppLayout;