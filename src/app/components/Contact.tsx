import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("https://api.altravionix.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to submit form");
      }

      setSuccess(
        "Thank you for contacting Altravionix. Our team will connect with you shortly."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="contact-heading"
            className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Altravionix
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Looking for a software company in Mumbai for website development,
            mobile apps, custom software, AI solutions, or digital growth? Let’s
            discuss your project today.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                We help startups, SMEs, and enterprises across Mumbai and India
                build scalable digital products. Contact us for a free
                consultation and project estimate.
              </p>
            </div>

            {/* Email */}
            <article className="flex items-start gap-4 p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Mail size={20} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <a
                  href="mailto:ajay@altravionix.com"
                  className="text-indigo-600 hover:underline"
                >
                  ajay@altravionix.com
                </a>
              </div>
            </article>

            {/* Phone */}
            <article className="flex items-start gap-4 p-6 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                <Phone size={20} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">Call Us</h4>
                <a
                  href="tel:+918087936880"
                  className="text-purple-600 hover:underline"
                >
                  +91 8087936880
                </a>
                <br></br>
                <a
                  href="tel:+918793314670"
                  className="text-purple-600 hover:underline"
                >
                  +91 8793314670
                </a>
              </div>
            </article>

            {/* Address */}
            <article className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <MapPin size={20} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">Our Location</h4>
                <p className="text-gray-600">
                  Karjat, Raigad, Maharashtra, India
                </p>
              </div>
            </article>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-lg">
            {success && (
              <div className="mb-6 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-green-700">
                {success}
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              >
                <option value="">Select a Service</option>
                <option value="website-development">Website Development</option>
                <option value="mobile-app-development">
                  Mobile App Development
                </option>
                <option value="custom-software">
                  Custom Software Development
                </option>
                <option value="ai-solutions">AI Solutions</option>
                <option value="digital-marketing">
                  Digital Marketing & SEO
                </option>
              </select>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} className="inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
