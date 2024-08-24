import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 w-full min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password <br />
                    <small className="text-gray-400">
                      [ Note: Password must be minimum of 6 characters. Password
                      must contain at least one uppercase, one lowercase, one
                      special character (@#$&) and one numerical value ]
                    </small>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 text-sm">
                    Password must contain at least one uppercase, one lowercase,
                    one special character (@#$&) and one numerical value
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 text-sm">
                    Password is less than 6 character
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
                />
              </div>
            </form>
            <small className="mx-auto mb-4">
              Already have an account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
