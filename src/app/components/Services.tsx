import { Smartphone, Globe, TrendingUp, Brain, Sparkles } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development Company",
      description:
        "Custom Android, iOS, and cross-platform mobile app development services for startups, SMEs, and enterprises in Mumbai and across India.",
      features: [
        "Android App Development",
        "iOS App Development",
        "Cross-platform Apps",
        "App Maintenance & Support",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Globe size={32} />,
      title: "Website Development Company",
      description:
        "Professional website development services including business websites, e-commerce stores, landing pages, and scalable web platforms.",
      features: [
        "Business Websites",
        "E-commerce Development",
        "Landing Pages",
        "CMS & Admin Panels",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Digital Marketing & SEO Services",
      description:
        "Result-driven SEO, Google Ads, social media marketing, and growth strategies to increase traffic, leads, and sales.",
      features: [
        "Search Engine Optimization",
        "Google Ads",
        "Social Media Marketing",
        "Analytics & Reporting",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Brain size={32} />,
      title: "AI Automation Solutions",
      description:
        "AI-powered business automation, intelligent chatbots, predictive analytics, and machine learning solutions for modern businesses.",
      features: [
        "AI Chatbots",
        "Business Automation",
        "Predictive Analytics",
        "Machine Learning Integration",
      ],
      gradient: "from-indigo-500 to-purple-500",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="pt-0 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="services-heading"
            className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Software & IT Services
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive website development, mobile app development, AI
            solutions, and digital marketing services for businesses in Mumbai
            and across India.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Hover Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`}
              ></div>

              <div className="relative z-10">
                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm rounded-full shadow-lg">
                      <Sparkles size={14} />
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-block font-semibold text-indigo-600 hover:text-purple-600 transition-colors"
                  aria-label={`Get quote for ${service.title}`}
                >
                  Get Free Quote →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
