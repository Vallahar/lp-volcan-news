import React from 'react';

import Sidebar from "../../components/SidebarComponent/Sidebar.js";

import './style.scss';

export const MainLayout = ({ children }) => {
  const [section] = React.useState("dashboard");
  return (<div className="main-container">
    <Sidebar
      sectionSelected={section}
    />
    <div className="main-content">
      {children}
    </div>
  </div>)
};
