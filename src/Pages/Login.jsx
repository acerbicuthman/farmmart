import React, { useState, useContext } from "react";
import "../Styles/login.css";
import { AuthContext } from "../context/Authcontext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../library/api";

const Login = () => {
  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });
  const { login, loading, setLoading } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleEdits = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading before the login attempt

    try {
      const response = await login(username, password);
      if (response) {
        alert("Login successful!");
        navigate("/");
        // Navigate on successful login
      }
      const { access, refresh } = response.data;

      // Store tokens in local storage (or secure cookie for better security)
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after login attempt
    }
  };

  return (
    <div>
      <h1 className="text-center m-5">Already Registered?</h1>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title cardTit mt-3 mb-3">
                RETURNING CUSTOMER
              </h3>
              <p>Please login if you have an account with us</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={userData.username}
                    onChange={handleEdits}
                    className="form-control"
                  />
                  <div className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={userData.password}
                    onChange={handleEdits}
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  <div className="text-center d-flex gap-3 align-items-center justify-content-center">
                    Login
                    {/* {loading && (
                      <div
                        className="spinner-border text-light p-1"
                        style={{
                          height: '1.7rem',
                          width: '1.7rem',
                          borderWidth: '4px',
                        }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )} */}
                  </div>
                </button>
                <div className="mt-3">
                  <a href="#" className="cardTit">
                    Forgot your Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title cardTit mt-3 mb-3">NEW CUSTOMER</h3>
              <div className="text-start">
                <p>
                  Don't Have an Account?{" "}
                  <span>
                    <Link to="/signup" className="fw-bold">
                      Sign Up
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
