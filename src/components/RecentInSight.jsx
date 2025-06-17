import { FaArrowRight } from "react-icons/fa";

export default function RecentInsight() {
  const insights = [
    {
      title: "Bond Market Outlook 2025",
      desc: "Understand bond yield behavior and central bank cues.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "A: Investment in India",
      desc: "Explore India's investment trajectory and trends.",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "2025 Investment Landscape",
      desc: "Get expert commentary on what's ahead this year.",
      image:
        "https://images.unsplash.com/photo-1508387029634-8927b1d6a77d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Tax-Smart Portfolio Moves",
      desc: "Minimize taxes and enhance returns with smarter choices.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Global Economic Calendar",
      desc: "Track key events that impact your investments.",
      image:
        "https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
            <div
              key={idx}
              className="min-w-[270px] md:w-full bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="p-5 flex flex-col justify-between h-[190px]">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <a
                  href="#"
                  className="mt-4 text-sm font-medium text-blue-600 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
