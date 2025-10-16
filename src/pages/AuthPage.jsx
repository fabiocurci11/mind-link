import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      {isLogin ? (
        <Login onSwitchToSignup={toggleAuthMode} />
      ) : (
        <Signup onSwitchToLogin={toggleAuthMode} />
      )}
    </>
  );
};

export default AuthPage;
