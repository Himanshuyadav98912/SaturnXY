import { useParams } from "react-router-dom";

const problemDetails = {
  "asset-management": {
    title: "Asset Management",
    description:
      "Asset management is the process of developing, operating, maintaining, and selling assets in a cost-effective manner. SaturnXY helps clients manage their portfolios with a long-term vision, incorporating cutting-edge technology, market insights, and experienced financial advisors.",
    image: "/assets/bg2.webp",
    benefits: [
      "Diversified investment strategies",
      "Real-time portfolio monitoring",
      "Risk-adjusted asset allocation",
      "Personalized financial goals planning",
    ],
    stats: {
      clients: "12,000+",
      avgReturn: "11.2% per annum",
      satisfaction: "97% client retention",
    },
  },
  "commercial-advice": {
    title: "Commercial Advice",
    description:
      "We provide strategic commercial advice to businesses, helping them navigate financial decisions, investments, and risk. From mergers & acquisitions to investment planning, SaturnXY acts as a trusted advisor.",
    image: "/assets/bg3.webp",
    benefits: [
      "Data-backed decision support",
      "Regulatory and compliance assistance",
      "Risk minimization strategies",
      "Market positioning insights",
    ],
    stats: {
      businessesHelped: "850+",
      averageGrowth: "17% YoY",
      successRate: "92%",
    },
  },
  // Add more problem sections as needed
};

export default function ProblemDetail() {
  const { slug } = useParams();
  const content = problemDetails[slug];

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Problem page not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Image */}
      <div className="mb-8">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Title and Description */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
        {content.title}
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {content.description}
      </p>

      {/* Benefits */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {content.benefits.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Stats */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm mb-10">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Performance Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {Object.entries(content.stats).map(([label, value]) => (
            <div key={label}>
              <p className="text-3xl font-bold text-blue-900">{value}</p>
              <p className="text-sm text-gray-600 capitalize">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-700 text-lg mb-4">
          Ready to take control of your finances with {content.title}?
        </p>
        <a
          href="/signup"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
