import React from 'react'
import "./UserLogin.css"

const UserLogin = () => {
    return (
        <div className="login">
          <form className="login-form">
            <h3>User Login Form</h3>
            <label for="login-username">Username </label>
            <input type="text" placeholder="Username" /><br/><br/>
            <label for="login-password">Password </label>
            <input type="password" placeholder="Password" /><br/><br/>
            <input type="submit" value="Login"/>
          </form>
        </div>
      );
}

export default UserLogin;