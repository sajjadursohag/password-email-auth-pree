import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card bg-base-100 w-full m-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-5xl font-bold">Login now!</h3>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">
              <Link to="/register">Login</Link>
            </button>
          </fieldset>
        </form>
        <p>
                      New to our Website? Please <Link className="text-blue-400 underline" to="/register">Register</Link>
                    </p>
      </div>
    </div>
  );
};

export default Login;
