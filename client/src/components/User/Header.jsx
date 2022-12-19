import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import ls from "localstorage-slim";
import axios from "axios";


function Header({ toggleNav }) {
  const id = Cookie.get("EmpData");
  const [empPhoto, setEmpPhoto] = useState([]);

  const profileimgpath = "/profiles/";

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/adduserphoto/finduserwithphoto/${id}`)
      .then((res) => {
        if(res.data.length===0)
        {
          setEmpPhoto({...empPhoto,photo:'null'})
        }
        else
        {
        setEmpPhoto(res.data[res.data.length-1]);
      }
      });
  }, []);

  const imgname=empPhoto.photo;

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookie.remove("EmpData");
    navigate("/emplogin");
    ls.remove("empID");
  };

  const [profileHS, setProfileHS] = useState(false)
  const toggleProfileHS = () => {
    setProfileHS(current => !current)
  }





  return (
    <Fragment>
      <nav className="relative px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex justify-between w-full">
        <button
          onClick={toggleNav}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
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

        <div className="flex items-center">

          {/* User Profile Dropdown */}
        <div className="flex items-center">
          <button
            onClick={()=>toggleProfileHS()}
            type="button"
            className="flex md:mr-3 text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-10 h-10 rounded-full" 
            src={empPhoto.photo==="null"?'/img/profile-default.png':profileimgpath+imgname}   
            alt="user photo" />
          </button>

          <div
            className={"absolute top-16 md:top-14 right-18 z-50 block my-4 text-base list-none divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 bg-yellow-300 " + (profileHS ? " block" : "hidden")}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Swaraj Purekar
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                swaraj@gmail.com
              </span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">

              <li>
                <NavLink
                  to="/emp/profile-emp"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Profile Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>



        {/* Logout Button */}
          <div className="w-full md:block md:w-auto" id="navbar-dropdown">

            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={handleLogout}
                >
            {/* {process.env.PUBLIC_URL+profileimgpath + empPhoto.photo}  */}
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
