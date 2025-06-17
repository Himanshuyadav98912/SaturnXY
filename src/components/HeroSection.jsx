import { useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      {/* Optional Pattern Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url("/assets/pattern.png")` }}></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-green-400 uppercase text-sm tracking-widest mb-3 flex items-center gap-2 justify-center md:justify-start">
            <FaChartLine /> Market Insights
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Global Market <span className="text-blue-500">Outlook</span>
          </h1>
          <p className="text-lg text-gray-300 mb-2">Q2 – 2025 Update</p>
          <p className="text-base text-gray-400 mb-6 leading-relaxed">
            Stay ahead with strategic insights, trends, and forecasts from leading analysts.
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-sm font-semibold transition"
          >
            Explore Report
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/bg1.jpg"
            alt="Hero Visual"
            className="rounded-xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Bottom Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#0f172a"
          d="M0,64L48,53.3C96,43,192,21,288,26.7C384,32,480,64,576,101.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96V0H0Z"
        />
      </svg>
    </section>
  );
}
