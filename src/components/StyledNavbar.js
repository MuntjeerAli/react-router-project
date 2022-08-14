import React from 'react';
import {NavLink} from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav>
        <NavLink to='/' className={({isActive}) => (isActive ? 'link active' : 'link') } >
            Home Page
        </NavLink>
        <NavLink to='/about' className={({isActive}) => (isActive ? 'link active' : 'link') } >
            About
        </NavLink>
        <NavLink to='/product' className={({isActive}) => (isActive ? 'link active' : 'link') } >
            Product
        </NavLink>
    
    </nav>
  )
}

export default StyledNavbar;
