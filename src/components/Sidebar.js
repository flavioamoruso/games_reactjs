import React from "react";
import { useGlobalContext } from "../context";
import { FaArrowLeft } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <>
      <aside
        className={`${isSidebarOpen ? "show-sidebar sidebar sfondo-side" : "sidebar"}`}
      >
        <div className="sidebar-content">
          <header className="nav-header container">
            <div className="nav-brand">
              <h3 className="nav-brand">GameStart</h3>
            </div>
            <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
              {" "}
              <FaArrowLeft className="nav-icon" />
            </button>
          </header>
          <div className="container">
            <a href="">Link 1</a>
            <a href="">Link 2</a>
          </div>
          {/* Switch darkmode */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
