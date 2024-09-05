import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Load the captcha engine and template
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Successfully logged in",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="hero bg-base-200 w-full min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center w-auto">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-96 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter captcha</span>
                </label>
                <input
                  type="text"
                  placeholder="Type captcha here"
                  name="captcha"
                  onBlur={handleCaptcha}
                  className="input input-bordered"
                  required
                />
                <label className="label mx-auto">
                  <LoadCanvasTemplate />
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <span className="mx-auto mb-4">
              <small>
                New here?{" "}
                <Link className="text-orange-500 font-bold" to="/signup">
                  Create an account
                </Link>
              </small>
              <SocialLogin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
