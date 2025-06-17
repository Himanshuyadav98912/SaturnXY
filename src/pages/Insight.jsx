export default function Insight() {
  const insights = [
    {
      title: "Market Trends Q2 2025",
      description:
        "Explore our analysis of current market conditions and where trends are heading.",
      date: "June 10, 2025",
    },
    {
      title: "Smart Investment Strategies",
      description:
        "Learn about diversified strategies for sustainable and long-term growth.",
      date: "May 28, 2025",
    },
    {
      title: "Tech Stocks Outlook",
      description:
        "Our forecast for technology sector performance in the coming months.",
      date: "May 15, 2025",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Insights & Analysis
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800">
              {insight.title}
            </h2>
            <p className="text-gray-600 mt-2">{insight.description}</p>
            <p className="text-sm text-gray-500 mt-4">{insight.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
