import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log("register clicked", email, password, terms);

    // const length6Patern = /^.{6,}$/;
    // const casePattern = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    // const specialCharPattern = /[!@#$%^&*(),.?":{}|<>_\-+=]/;

    // if (!length6Patern.test(password)) {
    //   console.log("Password did not match");
    //   setError("Password  must be 6 character or long");
    //   return;
    // } else if (!casePattern.test(password)) {
    //   setError(
    //     "Password must have at leat one uppercase and lower case character",
    //   );
    //   return;
    // } else if (!specialCharPattern.test(password)) {
    //   setError("Password must contain at least one special character");
    //   return;
    // }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters and contain uppercase, lowercase, and a special character.",
      );
      return;
    }

    // RESET Status: succees or error
    setError("");
    setSuccess(false);

    if (!terms) {
      setError("Please accept our terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("after creation a new user", result.user);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => {
        console.log("error happend", error.message);
        setError(error.message);
      });
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleTogglePasswordShow}
                    className="btn btn-xs absolute top-2 right-6"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaEye></FaEye>}
                  </button>
                </div>
                <div>
                  <label class="label">
                    <input type="checkbox" name="terms" class="checkbox" />
                    Accept Our Terms and Condition
                  </label>
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>

              {success && (
                <p className="text-green-500">Account Created Successfully</p>
              )}

              {error && <p className="text-red-500">{error}</p>}
            </form>
            <p>
              All Ready have an account? <Link className="text-blue-400 underline" to="/login">Please Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
