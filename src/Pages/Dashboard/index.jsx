import React from 'react';
import { Outlet } from 'react-router-dom';

import NavMobile from '../../Components/Navbar/Mobile';

const Dashboard = () => {
  return (
    <div>
      <NavMobile />

      <Outlet />
    </div>
  );
};

export default Dashboard;
