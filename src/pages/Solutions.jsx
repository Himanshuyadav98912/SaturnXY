export default function Solutions() {
  const solutions = [
    {
      title: "AI-Driven Analytics",
      description: "Harness the power of AI to analyze market trends and make informed decisions.",
    },
    {
      title: "Portfolio Diversification",
      description: "Smart tools to help balance investments across various asset classes and sectors.",
    },
    {
      title: "Risk Assessment Tools",
      description: "Real-time risk profiling and alerts to safeguard your financial goals.",
    },
    {
      title: "Automated Rebalancing",
      description: "Keep your portfolio aligned with your strategy through intelligent automation.",
    },
    {
      title: "Client Dashboard",
      description: "Unified view of investments, performance metrics, and actionable insights.",
    },
    {
      title: "Regulatory Compliance",
      description: "Integrated compliance checks to ensure adherence to financial regulations.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Our Solutions
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {solution.title}
            </h2>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
