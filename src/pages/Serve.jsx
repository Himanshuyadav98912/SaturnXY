export default function Serve() {
  const services = [
    {
      title: "Investment Strategy",
      description: "Tailored plans to help clients maximize long-term returns with risk management.",
    },
    {
      title: "Wealth Management",
      description: "End-to-end financial services including asset allocation, portfolio analysis, and estate planning.",
    },
    {
      title: "Tax Optimization",
      description: "Smart strategies to reduce tax liabilities and increase post-tax returns.",
    },
    {
      title: "Retirement Planning",
      description: "Customized retirement blueprints to ensure financial security for the future.",
    },
    {
      title: "Market Insights",
      description: "Data-driven insights and analytics to empower smarter investment decisions.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        What We Serve
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

