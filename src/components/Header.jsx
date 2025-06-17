import { useState } from "react";
import { TbBuildingBank } from "react-icons/tb";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", to: "/about" },
    { label: "Insight", to: "/insight" },
    { label: "What We Serve", to: "/serve" },
    { label: "Solutions", to: "/solutions" },
    { label: "Explore", to: "/explore" },

  ];

  return (
    <header className="bg-white shadow-md px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-900"
        >
          <TbBuildingBank className="text-3xl" />
          Saturn<span className="text-black">YX</span>
        </Link>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav and Right Section */}
        <div className="hidden md:flex justify-between items-center w-full pl-10">
          {/* Navigation */}
          <ul className="flex gap-6 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="relative cursor-pointer group">
                <Link to={item.to} className="block">
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <li className="list-none flex items-center gap-1 text-gray-700 font-medium cursor-pointer">
              <FaGlobe className="text-lg" />
              Global
            </li>

            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <Link to={item.to} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-3">
            <li className="list-none flex items-center gap-1 text-gray-700 font-medium cursor-pointer">
              <FaGlobe className="text-lg" />
              Global
            </li>

            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition w-fit"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

