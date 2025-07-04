import { useState } from "react";
import { TbBuildingBank } from "react-icons/tb";
import { FaGlobe, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: "About Us", to: "/about" },
    { label: "Insight", to: "/insight" },
    { label: "What We Serve", to: "/serve" },
    { label: "Solutions", to: "/solutions" },
    { label: "Explore", to: "/explore" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMenuOpen(false); // close mobile menu
    }
  };

  const authButtonsDesktop = user ? (
    <>
      <Link
        to="/dashboard"
        className="text-sm text-gray-700 font-medium hover:text-blue-600"
      >
        Dashboard
      </Link>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-1.5 rounded-md text-sm font-semibold transition"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
      >
        Sign Up
      </Link>
    </>
  );

  const authButtonsMobile = user ? (
    <>
      <Link
        to="/dashboard"
        onClick={() => setMenuOpen(false)}
        className="block w-full text-center text-gray-700 font-medium py-2 rounded-md hover:text-blue-600"
      >
        Dashboard
      </Link>
      <button
        onClick={() => {
          logout();
          setMenuOpen(false);
        }}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/login"
        onClick={() => setMenuOpen(false)}
        className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md font-semibold transition"
      >
        Login
      </Link>
      <Link
        to="/signup"
        onClick={() => setMenuOpen(false)}
        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
      >
        Sign Up
      </Link>
    </>
  );

  return (
    <header className="bg-white shadow-md px-4 sm:px-6 md:px-10 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo aligned to left */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-blue-900"
          aria-label="SaturnYX Home"
        >
          <TbBuildingBank className="text-3xl mr-1" />
          Saturn<span className="text-black">YX</span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden text-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center justify-between w-full pl-12"
          role="navigation"
        >
          <ul className="flex gap-8 text-gray-700 font-medium">
            {navItems.map((item, idx) => (
              <li key={idx} className="relative group cursor-pointer">
                <Link to={item.to} className="block py-1">
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-700 font-medium select-none">
              <FaGlobe className="text-lg" />
              Global
            </div>

            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded"
                title="Search"
              >
                <FaSearch />
              </button>
            </form>

            <div className="flex items-center gap-3">{authButtonsDesktop}</div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="lg:hidden mt-4 bg-white rounded-md shadow-lg p-5 space-y-5 max-w-sm mx-auto"
          role="menu"
        >
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 rounded-md hover:bg-gray-100"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <FaGlobe className="text-lg" />
            Global
          </div>

          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded"
              title="Search"
            >
              <FaSearch />
            </button>
          </form>

          <div className="flex flex-col gap-3 mt-4">{authButtonsMobile}</div>
        </nav>
      )}
    </header>
  );
}
