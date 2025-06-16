import Slider from "react-slick";
import {
  FaChartLine,
  FaBuilding,
  FaUniversity,
  FaChartPie,
  FaPiggyBank,
  FaBriefcase
} from "react-icons/fa";

export default function ProblemSection() {
  const items = [
    { label: "Asset Management", icon: <FaChartLine size={36} className="text-blue-600" /> },
    { label: "Commercial Advise", icon: <FaBuilding size={36} className="text-blue-600" /> },
    { label: "Investment Banking", icon: <FaUniversity size={36} className="text-blue-600" /> },
    { label: "Market", icon: <FaChartPie size={36} className="text-blue-600" /> },
    { label: "Wealth Management", icon: <FaPiggyBank size={36} className="text-blue-600" /> },
    { label: "Private Equity", icon: <FaBriefcase size={36} className="text-blue-600" /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="text-center py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">
        WHAT PROBLEM CAN WE SOLVE TOGETHER?
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="h-60 flex flex-col items-center justify-between border rounded-lg shadow bg-white p-6">
                <div className="mb-4">{item.icon}</div>
                <div className="text-lg font-semibold">{item.label}</div>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium mt-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
