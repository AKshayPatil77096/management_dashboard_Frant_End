import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <br/>
    <h1><i><center>DashBoard of Management</center></i></h1><br/><br/>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/User_login/login">Login</NavLink>
        <NavLink className="nav-link" to="/User_login/Create">Create</NavLink>
        <NavLink className="nav-link" to="/User_login/Role_access">Role_access</NavLink>
        <NavLink className="nav-link" to="/Forget">Forget</NavLink>
        <NavLink className="nav-link" to="/User_login/Activity">Activity</NavLink>
        <NavLink className="nav-link" to="/User_login/Userlist">Userlist</NavLink>
        <NavLink className="nav-link" to="/Profile">Profile</NavLink>
        <NavLink className="nav-link" to="/Logout">Logout</NavLink>
      </div>
    </div>
  </div>
</nav>

 </>
  )
}

export default Navbar;