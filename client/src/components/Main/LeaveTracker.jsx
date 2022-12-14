import React, { useState } from 'react'

const LeaveTracker = () => {

  const [projectinfo,setProjectInfo]=useState({
    project_name:"",
    project_category:"",
    client_email:"",
    contact_number:"",
    site_address:"",
    project_description:"",
    estimated_start_date:"",
    estimated_end_date:"",
    status:""
  });

  const onInputChange = (e) => {
    setProjectInfo({ ...projectinfo, [e.target.name]: e.target.value })
}


const onModalFormSubmit=(e)=>
{
    e.preventDefault();

}

  return (
    <div>
                  <form  onSubmit={onModalFormSubmit}>
           <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Project Name :</label>
            <div class="col-sm-10">
              <input class="form-control" type="text" name="project_name" placeholder="Enter Project Name" aria-label="default input example" 
              onChange={onInputChange}/>
            </div>
          </div>
          {/* <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Project Category: </label>
            <div class="col-sm-10">
              <select className='form-control' name="project_category" required onChange={onInputChange}>
                <option>Select</option>
                  {projectcat === undefined ? [] : projectcat.map((project) => (
                   <option value={project.id} key={project.id}>{project.project_category}</option>
                 ))}
               </select>
            </div>
          </div> */}
          <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Email Id: </label>
            <div class="col-sm-10">
              <input class="form-control" type="text" name="client_email" placeholder="Enter Client's Email Id" aria-label="default input example" 
               onChange={onInputChange}/>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Contact Number: </label>
            <div class="col-sm-10">
              <input class="form-control" type="text" name="contact_number" placeholder="Enter Client's Contact Number" aria-label="default input example"
                onChange={onInputChange}/>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Site Address: </label>
            <div class="col-sm-10">
              <input class="form-control" type="text" name="site_address" placeholder="Enter Client's Address" aria-label="default input example" 
               onChange={onInputChange}/>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Estimated Start date: </label>
            <div class="col-sm-3">
              <input type="date" class="form-control" name="estimated_start_date" placeholder="Last name" aria-label="Last name"
               onChange={onInputChange} id="start" />
            </div>
            <label for="staticName" class="col-sm-3  col-form-label" style={{ marginLeft: '5px' }}>Estimated end date: </label>
            <div class="col-sm-3">
              <input type="date" name="estimated_end_date" class="form-control" placeholder="Last name" aria-label="Last name" 
               onChange={onInputChange} id="end" />
            </div>
          </div>
          
          <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">Description :</label>
            <div class="col-sm-10">
              <textarea class="form-control" type="text" name="project_description" placeholder="Project Description" aria-label="default input example" rows="3"
               onChange={onInputChange}/>
            </div>
          </div>
          {/* <div style={{textAlign:'center'}}>
              <button type="submit" className="btn btn-primary">Submit</button>
          </div> */}

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
  )
}

export default LeaveTracker