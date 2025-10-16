import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin(!isLogin);

  // 🔥 Varianti dell’animazione
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };
  

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.div
            key="login"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <Login onSwitchToSignup={toggleAuthMode} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <Signup onSwitchToLogin={toggleAuthMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthPage;
