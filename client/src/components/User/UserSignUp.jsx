import { useState } from "react";
import axios from "axios";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Cookie from 'js-cookie'

const UserSignUp = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/authuser";
      const { data: res } = await axios.post(url, data)
      .then((res) => {
        // Cookie.set('EmpData','EMployeeAccess')
        Cookie.set('EmpData',res.data._id)
        
        if(res.data.role==='employee')
        {
          alert('Employee Logged');

           navigate({
            pathname:"/emp",
            search:createSearchParams({
              id:res.data._id
            }).toString()
          });

        }
        else{
          alert('Admin Logged')
          navigate({
            pathname:"/dashboard",
            search:createSearchParams({
              id:"swaraj"
            }).toString()
          });
        }
      })
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div
      className={styles.login_container}
      style={{ backgroundImage: "url(img/empbg.png)" }}
    >
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <div className="bg-yellow-300 w-32 h-32 rounded-full mb-5">
              <img
                src="img/vwhite.png"
                alt="veloce logo"
                width="105"
                height="105"
                className="mt-8 ml-3"
              />
            </div>
            {/* <p className="text-gray-500">Login to Your Account</p> */}
            <p className="text-3xl mb-8">Employee Login</p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
