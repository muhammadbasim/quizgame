import React from 'react'
import UserSidebar from "../../components/sidebar/UserSidebar";
import UserNavbar from "../../components/navbar/UserNavbar";
import UserSettings from '../../components/settings/UserSettings';
import "./UserSetting.css";
import { NavLink } from 'react-router-dom';
const UserSetting = () => {
    return (
        <div className="home">
          <UserSidebar />
          <NavLink to="/UserHome">Return to Home</NavLink>
          <div className="homeContainer">
            <UserNavbar />
            <div className="charts">
              <UserSettings/>
            </div>
          </div>
        </div>
      );
}

export default UserSetting;
