import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GoSun, GoMoon } from "react-icons/go"; // Added GoMoon for dark mode icon
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router"; // Note: Should be "react-router-dom" (fixing import)
import { useTheme } from "../../context/ThemeContext"; // Import ThemeContext
import "../../i18n"; // Import i18n configuration

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleDarkMode } = useTheme(); // Use theme context

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-primary w-full shadow-md dark:bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="src/assets/images/Logo3.png"
            className="md:h-8 h-4"
            alt="JobSeek Logo"
          />
        </NavLink>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white rounded-lg focus:outline-none dark:text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto md:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 bg-primary md:bg-transparent p-4 md:p-0">
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-secondary block py-2 px-3 md:p-0 dark:text-gray-200 dark:hover:text-secondary"
              >
                {t("notification")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDark ? (
              <GoMoon className="text-secondary text-[24px] cursor-pointer" />
            ) : (
              <GoSun className="text-secondary text-[24px] cursor-pointer" />
            )}
          </button>
          <FaRegBell className="text-secondary text-[24px] cursor-pointer" />
        </div>

        {/* Language Switch */}
        <div className="flex items-center space-x-4">
          <img
            onClick={() => changeLanguage("en")}
            src="src/assets/images/England.png"
            alt="English"
            className="w-[40px] h-[20px] cursor-pointer"
          />
          <img
            onClick={() => changeLanguage("km")}
            src="src/assets/images/Cambodia.png"
            alt="Khmer"
            className="w-[40px] h-[20px] cursor-pointer"
          />
          <FaRegUserCircle className="text-white text-[30px] dark:text-gray-200" />
        </div>
      </div>
    </nav>
  );
}