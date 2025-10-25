import React from 'react';
import ButtonUI from '../ui/ButtonUI';
import { useNavigate } from "react-router-dom";


const Header = ({ setSidebarOpen }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("click")
    setSidebarOpen(true);
    //setIsSidebarOpen(!isSidebarOpen)
  };

  const handleLogout = () => {
    console.log("logout")
    localStorage.clear();
    navigate("/login");
    
  };
  

  return (
    <header className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Bottone menu mobile */}
        <button
          onClick={() => handleClick()}
          className="text-gray-200 focus:outline-none lg:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h1 className="text-lg font-medium">Benvenuto, Dott. Rossi</h1>
      </div>



      <ButtonUI
        onClick={() => handleLogout()}
        textProp="Logout"
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-medium transition-colors"


      />

    </header>
  );
};

export default Header;