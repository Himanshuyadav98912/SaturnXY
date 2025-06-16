export default function DeliveringSection() {
  const centerItems = [
    "Research",
    "Thoughts on Market",
    "Wealth Management",
  ];

  return (
    <section
      className="relative bg-cover bg-center py-24 px-6 text-gray-800"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c4437ae?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-lg p-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Delivering for Investors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-lg font-medium mb-4 text-gray-700">
              Our solution is the largest and most trusted investment platform.
              Backed by research and data to empower your decisions.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline font-semibold text-base"
            >
              Learn More
            </a>
          </div>

          {/* Center Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {centerItems.map((item, idx) => (
              <div
                key={idx}
                className="w-100 h-40 bg-white border border-gray-200 rounded-xl shadow-md flex items-center justify-center px-4 text-xl font-semibold text-center hover:shadow-lg transition-all"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center text-center md:text-right">
            <p className="text-3xl font-bold text-blue-700 mb-1">250K+</p>
            <p className="text-lg font-medium text-gray-700">
              Assets Under Management
            </p>
            <p className="text-sm text-gray-500">As of July 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
