import React from 'react';

import Sidebar from "../../components/SidebarComponent/Sidebar.js";

import './style.scss';

export const MainLayout = ({ children }) => {
  return (<div className="main-container w-full">
    <Sidebar/>
    <div className="main-layout-content">
      {children}
    </div>
  </div>)
};
