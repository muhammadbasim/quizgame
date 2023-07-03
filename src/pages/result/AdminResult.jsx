import React from 'react'
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import AdminResults from '../../components/results/AdminResults';
import "./AdminResult.css";
import { NavLink } from 'react-router-dom';
const AdminResult = () => {
    return (
        <div className="home">
          <AdminSidebar />
          <NavLink to="/AdminHome">Return to Home</NavLink>
          <div className="homeContainer">
            <AdminNavbar />
            <div className="charts">
              <AdminResults/>
              <NavLink to="/UserResults">View Results</NavLink>
            </div>
          </div>
        </div>
      );
}

export default AdminResult;