import React from 'react'
import './UserSignup.css'
import { NavLink } from 'react-router-dom';

const UserSignup = () => {
  return (
    <div>
    <h2>User Sign Up</h2>
    <form>
      <label for="username">Username </label>
      <input type="text" id="username" name="username" required/>
  
      <label for="password">Password </label>
      <input type="password" id="password" name="password" required/>
  
      <label for="confirm-password">Confirm Password </label>
      <input type="password" id="confirm-password" name="confirm-password" required/>
  
      <label for="email">Email </label>
      <input type="email" id="email" name="email" required/>
  
      <input type="submit" value="Sign Up"/>
    </form>
    <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
    </div>
  )
}

export default UserSignup;