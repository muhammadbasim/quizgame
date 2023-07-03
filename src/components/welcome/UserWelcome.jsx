import React from 'react'
import "./UserWelcome.css";
import { NavLink } from 'react-router-dom';

const UserWelcome = () => {
    return (
        <div className="widget">
            <div className="intro">
              Hi user,<br/>
              Welcome back!<br/>
              Let's take a Quiz now!!!!!
              <NavLink to="/AddQuiz">take Quiz</NavLink>
            </div>
        </div>
    );
}

export default UserWelcome;
