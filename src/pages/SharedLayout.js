import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar/>
      <section>
        <Outlet/>
      </section>
    </>
  )
};

export default SharedLayout;
