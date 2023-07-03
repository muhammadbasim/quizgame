import React from 'react'
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import AdminSettings from '../../components/settings/AdminSettings';
import "./AdminSetting.css";
import { NavLink } from 'react-router-dom';
const AdminSetting = () => {
    return (
        <div className="home">
          <AdminSidebar />
          <NavLink to="/AdminHome">Return to Home</NavLink>
          <div className="homeContainer">
            <AdminNavbar />
            <div className="charts">
              <AdminSettings/>
            </div>
          </div>
        </div>
      );
}

export default AdminSetting;