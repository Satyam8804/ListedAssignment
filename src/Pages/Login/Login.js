import React  from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
import google from "../../Images/google-icon.png";
import apple from "../../Images/apple-icon.png";

// import Dashboard from "../Dashboard/Dashboard";

const Login = () => {


  return (
    <>
      <div className="main-container">
        <div className="box1">
          <span id="board">Board.</span>
        </div>
        <div className="box2">
          <div className="login-options">
            <div className="signIn">
              <div id="sign-text">
                <span>Sign In</span>
              </div>
              <span className="desc">Sign in to Your account</span>
            </div>
            <div className="login-with">
              <Link className="span">
                <div className="google-login" >
                  <img src={google} height={20} alt="logo" />
                  <span>Sign in with Google</span>
                </div>
              </Link>
              <Link className="span">
                <div className="apple-login" >
                  <img src={apple} height={20} alt="logo" />
                  <span className="span">Sign in with Apple</span>
                </div>
              </Link>
            </div>

            <div className="form">
              <form >
                <div className="form-element">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" />
                  <label htmlFor="Password">Password</label>
                  <input type="password" id="password" name="Password" />
                  <Link  className="link">
                    Forgot Password?
                  </Link>
                  <Link to ='/dashboard'>
                  <input type="submit"  value="Sign In"/>
                  </Link>
                </div>
              </form>
            </div>
            <div className="register-link">
              {" "}
              Don't have an account?<Link to= "/dashboard" className="link"> Register here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
