import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, reset_redirectLog } from "../../Redux/AuthSlice";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { redirectHome, redirectLog, isRegistration } = useSelector(
    (state) => state.content
  );
  const [myName, setMyName] = useState(" ");

  const myname = localStorage.getItem("first_name");

  useEffect(() => {
    setMyName(myname);
  }, [myname]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const validation = () => {
    let error = {};

    if (!user.email) {
      error.email = "Email is required";
    }
    if (!user.password) {
      error.password = "Password is required";
    }
    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "email") {
      if (value.trim().length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Email is required" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.trim().length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Password is required" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let data = {
      email: user.email,
      password: user.password,
    };
    dispatch(logIn(data));
  };

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let LoginDone = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      LoginDone && navigate("/");
    }
  };
  useEffect(() => {
    RedirectUser();
  }, [redirectHome]);

  useEffect(() => {
    dispatch(reset_redirectLog(null));
  }, [redirectLog]);

  return (
    <>
      <div className="form-makeup-sign">
        <div className="container-fluid">
         
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="login-form">
                <h2>Sign In</h2>
                <div className="form-group">
                  <label for="">Email:</label>
                  <input
                    type="email"
                   
                    name="email"
                    value={user?.email}
                    onChange={(e) => postUserData(e)}
                  />
                  <span style={{ color: "red" }}>{error?.email}</span>
                </div>

                <div className="form-group">
                  <label for="">Password:</label>
                  <input
                    type="password"
                    
                    name="password"
                    value={user?.password}
                    onChange={(e) => postUserData(e)}
                  />
                  <span style={{ color: "red" }}>{error?.password}</span>
                </div>
              
              <div>
                <button
                  type="submit"
                  onClick={Submit}
                  className="btn btn-primary"
                >
                  Sign In
                </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
