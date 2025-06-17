import { useParams, Link } from "react-router-dom";

export default function DeliveringBlog() {
  const { slug } = useParams();

  const contentMap = {
    "deep-research": {
      title: "Deep Research",
      content:
        "Our deep research combines data, trends, and expert analysis to help investors make informed decisions across markets.",
    },
    "market-analysis": {
      title: "Market Analysis",
      content:
        "We continuously monitor the markets and analyze fluctuations to provide the latest financial and economic trends.",
    },
    "smart-investing": {
      title: "Smart Investing",
      content:
        "Explore techniques and strategies to make intelligent investment decisions tailored to your financial goals.",
    },
    "actionable-insights": {
      title: "Actionable Insights",
      content:
        "Receive real-time alerts and recommendations to take meaningful steps with your investments.",
    },
    "global-trust": {
      title: "Global Trust",
      content:
        "Trusted by clients in 80+ countries, we deliver excellence across global investment landscapes.",
    },
    "client-centric": {
      title: "Client-Centric",
      content:
        "Your goals drive our work. We partner with clients to build results through personalized financial guidance.",
    },
  };

  const data = contentMap[slug];

  if (!data) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-500">404 - Not Found</h1>
        <p className="mt-4 text-gray-600">
          The content you're looking for doesn't exist.
        </p>
        <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">{data.title}</h1>
      <p className="text-lg text-gray-700">{data.content}</p>

      {/* ✅ Back Button */}
      <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline">
        ← Back to Delivering Section
      </Link>
    </div>
  );
}
