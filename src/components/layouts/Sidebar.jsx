"use client";
import React from "react";
import { Link, useLocation } from "react-router";
import { Home, Mail, User, Users, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";  // Import useTranslation
import "../../i18n"; // Import i18n configuration

const Sidebar = () => {
  const { t, i18n } = useTranslation();  // Hook to get translation functions
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard",
      name: t("dashboard"),
      icon: <Home className="h-5 w-5" />,
    },
    {
      path: "/business-owner",
      name: t("businessOwner"),
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      path: "/job-seekers",
      name: t("jobSeekers"),
      icon: <User className="h-5 w-5" />,
    },
    {
      path: "/freelancers",
      name: t("freelancers"),
      icon: <Users className="h-5 w-5" />,
    },
    {
      path: "/messages",
      name: t("messages"),
      icon: <Mail className="h-5 w-5" />,
      active: true,
    },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <aside className="group h-screen w-[70px] hover:w-64 bg-primary transition-all duration-300 ease-in-out">
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center rounded-md px-4 py-3 text-white hover:text-secondary transition-colors whitespace-nowrap
                  ${
                    location.pathname === item.path
                      ? "bg-blue-800"
                      : "hover:bg-primary-hover"
                  }`}
              >
                <span className="min-w-[20px]">{item.icon}</span>
                <span className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
