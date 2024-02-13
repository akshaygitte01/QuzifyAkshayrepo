import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel'; // Import TabPanel from MUI lab

// Define your content components
function TabContent1() {
  return <div>Content for Tab 1</div>;
}

function TabContent2() {
  return <div>Content for Tab 2</div>;
}

function TabContent3() {
  return <div>Content for Tab 3</div>;
}

export default function HorizontalScrollingNavBar() {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab index

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue); // Update active tab index when a tab is clicked
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="hello" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* Render content based on active tab index */}
      <TabPanel value={activeTab} index={0}>
        <TabContent1 />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <TabContent2 />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <TabContent3 />
      </TabPanel>
    </div>
  );
}
