import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../User/Sidebar";
import Header from "../User/Header";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ls from 'localstorage-slim';

const Layout = () => {
  ls.config.encrypt = true;
  const [searchparams]=useSearchParams();
  const [userData,setUserData]=useState();
  const [sidebarshow, setSideBarShow] = useState(false);

  const toggleNav = () => {
    setSideBarShow((current) => !current);
  }; 


  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/adduser/finduser/${searchparams.get("id")}`)
      .then((res) => {
        setUserData(res.data) //Not using this data anymore
        ls.set('empID',res.data._id)
      });
    }, [])


  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar sidebarshow={sidebarshow} />
        </div>
        <main className="w-full overflow-y-auto">
          <Header toggleNav={toggleNav} />

          <Outlet/>

        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
