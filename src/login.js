import "./login.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import db from './db'
import axios from "axios";

function Login() {
  const [password, setPassword] = useState("");
  const [User, setUser] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const handleValidation = (event) => {
    let formIsValid = true;
    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };
  return (
    <div className="login">
      <div className="container">
        <div className="text-kmutnb-name">
          <h2> ระบบจัดการสารสนเทศ มจพ</h2>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="col-md-4 form-login">
            <h2>ลงชื่อเข้าใช้ด้วยบัญชี ICIT</h2>
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Student ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  name="text"
                  placeholder="ไม่ต้องใส่ @kmutnb.ac.th"
                  onChange={(event) => setUser(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <button type="submit" className="btn btn-primary ">
                Login
              </button>
            </form>
          </div>
          
        </div>
        <footer className="footer footer-text">
       Deverlopment by React
      </footer>
      </div>
    </div>
  );
}

export default Login;
