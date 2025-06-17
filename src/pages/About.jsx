export default function About() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen py-16 px-6 md:px-20 font-inter">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About Saturn<span className="text-black">XY</span></h1>

        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-semibold text-blue-800">SaturnXY</span>, we provide advanced financial solutions, investment insights, and market strategies designed to empower businesses and individuals globally.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              We aim to deliver accessible, innovative, and data-driven financial services that enhance decision-making and build long-term wealth for our clients.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To become a globally trusted platform for investment and financial intelligence, enabling smarter futures.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expert financial analysts and advisors</li>
            <li>Data-driven insights for real-time decision-making</li>
            <li>Secure, transparent, and scalable investment solutions</li>
            <li>Client-first approach with global reach</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
