import React from 'react'
import './AdminSettings.css';
import { NavLink } from 'react-router-dom';

const AdminSettings = () => {
    return (
        <div className="container">
            <h1>Admin Settings</h1>
            <div className="settings">
                <div className="setting">
                    <h4>Manage Quizzes</h4>
                    <button> <NavLink to="/QuizForm">Manage Quizzes</NavLink></button>
                   
                </div>
                <div className="setting">
                    <h4>Manage Users/Results</h4>
                    <button><NavLink to="/UserProgress">View Progress</NavLink></button>
                    
                </div>
                <div className="setting">
                    <h4>Manage Account</h4>
                    <button>Go to Account</button>
                </div>
                <div className="setting">
                    <h4>Change Credentials</h4>
                    <button>Change Credentials</button>
                </div>
                <div className="setting">
                    <h4>View All Users</h4>
                    <button>View All Users</button>
                </div>
            </div>
        </div>
    );
}

export default AdminSettings;