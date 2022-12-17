import React from "react";

function UserProfileSettings() {
  const onFormSubmit = () => {
    alert("Why did you submitted the form?");
  };
  return (
    <>
      <div className="m-auto  md:px-40 ">
        <form onSubmit={onFormSubmit}>
          <div className="block p-5 rounded-lg shadow-lg bg-red-500 max-w-xl m-auto content-center text-center">

            <div className="bg-blue-300 mx-56 h-20 flex justify-center items-center text-center mb-3">
                Hello
            </div>   

            <div className="flex justify-center items-center text-center mb-3">
               <p className="text-2xl"> Swaraj Purekar </p>
            </div>

              <div className="flex form-group mb-3 items-center justify-center bg-yellow-300">
                <label>Date of Birth :</label> 
                <input
                  type="text"
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

              <div className="flex form-group mb-3 items-center justify-center bg-yellow-300">
                <label>Gender :</label> 
                <input
                  type="text"
                  className="form-control block
                  ml-11
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

              <div className="flex form-group mb-3 items-center justify-center bg-yellow-300">
                <label>Address :</label> 

               <textarea
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

              <div className="flex form-group mb-3 items-center justify-center bg-yellow-300">
                <label>Mobile No :</label> 
                <input
                  type="text"
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

              <div className="flex form-group mb-3 items-center justify-center bg-yellow-300">
                <label>Department :</label> 
                <input
                  type="text"
                  className="form-control block
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

              <div className="flex form-group mb-3 items-center justify-center bg-yellow-300">
                <label>Email :</label> 
                <input
                  type="text"
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
