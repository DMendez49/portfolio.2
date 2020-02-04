import React from "react"
import { Link, NavLink, } from 'react-router-dom';
import { withRouter, } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div align="left">
      <div>
        <NavLink to="/Home"
        >
          Home
    </NavLink>
      </div>
    </div>

    <div align="left">
      <NavLink to="/About"
      >
        About
    </NavLink>
    </div>


  </div>

)

export default withRouter(Navbar)
