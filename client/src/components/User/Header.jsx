import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import ls from "localstorage-slim";

function Header({ toggleNav }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookie.remove("EmpData");
    navigate("/emplogin");
    ls.remove("empID");
  };

  const [profileHS, setProfileHS] = useState(false)
  const toggleProfileHS = () => {
    console.log("sadasda")
    setProfileHS(current => !current)
  }
  return (
    <Fragment>
      <nav class="relative px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex">
        <button
          onClick={toggleNav}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div class="container flex items-center justify-end mx-auto">

          {/* User Profile Dropdown */}
        <div class="flex items-center">
          <button
            onClick={()=>toggleProfileHS()}
            type="button"
            className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-12 h-8 rounded-full" src="/img/profile-default.png" alt="user photo" />
          </button>

          <div
            className={"absolute top-14 right-16 z-50 block my-4 text-base list-none divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 bg-yellow-300 " + (profileHS ? " block" : "hidden")}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">
                Swaraj Purekar
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                swaraj@gmail.com
              </span>
            </div>
            <ul class="py-1" aria-labelledby="user-menu-button">

              <li>
                <NavLink
                  to="/emp/profile-emp"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Profile Settings
                </NavLink>
              </li>
               {/* <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li> */}
            </ul>
          </div>
        </div>



        {/* Logout Button */}
          <div class=" w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
