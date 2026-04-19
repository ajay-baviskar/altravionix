import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
              <Sparkles size={16} className="text-indigo-600" />
              <span className="text-sm text-indigo-700 font-semibold">
                AI Solutions for Modern Businesses
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Software Company in Mumbai Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                AI, Web & Mobile Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Altravionix helps startups and businesses across Mumbai and India
              build custom software, websites, mobile apps, automation systems
              and scalable digital products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full border-2 border-indigo-600"
              >
                View Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-3xl opacity-40"></div>

            <img
              src="https://mixed-yellow-gull.myfilebase.com/ipfs/QmNTj8f6CGUBpJfLWR8p93yKC2wcUf3baKJA8fnCdsTT8r"
              alt="Software company in Mumbai offering AI website and mobile app development"
              loading="eager"
              decoding="async"
              className="relative rounded-3xl w-full h-auto lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
