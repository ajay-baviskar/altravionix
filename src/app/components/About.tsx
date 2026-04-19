import { Target, Eye, Users, Award } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <header className="mb-8">
              <h2
                id="about-heading"
                className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              >
                About{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Altravionix
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Altravionix is a Mumbai based software company helping startups,
                SMEs, and enterprises build custom software, websites, mobile
                apps, and AI-powered business solutions across India.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed">
                We combine strategy, design, and modern development to create
                scalable digital products that improve growth, efficiency, and
                customer experience for businesses of all sizes.
              </p>
            </header>

            {/* SEO Trust Stats */}
            <div className="grid grid-cols-2 gap-4">
              <article className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-indigo-600" size={24} />
                  <div className="text-3xl font-bold text-gray-900">3+</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Expert Team Members
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Skilled developers and growth-focused problem solvers.
                </p>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-purple-600" size={24} />
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Client Satisfaction
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  We focus on quality delivery and long-term relationships.
                </p>
              </article>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Mission */}
            <article className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-indigo-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Target size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions
                    including custom software, web development, mobile apps, and
                    AI automation that drive measurable growth and efficiency.
                  </p>
                </div>
              </div>
            </article>

            {/* Vision */}
            <article className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Eye size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become a trusted software company in Mumbai and India,
                    recognized for delivering scalable digital products,
                    innovation, transparency, and outstanding client success.
                  </p>
                </div>
              </div>
            </article>

            {/* Values */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Innovation</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Quality</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Transparency</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Collaboration</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
