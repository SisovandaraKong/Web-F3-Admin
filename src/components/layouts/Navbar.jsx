"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Sun, Moon, User } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <header className="flex h-16 items-center justify-between bg-primary px-6 py-5 text-white border-b border-white/10">
      <Link to="/" className="flex items-center text-xl font-bold">
        <span className="text-white">JOB</span>
        <span className="text-red-500">SEEK</span>
      </Link>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full p-2 hover:bg-white/10 transition-colors"
        >
          {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>

        <button className="rounded-full p-2 hover:bg-white/10 transition-colors">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 border-l border-r border-white/10 px-6"></div>
        {/* Notification bell */}
        <button className="rounded-full p-2 hover:bg-blue-800 transition-colors">
          <Bell className="h-5 w-5" />
        </button>

        {/* Language selector */}
        <div className="flex items-center gap-2 border-l border-r border-blue-800 px-6">
          <button
            onClick={() => setLanguage("en")}
            className={`h-8 w-8 rounded border ${
              language === "en" ? "bg-blue-800" : ""
            } hover:bg-blue-800/60 transition-colors`}
          >
            <span className="text-sm">EN</span>
          </button>
          <button
            onClick={() => setLanguage("km")}
            className={`h-8 w-8 rounded border ${
              language === "km" ? "bg-blue-800" : ""
            } hover:bg-blue-800/60 transition-colors`}
          >
            <span className="text-sm">KH</span>
          </button>
        </div>

        {/* User profile */}
        <button className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-blue-900 hover:bg-blue-50 transition-colors">
          <User className="h-5 w-5" />
          <span className="text-sm font-medium">Admin</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
