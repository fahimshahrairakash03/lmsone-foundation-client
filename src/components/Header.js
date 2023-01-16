import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItem = (
    <>
      <Link to="/">
        <li>
          <a className="font-semibold">Home</a>
        </li>
      </Link>
      <Link to="/about">
        <li>
          <a className="font-semibold">About</a>
        </li>
      </Link>
      <Link to="/">
        <li>
          <a className="font-semibold">Home</a>
        </li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold">LMS 0NE</a>
        </div>
        <div className="navbar-center hidden ml-auto lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
