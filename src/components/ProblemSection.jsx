import Slider from "react-slick";
import {
  FaChartLine,
  FaBuilding,
  FaUniversity,
  FaChartPie,
  FaPiggyBank,
  FaBriefcase,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const items = [
  {
    label: "Asset Management",
    icon: <FaChartLine size={36} />,
    bg: "/assets/bg1.jpg",
    link: "/services/asset-management",
  },
  {
    label: "Commercial Advice",
    icon: <FaBuilding size={36} />,
    bg: "/assets/bg1.jpg",
    link: "/services/commercial-advice",
  },
  {
    label: "Investment Banking",
    icon: <FaUniversity size={36} />,
    bg: "/assets/bg1.jpg",
    link: "/services/investment-banking",
  },
  {
    label: "Market",
    icon: <FaChartPie size={36} />,
    bg: "//assets/bg1.jpg",
    link: "/services/market",
  },
  {
    label: "Wealth Management",
    icon: <FaPiggyBank size={36} />,
    bg: "/assets/bg1.jpg",
    link: "/services/wealth-management",
  },
  {
    label: "Private Equity",
    icon: <FaBriefcase size={36} />,
    bg: "/public/assets/bg1.jpg",
    link: "/services/private-equity",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

export default function ProblemSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`relative py-20 transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      } bg-gradient-to-b from-blue-50 to-white px-6`}
    >
      {/* Wave Top */}
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

      {/* Title */}
      <div className="text-center mb-14 z-10 relative">
        <h2 className="text-4xl font-extrabold text-gray-800">
          What Problems Can We Solve?
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Explore our range of solutions tailored for your financial growth.
        </p>
      </div>

      {/* Cards Carousel */}
      <div className="max-w-7xl mx-auto z-10 relative">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <div key={idx} className="px-4">
              <a href={item.link}>
                <div
                  className="h-64 rounded-2xl overflow-hidden shadow-lg border bg-cover bg-center relative transition-transform transform hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${item.bg})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-800/50 to-black/60"></div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6 text-center">
                    <div className="mb-4 text-blue-200">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                    <span className="text-sm text-blue-300 hover:text-blue-400 transition font-medium">
                      Learn More →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Wave Bottom */}
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
