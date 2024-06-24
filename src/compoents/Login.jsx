// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";
import PropTypes from "prop-types";

const Login = ({ setRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newRole, setNewRole] = useState("admin");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(newRole)
    axios
      .post("http://localhost:3001/auth/login", { username, password, "role":newRole })
      .then((res) => {
        console.log(res.data)
        if (res.data.login && res.data.role === "admin") {
          setRole("admin");
          navigate("/dashboard");
        } else if (res.data.login && res.data.role === "owner") {
          setRole("owner");
          navigate("/dashboard");
        }
        console.log(res);
      })
      .catch((err) => console.error("Error during login:", err));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Changed div to form */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              id="role"
              onChange={(e) => setNewRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="owner">Owner</option>
            </select>
          </div>
          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setRole:PropTypes.func.isRequired,
};

export default Login;
