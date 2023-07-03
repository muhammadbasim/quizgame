import UserSidebar from "../../components/sidebar/UserSidebar";
import UserNavbar from "../../components/navbar/UserNavbar";
import "./UserHome.css";
import UserWelcome from "../../components/welcome/UserWelcome";
import UserProgress from "../../components/progress/UserProgress";
import UserCategories from "../../components/categories/UserCategories"
import { NavLink } from 'react-router-dom';

const UserHome = () => {
  return (
    <div className="home">
      <UserSidebar />
      <div className="homeContainer">
        <UserNavbar />
        <div className="widgets">
          <UserWelcome />
        </div>
        <div className="charts">
          <UserCategories title="Choose Category of your choice" aspect={2 / 1} />
          <NavLink to="/UserCategories">View Categories</NavLink>
          <UserProgress /> 
          <NavLink to="/UserProgress">View progress</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
