import React from "react";

import './styles.scss';

const TabsComponent = ({
  tabs,
  tabActivated,
  handleTabChange,
}) => {
  const getTabs = () => {
    if (tabs) {
      return tabs.map((tab) => {
        return (
          <button
            className={`tab py-4 px-6 block focus:outline-none ${tab.id === tabActivated ? 'activated' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.name}
          </button>
        );
      })
    }
  };

  return (
    <>
      <div id="tabs-component">
        <nav className="tabs-container">
          {getTabs()}
        </nav>
      </div>
    </>
  );
};

export default TabsComponent;
