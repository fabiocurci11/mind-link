import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./dashboard-components/Sidebar";
import Header from "./dashboard-components/Header";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarStatus = (data) => setIsSidebarOpen(data);

  const location = useLocation();

  // Varianti di animazione per le sottorotte
  const pageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.25,
    ease: "easeInOut",
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-col flex-1 min-h-screen">
        <Header setSidebarOpen={handleSidebarStatus} />

        {/* Qui vengono renderizzate le sottorotte con animazione */}
        <main className="flex-1 p-6 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} // cambia la key ad ogni sottorotta
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="absolute inset-0"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
