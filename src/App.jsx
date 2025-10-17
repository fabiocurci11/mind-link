// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Login from "./components/Login";
import Signup from "./components/Signup";

// Varianti per le animazioni di entrata/uscita
const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};


const pageTransition = {
  type: "tween",
  duration: 0.3, // in secondi, più basso → più veloce
  ease: "easeInOut",
};


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      {/* Wrapper principale per gestire lo sfondo e le pagine assolute */}
      <div className="relative min-h-screen w-full bg-gray-900">
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
