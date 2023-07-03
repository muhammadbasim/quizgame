import React from 'react'
import UserSidebar from "../../components/sidebar/UserSidebar";
import UserNavbar from "../../components/navbar/UserNavbar";
import UserResults from '../../components/results/UserResults';
import "./UserResult.css";
import { NavLink } from 'react-router-dom';
const UserResult = () => {
    return (
        <div className="home">
          <UserSidebar />
          <div className="homeContainer">
            <UserNavbar />
            <div className="charts">
              <UserResults/>
              <NavLink to="/UserResults">View Results</NavLink>
            </div>
          </div>
        </div>
      );
}

export default UserResult;
