import React from "react";
import { Link } from "react-router-dom";
import { GiPayMoney } from "react-icons/gi";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();

  const { user } = useAuthContext();

  return (
    <div className="py-5 shadow-xl bg-white rounded-b-lg border-l-4 border-r-4 border-teal-500 flex items-center justify-between px-16">
      <Link
        to="/"
        className="text-teal-500 text-2xl font-semibold flex items-center"
      >
        <GiPayMoney className="text-3xl mr-1" />
        <span className="text-orange-500 text-lg">My~</span>Finance
      </Link>
      <ul className="flex items-center">
        {!user && (
          <>
            <li className="mx-3 text-lg hover:text-teal-600 hover:underline">
              <Link to="/login">Login</Link>
            </li>
            <li className="ml-5 text-lg hover:text-teal-600 hover:underline">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li className="ml-5 text-lg">Hello, {user.displayName}!</li>
            <li className="ml-5 text-lg hover:text-teal-600 hover:underline">
              <button
                className="border py-1 px-3 rounded border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-teal-600"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
