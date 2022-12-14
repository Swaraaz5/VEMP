import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {

  const [error, setError] = useState("");
	const navigate = useNavigate();


  // const [showdrop, setShowDrop] = useState(false);
  // const showDepartment = () => {
  //   setShowDrop((current) => !current);
  // };

  const [inputField, setInputField] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    address: "",
    mobile: "",
    department: "",
    role: "",
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
		try {
			const url = "http://localhost:8080/api/adduser/adduser";
			const { inputField: res } = await axios.post(url, inputField);
			navigate("/all-user");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}

  };

  return (
    <>
      <div className="m-auto md:mt-5 md:px-40 ">
  
        <form onSubmit={onFormSubmit}>

          <div className="msgerrr">
            {error}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                // required
                // value={inputField.firstname}
                onChange={onInputChange}
              />
            </div>

            <div class="relative z-0 mb-6 w-full group">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                // required
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="DOB"
                // required
                onChange={onInputChange}
              />
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>

              <input
                id="default-radio-1"
                type="radio"
                value="male"
                name="gender"
                onChange={onInputChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Male
              </label>

              <input
                id="default-radio-2"
                type="radio"
                value="female"
                name="gender"
                onChange={onInputChange}
                className="w-4 h-4 ml-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Female
              </label>
            </div>
          </div>

          {/* -----------------------------------Address----------------------------------- */}
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            rows="4"
            className="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Address"
            onChange={onInputChange}
          ></textarea>

          {/* -----------------------------------Mobile, Department and Role----------------------------------- */}
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="mobile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile Number
              </label>
              <input
                type="mobile"
                id="mobile"
                name="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // required
                placeholder="000-0000-000"
                onChange={onInputChange}
              />
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Department
              </label>
              {/* <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className=" w-full justify-center mx-auto content-center text-black-500 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={showDepartment}
              >
                Select Department{" "}
                <svg
                  class="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button> */}

              <div
                id="dropdown"
                // className={"z-50 relative" + (showdrop ? " block" : " hidden")}
              >
                <select
                  onChange={onInputChange}
                  name="department"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                >
                  <option value="">Select Department</option>
                  <option value="development">Development Team</option>
                  <option value="iot">IoT Team</option>
                </select>

                {/* <ul
                  className="py-1 text-sm bg-white text-gray-700 dark:text-gray-200 absolute top-0 z-50"
                  aria-labelledby="dropdownDefault"
                  onChange={onInputChange}
                >
                  <li className="w-72 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                      Development Team
                    
                  </li>
                  <li className="w-72 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">

                      IoT Team
        
                  </li>
                </ul> */}
              </div>

              {/* <input
                type="text"
                id="department"
                name="department"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Department"
                // required
                onChange={onInputChange}
              /> */}
            </div>

            <div className="mb-6 w-full group">
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Role"
                // required
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 w-full group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="employee-name@velocetechinsights.com"
                // required
                onChange={onInputChange}
              />
            </div>

            <div className="mb-6 w-full group">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // required
                placeholder="Enter Password"
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
