import { FaArrowRight } from "react-icons/fa";

export default function RecentInsight() {
  const insights = [
    "Bond Market",
    "A: In India",
    "2025 Investment",
    "Tax and Portfolio",
    "Economic Calendar",
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            Recent Insights <FaArrowRight className="text-blue-600" />
          </h2>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline hidden md:inline"
          >
            View All
          </a>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 xl:grid-cols-4">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[250px] md:w-full bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{item}</h3>
              <p className="text-sm text-gray-500">
                Stay informed on the latest trends, data, and expert commentary.
              </p>
              <a
                href="#"
                className="mt-4 text-sm text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
