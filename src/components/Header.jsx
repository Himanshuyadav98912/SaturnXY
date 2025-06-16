import { TbBuildingBank } from "react-icons/tb";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Logo and Name */}
      <div className="flex items-center gap-3 text-3xl font-semibold text-blue-900 font-inter tracking-tight">
        <TbBuildingBank className="text-4xl" />
        <span>
          Saturn<span className="text-black">XY</span>
        </span>
      </div>

      {/* Navigation */}
      <ul className="flex justify-between gap-5 text-gray-700 font-medium">
        {["About Us", "Insight", "What We Serve", "Solutions"].map((item, index) => (
          <li
            key={index}
            className="relative hidden sm:inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <button className="text-white text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
        Login
      </button>
    </header>
  );
}
