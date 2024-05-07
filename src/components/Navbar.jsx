import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {


  return (
    <div>
        
<nav>
    
<NavLink  className={(e)=>{return e.isActive?"red" : ""}}  to="/">Home</NavLink>
        
        <NavLink className={(e)=>{return e.isActive?"red" : ""}}   to="/about">
          <li>About</li></NavLink>
     
      
        <NavLink className={(e)=>{return e.isActive?"red" : ""}}  to="/login">
          <li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red" : ""}}  to="/form">
          <li>Form</li></NavLink>
       
</nav>
    </div>
  )
}

export default Navbar
