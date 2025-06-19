import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaChartPie,
  FaGlobe,
  FaUniversity,
  FaPiggyBank,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

export default function ProblemSection() {
  const problems = [
    {
      title: "Asset Management",
      description: "Manage portfolios effectively with strategic planning.",
      icon: <FaChartLine className="text-white" size={28} />,
      bgImage: "/assets/bg2.webp",
      slug: "asset-management",
    },
    {
      title: "Commercial Advice",
      description: "Make better financial decisions with expert input.",
      icon: <FaBuilding className="text-white" size={28} />,
      bgImage: "/assets/bg3.webp",
      slug: "commercial-advice",
    },
    {
      title: "Investment Banking",
      description: "Grow capital through strategic banking operations.",
      icon: <FaUniversity className="text-white" size={28} />,
      bgImage: "/assets/bg4.webp",
      slug: "investment-banking",
    },
    {
      title: "Market Insights",
      description: "Stay ahead with timely market predictions.",
      icon: <FaChartPie className="text-white" size={28} />,
      bgImage: "/assets/bg5.webp",
      slug: "market-insights",
    },
    {
      title: "Wealth Management",
      description: "Tailored plans to protect and multiply your assets.",
      icon: <FaPiggyBank className="text-white" size={28} />,
      bgImage: "/assets/bg6.webp",
      slug: "wealth-management",
    },
    {
      title: "Private Equity",
      description: "Explore high-growth private investment opportunities.",
      icon: <FaGlobe className="text-white" size={28} />,
      bgImage: "/assets/bg7.webp",
      slug: "private-equity",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white px-6">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg
          className="relative block w-[200%] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.83,22,103.67,39.18,161,36,52.5-3,104.67-27.82,158-38.18C445.83,27,511.67,32.51,576,46.29c64.33,13.78,124.17,35.68,188,39.82,63.83,4.14,130.67-10.2,192-27.27V0Z"
            opacity="0.25"
            fill="#93c5fd"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center mb-14 z-10 relative">
        <h2 className="text-4xl font-extrabold text-gray-800">
          What Problems Can We Solve?
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Explore our range of solutions tailored for your financial growth.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto z-10 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {problems.map((problem, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/problem/${problem.slug}`}>
                <div
                  className="h-64 rounded-2xl overflow-hidden shadow-lg bg-cover bg-center relative transition-transform transform hover:scale-105 will-change-transform"
                  style={{ backgroundImage: `url(${problem.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-800/50 to-black/60"></div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6 text-center">
                    <div className="mb-4 text-blue-200">{problem.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {problem.title}
                    </h3>
                    <span className="text-sm text-blue-300 hover:text-blue-400 transition font-medium">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-[200%] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.83,22,103.67,39.18,161,36,52.5-3,104.67-27.82,158-38.18C445.83,27,511.67,32.51,576,46.29c64.33,13.78,124.17,35.68,188,39.82,63.83,4.14,130.67-10.2,192-27.27V0Z"
            opacity="0.25"
            fill="#93c5fd"
          />
        </svg>
      </div>
    </section>
  );
}
