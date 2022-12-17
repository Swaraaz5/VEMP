import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Layout from "./components/Layout";
import AddUser from "./components/Main/AddUser";
import Dashboard from "./components/Main/Dashboard";
import LeaveTracker from "./components/Main/LeaveTracker";
import AllUserDetails from "./components/Main/AllUserDetails";
import AllLeaveDetails from "./components/Main/AllLeaveDetails";
import AllHolidaysDetails from "./components/Main/AllHolidaysDetails";
import Cookie from 'js-cookie'


import LayoutEmp from "./components/User/Layout";
import UserSignUp from "./components/User/UserSignUp";
import DashboardEmp from "./components/User/Dashboard";


import PageNotFound from "./components/PageNotFound";
import { useEffect } from "react";


import Attendance from "./components/User/Attendance";
import LeaveTrackerEmp from "./components/User/LeaveTracker";
import LeaveDetails from "./components/User/LeaveDetails";
import UserProfileSettings from "./components/User/UserProfileSettings";



function App() {
  const navigate = useNavigate()

  // const AdminAccess= Cookie.get('AdminData')
  const AcessControl = Cookie.get('EmpData');

  useEffect(() => {
      if(!AcessControl)
      {
        navigate('/emplogin');
      }
  },[])

  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/emplogin" exact element={<UserSignUp />} />

      {/* {(AdminAccess && AdminAccess === 'AdminAccess200') && */}
        <Route path="/" element={<Layout />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/leave-tracker" element={<LeaveTracker />} />
          <Route exact path="/all-user" element={<AllUserDetails />} />
          <Route exact path="/all-leaves" element={<AllLeaveDetails />} />
          <Route exact path="/all-holidays" element={<AllHolidaysDetails />} />

        </Route>
      {/* } */}

        {/* {(AcessControl && AcessControl === 'EMployeeAccess') &&  */}
          <Route path="/emp" element={<LayoutEmp />}>
            <Route index path="/emp/dashboard-emp" element={<DashboardEmp />}  />
            <Route exact path="/emp/leave-all" element={ <LeaveDetails/> }  />
            <Route exact path="/emp/leave-tracker-emp" element={<LeaveTrackerEmp/>} />
            <Route exact path="/emp/attendance-emp" element={<Attendance />} />
            <Route exact path="/emp/profile-emp" element={<UserProfileSettings/>} />

          </Route>
        {/* } */}
        
      <Route path="/emplogin" element={<Navigate replace to="/emplogin" />} />
      <Route path="*" element={<Navigate replace to="/emplogin" />}/>
      {/* <Route path="*" element={<PageNotFound/>}/> */}

    </Routes>
  );
}

export default App;
