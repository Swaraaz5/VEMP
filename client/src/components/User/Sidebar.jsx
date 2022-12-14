import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import velocelogo from ""

function Sidebar({ sidebarshow}) {
  //Logout State and Function
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //Reports Dropdown Function
  const [showdrop, setShowDrop] = useState(false);
  const showEcommerce = () => {
    setShowDrop((current) => !current);
  };

  return (
    <>
      <aside aria-label="Sidebar">
        <div
          className={
            "overflow-y-auto py-4 px-3 h-screen rounded dark:bg-gray-800 md:block md:w-auto transition-all delay-200" +
            (sidebarshow ? " md:w-20 w-72" : " md:w-72 w-20")
          }
        >
          {/* <img src="img/velocelogo.png" alt="veloce logo" /> */}
          <img src={process.env.PUBLIC_URL + '/img/velocelogo.png'} alt="veloce logo" />

          <ul className="space-y-2 pt-3">
            <li>
              <NavLink
                to="/emp/dashboard-emp"
                className={({ isActive }) => {
                  return (
                    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 " +
                    (isActive
                      ? "bg-veloceblue text-yellow-50"
                      : "bg-sky-500 text-gray-900")
                  );
                }}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span
                  className={
                    "ml-3" +
                    (sidebarshow ? " block md:hidden" : " hidden md:block")
                  }
                >
                  Dashboard
                </span>
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/emp/attendance-emp"
                className={({ isActive }) => {
                  return (
                    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 " +
                    (isActive
                      ? "bg-veloceblue text-yellow-50"
                      : "bg-sky-500 text-gray-900")
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar-date-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                  <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                </svg>
                <span
                  className={
                    "ml-3" +
                    (sidebarshow ? " block md:hidden" : " hidden md:block")
                  }
                >
                  Attendace
                </span>
              </NavLink>
            </li>

     
            <li>
              <NavLink
                to="/emp/leave-tracker-emp"
                className={({ isActive }) => {
                  return (
                    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 " +
                    (isActive
                      ? "bg-veloceblue text-yellow-50"
                      : "bg-sky-500 text-gray-900")
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar-date-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                  <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                </svg>
                <span
                  className={
                    "ml-3" +
                    (sidebarshow ? " block md:hidden" : " hidden md:block")
                  }
                >
                  Leave Tracker
                </span>
              </NavLink>
            </li>

      

            <li>
              <button
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 "
                onClick={handleLogout}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  className={
                    "ml-3" +
                    (sidebarshow ? " block md:hidden" : " hidden md:block")
                  }
                >
                  Sign Out
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
