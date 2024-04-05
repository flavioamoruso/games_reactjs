import React from "react";
import { LinkComponent } from "../utils/links";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <>
      <aside
        className={`${isSidebarOpen ? "show-sidebar sidebar sfondo-side" : "sidebar"}`}
      >
        <div className="sidebar-content rubik-scribble-regular">
          <header className="nav-header container">
            <div className="nav-brand">
              <h3 className="nav-brand">Gamestart</h3>
            </div>
            <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
              <FaArrowCircleLeft className="nav-icon" />
            </button>
          </header>
          <div className="container">
            <LinkComponent classLink="sidebar-link" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
