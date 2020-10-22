import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FiMenu, FiCircle } from "react-icons/fi";
import { BiRadioCircle } from "react-icons/bi";

import { RiCloseFill } from "react-icons/ri";
import "./NavStyles.scss";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <div className="navbar">
          <div style={{ display: "flex" }}>
            <Link to="#">
              {/* Goes home */}
              <BiRadioCircle className="icons" />
            </Link>
            <Link to="#" className="icons">
              <FiMenu onClick={showSidebar} />
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <RiCloseFill className="icon" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
