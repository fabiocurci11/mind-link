// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Profilo from "./components/dashboard-components/Profilo";
import Home from "./components/dashboard-components/Home";

// Varianti per le animazioni
const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  type: "tween",
  duration: 0.3,
  ease: "easeInOut",
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Disattiva l’animazione se siamo dentro /dashboard/*
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={isDashboardRoute ? "dashboard" : location.pathname}>
        <Route
          path="/login"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="absolute inset-0 bg-gray-900"
            >
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/signup"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="absolute inset-0 bg-gray-900"
            >
              <Signup />
            </motion.div>
          }
        />

        {/* Dashboard con nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          {/* Se digiti /dashboard → redirect automatico su /dashboard/home */}
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="profilo" element={<Profilo />} />
        </Route>


      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <div className="relative min-h-screen w-full bg-gray-900 text-center">
      <AnimatedRoutes />
    </div>
  </Router>
);

export default App;
