import React, { useEffect, useState } from "react";
import axios from "axios";
import ls from "localstorage-slim";

function Attendance() {
  const userID = ls.get("empID");

  const [attendance, setAttendance] = useState([]);
  const [checkIn, setCheckIn] = useState(true);
  const [checkOut, setCheckOut] = useState(false);

  useEffect(() => {
    //Read
    axios
      .get(`http://localhost:8080/api/attendance/read/${userID}`)
      .then((res) => {
        setAttendance(res.data);
      });

    //CheckIn
    axios
      .get(`http://localhost:8080/api/attendance/read/checkin/${userID}`)
      .then((res) => {
        if (res.data.length !== 0) {
          setCheckIn(true);
        } else {
          setCheckIn(false);
        }
      });

    //CheckOut
    axios
      .get(`http://localhost:8080/api/attendance/read/checkout/${userID}`)
      .then((res) => {
        if (res.data.length !== 0) {
          setCheckOut(false);
        } else {
          setCheckOut(true);
        }
        console.log("check out value"+res.data.length);
      });
  }, []);

  const onCheckIn = () => {
    axios
      .post("http://localhost:8080/api/attendance", { userid: ls.get("empID") })
      .then((res) => {
        window.location.reload(true)
      });
  };

  const onCheckOut = () => {
    axios
      .post(`http://localhost:8080/api/attendance/checkout/${userID}`)
      .then((res) => {
        window.location.reload(true)
      });
  };

  return (
    <div>
      <div className="grid justify-center md:flex md:justify-center my-8 ">
        <button
          type="button"

          className={checkIn?"w-64 text-white bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600":"w-64 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}


          onClick={onCheckIn}
          disabled={checkIn}
        >
          Check In
        </button>

        <button
          type="button"
          className={checkOut?"w-64 text-white bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600":"w-64 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}
          onClick={onCheckOut}
          disabled={checkOut}
        >
          Check Out
        </button>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg md:mx-16">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Date
              </th>
              <th scope="col" class="py-3 px-6">
                Check In Time
              </th>
              <th scope="col" class="py-3 px-6">
                Check Out Time
              </th>
              {/* <th scope="col" class="py-3 px-6">
                    Status
                </th> */}
            </tr>
          </thead>
          <tbody>
            {attendance.map((empattendance, key) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={empattendance._id}>
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {empattendance.date}
                </th>
                <td class="py-4 px-6">{empattendance.checkintime}</td>
                <td class="py-4 px-6">{empattendance.checkouttime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
