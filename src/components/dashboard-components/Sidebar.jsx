import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 px-4 py-8 overflow-y-auto bg-white border-r 
      dark:bg-gray-900 dark:border-gray-700 transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 lg:static lg:inset-0`}
    >
      {/* Logo */}
      <div className="flex justify-center">
        <img
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/logo.svg"
          alt="Logo"
        />
      </div>

      {/* Search */}
      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 
              3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 
              6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md 
          dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 
          focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 
          focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      {/* Nav */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {/* HOME */}
          <NavLink
            to="/dashboard/home"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-2 rounded-md transition-colors duration-300 ${
                isActive
                  ? "bg-gray-800 text-blue-400 font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              }`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9.85714L12 3L21 9.85714V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.85714Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-4 font-medium">HOME</span>
          </NavLink>

          {/* Profilo */}
          <NavLink
            to="/dashboard/profilo"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 rounded-md transition-colors duration-300 ${
                isActive
                  ? "bg-gray-800 text-blue-400 font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              }`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 
                11 8 9.20914 8 7C8 4.79086 9.79086 3 12 
                3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 
                21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-4 font-medium">Profilo</span>
          </NavLink>
        </nav>

        {/* Profilo utente in basso */}
        <a href="#" className="flex items-center px-4 -mx-2 mt-6">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=80&q=80"
            alt="avatar"
          />
          <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
            John Doe
          </span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
