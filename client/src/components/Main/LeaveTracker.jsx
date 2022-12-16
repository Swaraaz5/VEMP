import React, { useEffect, useState } from 'react'
import axios from "axios";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";

const LeaveTracker = () => {
  const navigate = useNavigate();

  const userID = ls.get("empID");



  const [allLeaveDetails,setAllLeaveDetails]=useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/leave/leaveall`)
    .then((res) => {
        setAllLeaveDetails(res.data);
    });
  }, [])


const onModalFormSubmit=(e)=>
{
    e.preventDefault();

}

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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={leavedetails._id}>
              <th
                scope="row"
                className="capitalize py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {leavedetails.empdetails.firstname} {leavedetails.empdetails.lastname}
              </th>
              <th className="py-4 px-6">{leavedetails.leavetype}</th>
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
                  <p className={leavedetails.status==='approved'?"capitalize w-24 focus:outline-none text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2":"capitalize w-24 focus:outline-none text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"}>
                      {leavedetails.status}
                  </p>
              </td>

              <td>

              <button type="button" class="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800">Approve</button>


              <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default LeaveTracker