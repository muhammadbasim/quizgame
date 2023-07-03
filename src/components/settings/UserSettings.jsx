import React from 'react'
import './UserSettings.css';
import { NavLink } from 'react-router-dom';
const UserSettings = () => {
    return (
        <div className="container">
            <h1>User Settings</h1>
            <div className="settings">
                <div className="setting">
                    <h4>View Quiz History</h4>
                    <button>View Quiz History</button>
                    <NavLink to="/UserReults">View Results</NavLink>
                </div>
                <div className="setting">
                    <h4>Manage Account</h4>
                    <button>Go to Account</button>
                </div>
                <div className="setting">
                    <h4>Change Credentials</h4>
                    <button>Change Credentials</button>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;