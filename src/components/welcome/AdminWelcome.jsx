import React from 'react'
import "./AdminWelcome.css";
import { NavLink } from 'react-router-dom';

const AdminWelcome = () => {
    return (
        <div className="widget">
            <div className="intro">
              Welcome back, Admin!<br/>
              Manage your quizzes here.
            </div>
            <NavLink to="/QuizForm">Manage Quizzes</NavLink>
        </div>
      );
}

export default AdminWelcome;