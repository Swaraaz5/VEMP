import React, { useEffect, useState } from "react";
import axios from "axios";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";

function LeaveDetails() {
  const navigate = useNavigate();

  const userID = ls.get("empID");

  const onAddLeave = () => {
    navigate("/emp/leave-tracker-emp");
  };

  const [allLeaveDetails,setAllLeaveDetails]=useState([]);
  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/leave/read/${userID}`)
    .then((res) => {
        setAllLeaveDetails(res.data);
    });
  }, [])
  

  return (
    <div>
      <div className="grid justify-center md:flex md:justify-center my-8 ">
        <button
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          onClick={onAddLeave}
        >
          Add Leave
        </button>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg md:mx-16">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {allLeaveDetails.map((leavedetails, key) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={leavedetails._id}>
                <th
                  scope="row"
                  className="capitalize py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {leavedetails.leavetype}
                </th>
                <td className="py-4 px-6">{leavedetails.reason}</td>
                <td className="py-4 px-6">
                    {new Date(leavedetails.fromdate).getDate()}-
                    {new Date(leavedetails.fromdate).getMonth()+1}-
                    {new Date(leavedetails.fromdate).getFullYear()}
                    </td>
                <td className="py-4 px-6">
                {new Date(leavedetails.todate).getDate()}-
                    {new Date(leavedetails.todate).getMonth()+1}-
                    {new Date(leavedetails.todate).getFullYear()}
                </td>

                <td className="py-4 px-6 ">
                    <p 
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveDetails;
