import {
  FaSearchDollar,
  FaChartLine,
  FaPiggyBank,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";

export default function DeliveringSection() {
  const features = [
    {
      title: "Deep Research",
      description: "Get ahead with fact-based research and insights.",
      icon: <FaSearchDollar className="text-white" size={28} />,
      bgImage:
        "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80')",
      link: "https://example.com/research",
    },
    {
      title: "Market Analysis",
      description: "Track economic changes and market fluctuations.",
      icon: <FaChartLine className="text-white" size={28} />,
      bgImage:
        "url('https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?auto=format&fit=crop&w=800&q=80')",
      link: "https://example.com/analysis",
    },
    {
      title: "Smart Investing",
      description: "Grow and preserve your wealth intelligently.",
      icon: <FaPiggyBank className="text-white" size={28} />,
      bgImage:
        "url('https://images.unsplash.com/photo-1581091870620-fb8a4cf1bdee?auto=format&fit=crop&w=800&q=80')",
      link: "https://example.com/investing",
    },
    {
      title: "Actionable Insights",
      description: "Real-time ideas to guide your next move.",
      icon: <FaLightbulb className="text-white" size={28} />,
      bgImage:
        "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80')",
      link: "https://example.com/insights",
    },
    {
      title: "Global Trust",
      description: "Serving investors across 80+ countries.",
      icon: <FaGlobe className="text-white" size={28} />,
      bgImage:
        "url('https://images.unsplash.com/photo-1591696205602-2c44a1d9181d?auto=format&fit=crop&w=800&q=80')",
      link: "https://example.com/trust",
    },
    {
      title: "Client-Centric",
      description: "Partnerships built on understanding and results.",
      icon: <FaHandshake className="text-white" size={28} />,
      bgImage:
        "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80')",
      link: "https://example.com/clients",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full bg-white">
      {/* Top Wave */}
      <svg
        className="absolute top-0 w-full text-white"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,64C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96V0H0Z"
        />
      </svg>

      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437ae?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Top Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We Are <span className="text-blue-600">Delivering</span> for
            Investors
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Unlock opportunities with tailored insights, innovative strategies,
            and a trusted investment platform.
          </p>
        </div>

        {/* 250K Stats Block */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center mb-20 border border-blue-100">
          <p className="text-5xl font-bold text-gray-900 mb-1">250K+</p>
          <p className="text-lg text-gray-700 font-medium">
            Assets Under Management
          </p>
          <p className="text-sm text-gray-500">As of July 2025</p>
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition"
          >
            Start Investing Today
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <a
              key={idx}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: feature.bgImage }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition"></div>
              <div className="relative z-10 p-6 text-white">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 w-full text-white"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32L60,53.3C120,75,240,117,360,133.3C480,149,600,139,720,117.3C840,96,960,64,1080,69.3C1200,75,1320,117,1380,138.7L1440,160V0H0Z"
        />
      </svg>
    </section>
  );
}
