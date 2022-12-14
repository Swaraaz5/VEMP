import React, { useEffect, useState } from "react";
import axios from "axios";

function AllUserDetails() {
  // Edit Employee Functions and States
  const [updateEmp, setUpdateEmp] = useState({});

  const [showModal, setShowModal] = useState(false);

  const showEditModal = (id) => {
    setShowModal((current) => !current);
    console.log("User ID is " + id);

    axios
      .get(`http://localhost:8080/api/adduser/finduser/${id}`)
      .then((res) => {
        setUpdateEmp(res.data);
        // console.log('User Data FindOne = '+updateEmp.firstname);
      });
  };

  const closeEditModal = () => {
    setShowModal(false);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/adduser/readuser").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const deleteUserDetails = (id) => {
    axios
      .delete(`http://localhost:8080/api/adduser/deleteuser/${id}`)
      .then((res) => {
        window.location.reload(false);
      });
  };

  const onInputChange = (e) => {
    setUpdateEmp({ ...updateEmp, [e.target.name]: e.target.value });
  };

  const onModalFormSubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/adduser/edituser/${updateEmp._id}`,updateEmp)
    .then((res)=>{
        alert('Data Updated Successfully');
        window.location.reload(false);
    })
    // console.log("Modal Data ID = " + updateEmp._id);
    // console.log("Modal Data = " + updateEmp.firstname);
    // console.log("Modal Data = " + updateEmp.lastname);
    // console.log("Modal Data = " + updateEmp.dob);
    // console.log("Modal Data = " + updateEmp.gender);
    // console.log("Modal Data = " + updateEmp.address);
    // console.log("Modal Data = " + updateEmp.mobile);
    // console.log("Modal Data = " + updateEmp.department);
    // console.log("Modal Data = " + updateEmp.role);
    // console.log("Modal Data = " + updateEmp.email);
    // console.log("Modal Data = " + updateEmp.password);
  };

  return (
    <div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Employee Name
              </th>
              <th scope="col" class="py-3 px-6">
                Mobile
              </th>
              <th scope="col" class="py-3 px-6">
                Department
              </th>
              <th scope="col" class="py-3 px-6">
                Role
              </th>
              <th scope="col" class="py-3 px-6">
                Email
              </th>

              <th scope="col" class="py-3 px-6" colSpan={2}>
                <span class="sr-only btn btn-primary">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.firstname} {user.lastname}
                </th>

                <td class="py-4 px-6">{user.mobile}</td>
                <td class="py-4 px-6 capitalize ">{user.department}</td>
                <td class="py-4 px-6">{user.role}</td>
                <td class="py-4 px-6">{user.email}</td>
                <td class="py-4 px-6 text-right">
                  <button
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button"
                    data-modal-toggle="authentication-modal"
                    onClick={() => showEditModal(user._id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="submit"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => deleteUserDetails(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>





      {/* ********************************** Edit Employee Modal Form ******************************************* */}
      <div
        class={
          "modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto" +
          (showModal ? " block bg-gray-300 bg-opacity-60" : " hidden")
        }
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current md:w-3/6 md:ml-96 mt-8 mx-5">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Edit Employee
              </h5>

              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                // data-bs-dismiss="modal"
                onClick={closeEditModal}
              >
                Close
              </button>
            </div>

            {/* Modal Body -> Form is here */}
            <div class="modal-body relative p-4">
              <form onSubmit={onModalFormSubmit}>
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
                      value={updateEmp.firstname}
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
                      value={updateEmp.lastname}
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
                      value={updateEmp.dob}
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
{/* 
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last Name"
                      disabled
                      value={updateEmp.gender}
                    />  */}

                     <input
                      id="default-radio-1"
                      type="radio"
                      value="male"
                      name="gender"
                      onChange={onInputChange}
                      checked={updateEmp.gender=="male"?'checked':null}
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
                      checked={updateEmp.gender=="female"?'checked':null}

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
                  value={updateEmp.address}
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
                      value={updateEmp.mobile}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    <div id="dropdown">
                      <select
                        value={updateEmp.department}
                        onChange={onInputChange}
                        name="department"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      >
                        <option value="">Select Department</option>
                        <option value="development">Development Team</option>
                        <option value="iot">IoT Team</option>
                      </select>
                    </div>
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
                      value={updateEmp.role}
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
                      value={updateEmp.email}
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
                      value={updateEmp.password}
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
                    Save Changes
                  </button>
                </div>
                {/* 
                <div class="modal-footer grid grid-cols-2 p-4 border-t border-gray-200 rounded-b-md">
                  <div className="flex justify-end"></div>

                  <div className="flex justify-end"></div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUserDetails;
