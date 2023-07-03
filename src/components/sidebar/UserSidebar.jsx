import React from 'react'
import { NavLink } from 'react-router-dom';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { Home } from '@mui/icons-material';
import './UserSidebar.css';
const UserSidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
          <div className='top'>
            <NavLink to='/' className='logo'>User</NavLink>
          </div>
          <hr />
          <div className='center'>
            <ul>
              <li>
                <Home className='icon' />
                <NavLink to='/'><span>Home</span></NavLink>
              </li>
              <li>
                <InsertChartIcon className='icon' />
                <NavLink to='/results'><span>Quiz Results</span></NavLink>
              </li>
              <li>
                <SettingsApplicationsIcon className='icon' />
                <NavLink to='/settings'><span>Settings</span></NavLink>
              </li>
              <p className='title'>USER</p>
              <li>
                <AccountCircleOutlinedIcon className='icon' />
                <NavLink to='/profile'><span>Profile</span></NavLink>
              </li>
              <li>
                <ExitToAppIcon className='icon' />
                <span>Logout</span>
              </li>
            </ul>
          </div>
          <div className='bottom'>
            <div
              className='colorOption'
              onClick={() => dispatch({ type: 'LIGHT' })}
            ></div>
            <div
              className='colorOption'
              onClick={() => dispatch({ type: 'DARK' })}
            ></div>
          </div>
        </div>
    );
}

export default UserSidebar;
