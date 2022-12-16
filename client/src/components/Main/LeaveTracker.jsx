import React, { useEffect, useState } from "react";
import axios from "axios";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";

const LeaveTracker = () => {
  const navigate = useNavigate();

  const userID = ls.get("empID");

  const [allLeaveDetails, setAllLeaveDetails] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [dataForModal, setDataForModal] = useState([]);

  const [statusData,setStatusData]=useState({
    status:"",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/leave/leaveall`).then((res) => {
      setAllLeaveDetails(res.data);
    });
  }, []);

  const showEditModal = (id) => {
    setShowModal((current) => !current);
    axios
      .post(`http://localhost:8080/api/leave/leavebyid/${id}`)
      .then((res) => {
        setDataForModal(res.data);
      });
  };

  const closeEditModal = () => {
    setShowModal(false);
  };


  const onInputChange = (e) => {
    setStatusData({ ...statusData, [e.target.name]: e.target.value });
  };

  const onModalFormSubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/leave/leavestatusupdate/${dataForModal._id}`,statusData)
    .then((res)=>{
      axios.get(`http://localhost:8080/api/leave/leaveall`).then((res) => {
        setAllLeaveDetails(res.data);
      });
      setShowModal(false);
    })
  };

  return (
    <div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg md:mx-16 mt-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Employee Name
              </th>
              <th scope="col" class="py-3 px-6">
                Leave Type
              </th>
              <th scope="col" class="py-3 px-6">
                Reason
              </th>
              <th scope="col" class="py-3 px-6">
                From
              </th>
              <th scope="col" class="py-3 px-6">
                To
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allLeaveDetails.map((leavedetails, key) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={leavedetails._id}
              >
                <th
                  scope="row"
                  className="capitalize py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {leavedetails.empdetails.firstname}{" "}
                  {leavedetails.empdetails.lastname}
                </th>
                <th className="py-4 px-6">{leavedetails.leavetype}</th>
                <td className="py-4 px-6">{leavedetails.reason}</td>
                <td className="py-4 px-6">
                  {new Date(leavedetails.fromdate).getDate()}-
                  {new Date(leavedetails.fromdate).getMonth() + 1}-
                  {new Date(leavedetails.fromdate).getFullYear()}
                </td>
                <td className="py-4 px-6">
                  {new Date(leavedetails.todate).getDate()}-
                  {new Date(leavedetails.todate).getMonth() + 1}-
                  {new Date(leavedetails.todate).getFullYear()}
                </td>

                <td className="py-4 px-6 ">
                  <p
                    // className={
                    //   leavedetails.status === "approved"
                    //     ? "capitalize w-24 focus:outline-none text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    //     : "capitalize w-24 focus:outline-none text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"

                        className={
                          leavedetails.status === "pending"
                            ? "capitalize w-24 focus:outline-none text-white bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2": 
                            leavedetails.status==="approved"?"capitalize w-24 focus:outline-none text-white bg-approved font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2":
                            leavedetails.status === "rejected"?"capitalize w-24 focus:outline-none text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2":' '
                    }
                  >
                    {leavedetails.status}
                  </p>
                </td>

                <td>
                  <button
                    type="button"
                    class="text-white bg-veloceblue hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={() => showEditModal(leavedetails._id)}
                  >
                    Update Status
                  </button>

                  {/* <button
                    type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Reject
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
                Leave Details
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
                      From Date
                    </label>
                    <input
                      type="date"
                      id="fromdate"
                      name="fromdate"
                      disabled
                      value={dataForModal.fromdate}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="First Name"
                    />
                  </div>

                  <div class="relative z-0 mb-6 w-full group">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      To Date
                    </label>
                    <input
                      type="date"
                      id="todate"
                      name="todate"
                      disabled

                      value={dataForModal.todate}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div class="relative z-0 mb-6 w-full group">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Leave Type
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    disabled

                    value={dataForModal.leavetype}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                  />
                </div>

                {/* -----------------------------------Address----------------------------------- */}
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Leave Reason
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  value={dataForModal.reason}
                  disabled

                  className="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Address"
                ></textarea>

                <div class="relative z-0 mb-6 w-full group">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <select
                    onChange={onInputChange}
                    name="status"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  >
                    <option value="">Change Status</option>
                    <option value="approved">Approve</option>
                    <option value="rejected">Reject</option>
                  </select>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveTracker;
