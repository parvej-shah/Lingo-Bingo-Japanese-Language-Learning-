import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../authProvider/AuthProvider";

const Header = () => {
  const { user, onLogout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Start Learning", to: "/start-learning" },
    { name: "Tutorials", to: "/tutorials" },
    { name: "About Us", to: "/about-us" },
    user && { name: "My Profile", to: "/my-profile" },
  ].filter(Boolean);

  const inActiveNav = "text-white hover:text-sky-blue";
  const activeNav = "text-golden-yellow font-semibold";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-light-blue-gray">
      {user && (
        <p className="text-sm lg:text-base text-dark-blue-gray text-center py-2">
          Welcome to{" "}
          <span className="font-semibold text-strong-blue">Lingo Bingo</span>!
          Your journey to mastering Japanese starts here.
        </p>
      )}
      <nav className="bg-dark-blue-gray">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              {isMenuOpen && (
                <ul className="menu menu-sm dropdown-content bg-dark-blue-gray rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          isActive ? activeNav : inActiveNav
                        }
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a className="text-xl text-white font-bold">Lingo Bingo</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? activeNav : inActiveNav
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex justify-center items-center gap-2">
                <img
                  src={user?.photoURL || "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g"}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <button
                  onClick={onLogout}
                  className="bg-cherry-blossom-red text-white hover:bg-red py-2 px-4 rounded-md font-semibold"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="text-white bg-cherry-blossom-red py-2 px-4 rounded-md hover:bg-red font-semibold"
              >
                Log In
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
