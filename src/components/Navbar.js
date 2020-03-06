import React from "react"
import { NavLink, } from 'react-router-dom';
import { withRouter, } from 'react-router-dom';


const Navbar = () => (
  <div>
    <div
      align="left">
      <div 
      class='navHomeBtn'
      >
        <NavLink
          style={black}
          to="/"
        >
          <img src="https://img.icons8.com/cotton/2x/laptop-coding.png"
            height="60"
            width="60"
          >
          </img>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Home
        </NavLink>
      </div>
    </div>

    <div 
    style={cust}
    class="cust"
    >
      <div>
        <NavLink
          to="/About"
          style={black}
        >
          About
    </NavLink>
      </div>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <div >
        <NavLink
          to="/Projects"
          style={black}
        >
          Projects
    </NavLink>
      </div>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <div>
        <NavLink
          to="/Contact"
          style={black}
        >
          Contact
    </NavLink>
      </div>
    </div>
    <hr />
  </div>

)

const cust = {
  display: 'flex',
  paddingBottom: '55px',
  backgroundColor: '#0985e34d',
  color: 'black',
  fontSize: '30px',
  justifyContent: 'flex-End',
  paddingRight: '150px',
  fontSize: "23px",
}

const black = {
  color: "black",
}

export default withRouter(Navbar)
