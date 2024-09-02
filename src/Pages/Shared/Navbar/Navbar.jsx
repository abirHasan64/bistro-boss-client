import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You've successfully logged out",
          showConfirmButton: false,
          timer: 1000,
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
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn">
            <FaCartShopping />
            <div className="badge badge-secondary">{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <span>{user?.displayName}</span>
          <li className="p-0" onClick={handleLogout}>
            <Link>Logout</Link>
          </li>
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
