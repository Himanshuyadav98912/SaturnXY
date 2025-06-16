import { useNavigate } from "react-router-dom";
import image from "../assets/mathieu-stern-1zO4O3Z0UJA-unsplash.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-8 py-16 min-h-[480px] font-inter">
      {/* Left Content */}
      <div className="w-full md:w-1/2 md:pr-10 text-left mb-10 md:mb-0">
        <h1 className="text-3xl font-semibold text-gray-800 mb-3 leading-snug tracking-tight">
          Global Market Outlook
        </h1>
        <p className="text-base text-gray-600 mb-5">Q2 – 2025 Update</p>
        <button
          onClick={() => navigate("/explore")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
        >
          Explore
        </button>
      </div>

      {/* Right Image */}
      <div
        className="w-full md:w-1/2 h-[320px] rounded-xl shadow-lg bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </section>
  );
}
