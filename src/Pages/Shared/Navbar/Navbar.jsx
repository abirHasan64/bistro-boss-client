import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import avatar from "../../../assets/others/profile.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change this value based on when you want the background to change
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navOptions = (
    <>
      <li>
        <Link className={scrolled ? "text-black" : "text-white"} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={scrolled ? "text-black" : "text-white"} to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className={scrolled ? "text-black" : "text-white"} to="/orderfood/salad">
          Order Food
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar fixed z-10 ${
        scrolled ? "bg-white text-black" : "bg-transparant text-white"
      } transition-colors duration-300 max-w-screen-2xl`}
    >
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
            className={`menu menu-sm ${
              scrolled ? "bg-white" : "bg-black bg-opacity-30"
            } dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow`}
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
        {user ? (
          <div className="relative">
            <div
              className="avatar cursor-pointer"
              onClick={toggleDropdown} // Open dropdown on click
            >
              <div className="w-12 rounded-full">
                <img src={user?.photoURL || avatar} />
              </div>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20 text-black">
                <div className="flex space-x-2 p-4 border-b">
                  <p className="font-bold my-auto">{user?.displayName}</p>
                  <Link to="/dashboard/mycart">
                    <button className="btn">
                      <FaCartShopping />
                      <div className="badge badge-secondary">
                        {cart?.length || 0}+
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="p-4">
                  <button
                    className="btn btn-danger w-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4 flex-row">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/Signup">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

