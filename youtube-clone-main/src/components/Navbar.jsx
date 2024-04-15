import React from "react";
import imgs from "../assets/navbar/logo.svg";
import {
  Bell,
  MicFill,
  Search,
  Person,
  CameraReels,
  List,
} from "react-bootstrap-icons";

function Navbar({ toggleDrawer, open }) {
  return (
    <>
      <div id="navbar-main" className="fixed-top">
        {/* <div className="d-flex align-items-center justify-content-between flex-wrap"> */}
        <div className="nav-content">
          <div className="d-flex align-items-center justify-content-between ">
            <button
              className="side-menu-icon ms-1 pe-auto"
              onClick={() => toggleDrawer(true)}
            >
              <List color="#fff" size={30} />
            </button>
            <div className="img-test mt-1">
              <img src={imgs} alt="som" />
            </div>
          </div>
          <div className="serch-box-section">
            <div className="input-section">
              <input type="text" placeholder="Search" className="serch-box" />
              <button className="search-icon-btn">
                <Search color="#fff" size={20} />
              </button>
              <span className="mic-btn ms-3">
                <MicFill color="#fff" size={16} />
              </span>
            </div>
          </div>
          <div className="create-icon d-flex justify-content-center align-items-center pe-3">
            <span className="bell-btn">
              <CameraReels color="#fff" size={20} />
            </span>
            <span className="bell-btn">
              <Bell color="#fff" size={20} />
            </span>
            <span className="bell-btn person">
              <Person color="#fff" size={20} />
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Navbar;
