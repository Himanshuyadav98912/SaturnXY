import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function RecentInsight() {
  const insights = [
    {
      title: "Bond Market Outlook 2025",
      desc: "Understand bond yield behavior and central bank cues.",
      slug: "bond-market-outlook-2025",
      image: "/assets/RS1.webp",
    },
    {
      title: "Investment in India",
      desc: "Explore India's investment trajectory and trends.",
      slug: "investment-in-india",
      image: "/assets/RS2.webp",
    },
    {
      title: "2025 Investment Landscape",
      desc: "Get expert commentary on what's ahead this year.",
      slug: "2025-investment-landscape",
      image: "/assets/RS3.webp",
    },
    {
      title: "Tax-Smart Portfolio Moves",
      desc: "Minimize taxes and enhance returns with smarter choices.",
      slug: "tax-smart-portfolio-moves",
      image: "/assets/RS4.webp",
    },
    {
      title: "Global Economic Calendar",
      desc: "Track key events that impact your investments.",
      slug: "global-economic-calendar",
      image: "/assets/RS5.webp",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 relative">
      {/* Green Line on Left (Only for md+ screens) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-0 w-1 bg-green-500" />

      <div className="max-w-7xl mx-auto md:pl-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            Recent <span className="text-blue-600">Insights</span>{" "}
            <FaArrowRight className="text-blue-600 mt-1" />
          </h2>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline hidden md:inline"
          >
            View All
          </a>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 xl:grid-cols-4">
          {insights.map((item, idx) => (
            <Link
              to={`/insights/${item.slug}`}
              key={idx}
              className="min-w-[270px] md:w-full bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="w-full">
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="p-5 flex flex-col justify-between h-[190px]">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <span className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
