import React from "react"
import { Link, NavLink, } from 'react-router-dom';
import { withRouter, } from 'react-router-dom';


const Navbar = () => (
  <div>
    <div align="left">
      <div style={aligningRight}>
        <NavLink to="/"
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

    <div style={cust}>
      <div>
        <NavLink to="/About"
        >
          About
    </NavLink>
      </div>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <div >
        <NavLink to="/Projects"
        >
          Projects
    </NavLink>
      </div>
    </div>

  </div>

)

const aligningRight = {
  backgroundColor: 'white',
  paddingTop: '60px',
  paddingLeft: '105px',
  color: 'black',
  fontSize: '23px'
}

const cust = {
  display: 'flex',
  paddingBottom: '55px',
  backgroundColor: 'white',
  color: 'black',
  fontSize: '30px',
  justifyContent: 'flex-End',
  paddingRight: '150px',
  fontSize: "23px",
}

const lift = {
  display: 'flex',
  alignItems: 'flex-start'
}

export default withRouter(Navbar)
