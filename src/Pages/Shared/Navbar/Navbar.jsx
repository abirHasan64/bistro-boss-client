import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => { /*todo: logOut not working yet. fix it */
  logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You've successfully logged out",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((err) => console.log(err));
  };
  const navOptions = (
    <>
      <li>
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={{ color: "white" }} to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link style={{ color: "white" }} to="/orderfood/salad">
          Order Food
        </Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <li>
            <Link style={{ color: "white" }} to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white max-w-screen-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-black bg-opacity-30 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
