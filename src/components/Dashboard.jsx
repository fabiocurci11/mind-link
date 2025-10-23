import React, { useState } from 'react';
import Sidebar from './dashboard-components/Sidebar';
import Header from './dashboard-components/Header';
import Section from './dashboard-components/Section';
const Dashboard = () => {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarStatus = (data) => {
    setIsSidebarOpen(data);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-900 text-gray-100">
         {/* Overlay mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

      <Sidebar isSidebarOpen={isSidebarOpen} /> 

      <div className="flex flex-col flex-1 min-h-screen">
        <Header setSidebarOpen={handleSidebarStatus}/>
        
        <Section/>

      </div>



      </div>
    </>
  );
};

export default Dashboard;