import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/my-order">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/all-users">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/add-product">Add A Product</Link>
            </li>
            <li>
              <Link to="/dashboard/all-seller">All Seller</Link>
            </li>
            <li>
              <Link to="/dashboard/all-buyer">All Buyer</Link>
            </li>
            <li>
              <Link to="/dashboard/my-product">My Product</Link>
            </li>
            <li>
              <Link to="/dashboard/my-wishlist">My Wishlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;