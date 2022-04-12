import React from 'react';

import Nav from './Mobile.styled';
// import { ReactComponent as BackIcon } from '../../../Asset/icons/circle-left-solid.svg';

const NavMobile = () => {
  return (
    <Nav.Container>
      <Nav.LeftArrowSolid />
      <Nav.Input type="text" placeholder="search here" />
      <Nav.BarsSolid />
    </Nav.Container>
  );
};

export default NavMobile;
