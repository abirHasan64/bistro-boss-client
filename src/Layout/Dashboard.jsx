import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaWallet } from "react-icons/fa6";
import { FaHome, FaCalendarAlt, FaUtensils, FaBook, FaUsers, FaBars } from "react-icons/fa";
import { MdMenuBook, MdShoppingBag } from "react-icons/md";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  // todo: load data from the server to have dynamic isAdmin based on data
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          View Menu
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#D1A054] min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                <FaBars />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                <FaBook />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                <FaUsers />
                  All Users
                </NavLink>
              </li>
              
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink className="flex" to="/dashboard/mycart">
                  <FaCartShopping />
                  My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider" />
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdMenuBook /> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/orderfood/salad">
              <MdShoppingBag />
              Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
