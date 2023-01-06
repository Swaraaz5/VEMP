import React, { useEffect, useState } from "react";
import axios from "axios";
import ls from "localstorage-slim";
import moment from "moment";

const profileimgpath = "/profiles/";

function Dashboard() {
  const id = ls.get("empID");

    //State For Reading Employee Data
    const [empDataWithPhoto, setEmpDataWithPhoto] = useState([]);

    const [empPhoto, setEmpPhoto] = useState([]);
  
    const [empDetails, setEmpDetails] = useState({
      userid: ls.get("empID"),
      photo: "",
    });
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/adduserphoto/finduserwithphoto/${id}`)
        .then((res) => {
          setEmpDataWithPhoto(res.data[0].empdetails);
          setEmpPhoto(res.data[res.data.length-1]);
        });
    }, []);
  
    //Setting up input data
    const handlePhoto = (e) => {
      setEmpDetails({
        ...empDetails,
        id: ls.get("empID"),
        photo: e.target.files[0],
      });
      // console.log(empDetails.photo);
    };

  return (
    <div className="m-auto  md:px-40 ">
    <form encType="multipart/form-data">
      <div className="mx-4 grad-color block p-5 rounded-lg shadow-lg max-w-xl md:m-auto content-center text-center">
        <div className="bg-blue-300 m-auto md:m-auto w-24 h-24 flex justify-center items-center text-center mb-3 rounded-full">
          <img
            className="rounded-full w-24 h-24"
            src={profileimgpath + empPhoto.photo}
            alt="Employee Photo"
          />
        </div>

        <div className="flex justify-center items-center text-center mb-3">
          <p className="text-2xl">
            {" "}
            {empDataWithPhoto.firstname} {empDataWithPhoto.lastname}{" "}
          </p>
        </div>

        <div className="flex form-group mb-3 items-center justify-center">
          <label className="">Date of Birth</label>
          <input
            type="text"
            value={moment(empDataWithPhoto.dob).format("DD/MM/YYYY")}
            disabled
            className="form-control block
                md:w-2/3
                w-2/3
                mx-2
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
          />
        </div>

        <div className="flex form-group mb-3 items-center justify-center">
          <label>Gender</label>
          <input
            type="text"
            value={empDataWithPhoto.gender}
            disabled
            className="form-control block
              ml-11
              capitalize
                md:w-2/3
                w-2/3
                mx-2
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
          />
        </div>

        <div className="flex form-group mb-3 items-center justify-center">
          <label>Address</label>

          <textarea
            value={empDataWithPhoto.address}
            disabled
            className="
                form-control
                block
                ml-10
                md:w-2/3
                w-2/3
                mx-2
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlTextarea13"
            rows={3}
            placeholder="Message"
            defaultValue={""}
          />
        </div>

        <div className="flex form-group mb-3 items-center justify-center">
          <label>Mobile No</label>
          <input
            type="text"
            value={empDataWithPhoto.mobile}
            disabled
            className="form-control block
                md:w-2/3
                ml-5
                w-2/3
                mx-2
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
          />
        </div>

        <div className="flex form-group mb-3 items-center justify-center">
          <label>Department</label>
          <input
            type="text"
            value={empDataWithPhoto.department}
            disabled
            className="form-control block
              capitalize
                md:w-2/3
                w-2/3
                mx-2
                ml-3
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
          />
        </div>

        <div className="flex form-group mb-3 items-center justify-center">
          <label>Email</label>
          <input
            type="text"
            value={empDataWithPhoto.email}
            disabled
            className="form-control block
                md:w-2/3
                w-2/3
                mx-2
                ml-14
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
          />
        </div>


      </div>
    </form>
  </div>
  )
}

export default Dashboard