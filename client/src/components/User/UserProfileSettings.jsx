import React, { useEffect, useState } from "react";
import axios from "axios";
import ls from "localstorage-slim";
import moment from "moment"

function UserProfileSettings() {
  const id = ls.get("empID");

  //State For Reading Employee Data
  const [empDetails, setEmpDetails] = useState({
    id:ls.get("empID"),
    photo:'',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/adduser/finduser/${id}`)
      .then((res) => {
        setEmpDetails(res.data);
      });
  }, []);

  //Setting up input data
  const handlePhoto=(e)=>{
    setEmpDetails({...empDetails,id:ls.get('empID'),photo:e.target.files[0]});
    console.log(empDetails.photo);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData=new FormData();

    formData.append('userid',empDetails.id)
    formData.append('photo',empDetails.photo)

    console.log('After Form submit data user ID =>',empDetails.id);
    console.log('After Form submit data photo =>',empDetails.photo);

    axios.post('http://localhost:8080/api/adduserphoto',formData)
    .then((res)=>{
      
    })


  };
  return (
    <>
      <div className="m-auto  md:px-40 ">
        <form onSubmit={onFormSubmit} encType='multipart/form-data'>
          <div className="mx-4 grad-color block p-5 rounded-lg shadow-lg max-w-xl md:m-auto content-center text-center">
            <div className="bg-blue-300 m-auto md:m-auto w-24 h-24 flex justify-center items-center text-center mb-3 rounded-full">
              Hello
            </div>

            <div className="flex justify-center items-center text-center mb-3">
              <p className="text-2xl">
                {" "}
                {empDetails.firstname} {empDetails.lastname}{" "}
              </p>
            </div>

            <div className="flex form-group mb-3 items-center justify-center">
              <label className="">Date of Birth</label>
              <input
                type="text"
                value={moment(empDetails.dob).format("DD/MM/YYYY")}
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
                value={empDetails.gender}
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
                value={empDetails.address}
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
                value={empDetails.mobile}
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
                value={empDetails.department}
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
                value={empDetails.email}
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

            <div className="flex form-group mb-3 items-center justify-center">
              <label>Profile</label>

              <input
                className="block w-2/3 mx-2 ml-12 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                onChange={handlePhoto}
                accept=".png .jpg .jpeg"
              ></input>

            </div>

            <button
              type="submit"
              className="
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserProfileSettings;
