import { useParams, Link } from "react-router-dom";

export default function InsightBlog() {
  const { slug } = useParams();

  const insightData = {
    "bond-market-outlook-2025": {
      title: "Bond Market Outlook 2025",
      content:
        "Understand bond yield behavior, central bank cues, and how macroeconomic shifts will shape the fixed income landscape in 2025.",
    },
    "investment-in-india": {
      title: "Investment in India",
      content:
        "India's investment story is driven by infrastructure, digital growth, and policy reforms. Here's what investors need to know.",
    },
    "2025-investment-landscape": {
      title: "2025 Investment Landscape",
      content:
        "Expert analysis on key sectors, economic outlook, and strategies for navigating the year ahead.",
    },
    "tax-smart-portfolio-moves": {
      title: "Tax-Smart Portfolio Moves",
      content:
        "Maximize post-tax returns through portfolio rebalancing, loss harvesting, and asset allocation.",
    },
    "global-economic-calendar": {
      title: "Global Economic Calendar",
      content:
        "Stay informed about major global economic events impacting markets, from Fed meetings to global GDP releases.",
    },
  };

  const data = insightData[slug];

  if (!data) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">404 - Not Found</h1>
        <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-600 mb-6">{data.title}</h1>
      <p className="text-lg text-gray-700">{data.content}</p>

      <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline">
        ← Back to Insights
      </Link>
    </div>
  );
}
