import React from 'react'
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import "./AdminHome.css";
import AdminWelcome from "../../components/welcome/AdminWelcome";
import AdminCategories from "../../components/categories/AdminCategories"
import { NavLink } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div className="home">
          <AdminSidebar />
          <div className="homeContainer">
            <AdminNavbar />
            <div className="widgets">
              <AdminWelcome />
            </div>
            <div className="charts">
              <AdminCategories title="Choose Category of your choice" aspect={2 / 1} />
              <button className='viewbtn'><NavLink to="/AdminCategories">View Categories</NavLink></button>
            </div>
          </div>
        </div>
      );
}

export default AdminHome;