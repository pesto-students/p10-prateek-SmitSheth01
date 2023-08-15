import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <FaBars className="bars" />

        <div className="nav-menu">
          <NavLink to='/about' activeClassName="active">
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar