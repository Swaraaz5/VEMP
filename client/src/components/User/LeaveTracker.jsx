import React, { useState } from "react";
import axios from "axios";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";

function LeaveTracker() {

  const navigate=useNavigate();

  const userId = ls.get("empID");
  const [data, setData] = useState({
    leaveType: "",
    reason: "",
    fromDate: "",
    toDate: "",
  });


  const onOptionChangeHandler = (e) =>{
    setData({ ...data, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/leave/store", { userId: userId,leaveType:data.leaveType,reason:data.reason,fromDate:data.fromDate,toDate:data.toDate })
      .then((res) => {
        navigate('/emp/leave-all')
      });
  };

  
  return (
    <>
  
      <form onSubmit={handleSubmit} className="mx-24 mt-10">
      <div className="flex justify-center">

    </div>

        <div class="mb-4 mt-8 ml-12 mr-12">
          <select
            onChange={onOptionChangeHandler}
            name="leaveType"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          >
            <option value="">Select Reason for leave</option>
            <option value="sick">Sick Leave</option>
            <option value="casual ">Casual Leave</option>
            <option value="paid">Paid Leave</option>
            <option value="maternity">Maternity Leave</option>
          </select>
        </div>
        <div class="mb-4 mt-8 ml-12 mr-12">
          <label
            for="reason"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Reason for Leave
          </label>
          <textarea
            name="reason"
            id="reason"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            onChange={onOptionChangeHandler}
            // value={data.reason}
            placeholder="Reason...."
            required
          />
        </div>

        <div class="grid grid-cols-2 gap-8 m-8">
          <div class="m-5">
            <div class="mb-6">
              <label
                for="fromDate"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                From Date
              </label>
              <input
                type="date"
                name="fromDate"
                id="fromDate"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={onOptionChangeHandler}
                // value={data.fromDate}
                required
              />
            </div>
          </div>
          <div class="m-5">
            <div class="mb-6">
              <label
                for="toDate"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                To Date
              </label>
              <input
                type="date"
                name="toDate"
                id="toDate"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={onOptionChangeHandler}
                // value={data.toDate}
                required
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>
    </>
  );
}

export default LeaveTracker;
