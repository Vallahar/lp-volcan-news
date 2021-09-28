import React from 'react';

import Sidebar from "../../components/SidebarComponent/Sidebar.js";

import './style.scss';

export const MainLayout = ({ children }) => {
  const [section, setSection] = React.useState("dashboard");
  return (<div className="main-container w-full">
    <Sidebar
      sectionSelected={section}
    />
    <div className="main-layout-content">
      {children}
    </div>
  </div>)
};
