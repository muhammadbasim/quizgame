import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import "./UserNavbar.css";

const UserNavbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="navbar">
          <div className="wrapper">
            <div className="search">
              <input type="text" placeholder="Search..." />
              <SearchOutlinedIcon />
            </div>
            <div className="items">
              <div className="item">
                <LanguageOutlinedIcon className="icon" />
                English
              </div>
              <div className="item">
                <DarkModeOutlinedIcon
                  className="icon"
                  onClick={() => dispatch({ type: "TOGGLE" })}
                />
              </div>
              <div className="item">
                <NotificationsNoneOutlinedIcon className="icon" />
                <div className="counter">1</div>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="avatar"
                />
                <span>User</span>
              </div>
            </div>
          </div>
        </div>
      );
}

export default UserNavbar;
