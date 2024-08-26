import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../Redux/AuthSlice";
import "./Register.css";

export default function Register() {
  const { redirectLog } = useSelector((state) => state.content);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "Enter your firstname";
    }
    if (!user.last_name) {
      error.last_name = "Enter your lastname";
    }
    if (!user.email) {
      error.email = "Enter your email";
    }
    if (!user.password) {
      error.password = "Enter your password";
    }
    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "first_name") {
      if (value.trim().length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "Please enter your firstname" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: " " });
      }
    }
    if (name === "last_name") {
      if (value.trim().length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "Please enter your lastname" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: " " });
      }
    }
    if (name === "email") {
      if (value.trim().length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Please enter your email" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.trim().length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Please enter password" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profile_pic", img);
    dispatch(register(formData));
  };
  const RedirectUser = () => {
    let first_name = localStorage?.getItem("first_name");
    let IsRegistrationdone =
      window.location.pathname.toLowerCase() === "/register";

    if (first_name !== null && first_name !== undefined && first_name !== "") {
      IsRegistrationdone && navigate("/login");
    }
  };
  useEffect(() => {
    RedirectUser();
  }, [redirectLog]);
  return (
    <>
      <div className="form-makeup">
        <div className="container-fluid">
          <div className="row justify-content-center text-align-center">
            <div className="col-lg-12">
              <div className="signup-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                  <label for="">First Name:</label>
                  <br />
                  <input
                    type="text"
                    name="first_name"
                    value={user?.first_name}
                    onChange={(e) => postUserData(e)}
                  />
                  <span style={{ color: "red" }}>{error?.first_name}</span>
                </div>

                <div className="form-group">
                  <label for="">Last Name:</label>
                  <br />
                  <input
                    type="text"
                    name="last_name"
                    value={user?.last_name}
                    onChange={(e) => postUserData(e)}
                  />
                  <span style={{ color: "red" }}>{error?.last_name}</span>
                </div>

                <div className="form-group">
                  <label for="">Email:</label>
                  <br />
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
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={user?.password}
                    onChange={(e) => postUserData(e)}
                  />
                  <span style={{ color: "red" }}>{error?.password}</span>
                </div>

                <div className="form-group">
                  <label for=" ">Image</label>
                  <input
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                    name="img"
                    accept="profile_pic/*"
                  />
                  <span style={{ color: "red", marginLeft: "24px" }}>
                    {error?.img}
                  </span>
                </div>

                <div>
                  <button
                    className="btn btn-warning text-white"
                    onClick={Submit}
                  >
                    Submit
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
