import { TbBuildingBank } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { label: "About Us", to: "/about" },
    { label: "Insight", to: "/insight" },
    { label: "What We Serve", to: "/services" },
    { label: "Solutions", to: "/solutions" },
  ];

  return (
    <header className="flex justify-between items-center px-4 py-3 shadow-md bg-white flex-wrap">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-8 flex-wrap">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-3xl font-semibold text-blue-900 font-inter tracking-tight"
        >
          <TbBuildingBank className="text-4xl" />
          <span>
            Saturn<span className="text-black">XY</span>
          </span>
        </Link>

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
      </div>

      {/* Right: Language, Search, Signup */}
      <div className="flex items-center gap-4 mt-3 sm:mt-0">
        {/* Language */}
        <li className="list-none flex items-center gap-1 text-gray-700 font-medium cursor-pointer">
          <FaGlobe className="text-lg" />
          Global
        </li>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Sign Up Button */}
        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
