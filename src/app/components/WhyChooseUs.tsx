import { Zap, TrendingUp, Shield, Code } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap size={28} />,
      title: "Fast Project Delivery",
      description:
        "Agile software development process ensures faster delivery for websites, mobile apps, and custom software projects.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Scalable Business Solutions",
      description:
        "Our software solutions are built to scale as your startup or business grows across Mumbai and India.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield size={28} />,
      title: "Secure & Reliable Systems",
      description:
        "Enterprise-grade security, data protection, and dependable performance for business-critical applications.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code size={28} />,
      title: "Modern Technology Stack",
      description:
        "We use React, Node.js, cloud technologies, and AI tools to build future-ready digital products.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="why-choose-heading"
            className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Altravionix
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Trusted software company in Mumbai delivering websites, mobile apps,
            custom software, and AI solutions for modern businesses.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center text-white mb-4`}
              >
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
