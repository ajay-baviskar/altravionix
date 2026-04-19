import { useEffect } from "react";

import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { Process } from "@/app/components/Process";
import { About } from "@/app/components/About";
import { Team } from "@/app/components/Team";
import { ComingSoon } from "@/app/components/ComingSoon";
import { Testimonials } from "@/app/components/Testimonials";
import { Careers } from "@/app/components/Careers";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  useEffect(() => {
    // Dynamic SEO (helps SPA pages)
    document.title =
      "Altravionix | Software Company in Mumbai | Web, App & AI Solutions";

    const updateMetaTag = (
      name: string,
      content: string,
      type: "name" | "property" = "name"
    ) => {
      let tag = document.querySelector(`meta[${type}="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(type, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    updateMetaTag(
      "description",
      "Altravionix is a software company in Mumbai offering website development, mobile app development, custom software, AI solutions and digital marketing services across India."
    );

    updateMetaTag(
      "keywords",
      "software company Mumbai, web development company Mumbai, mobile app development Mumbai, AI company India, custom software development India"
    );

    updateMetaTag("robots", "index, follow");

    updateMetaTag(
      "og:title",
      "Altravionix | Software Company in Mumbai",
      "property"
    );

    updateMetaTag(
      "og:description",
      "Website development, mobile apps, custom software, AI solutions and digital growth services across India.",
      "property"
    );

    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:url", "https://altravionix.com/", "property");

    updateMetaTag("twitter:title", "Altravionix | Software Company in Mumbai");

    updateMetaTag(
      "twitter:description",
      "Custom software, websites, mobile apps and AI solutions for startups and businesses."
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Homepage Hero */}
        <Hero />

        {/* Core Services */}
        <Services />

        {/* Why Clients Choose Us */}
        <WhyChooseUs />

        {/* Delivery Process */}
        <Process />

        {/* About Company */}
        <About />

        {/* Future Optional Sections */}
        {/* <Team /> */}
        {/* <Testimonials /> */}

        {/* Upcoming Products / Features */}
        <ComingSoon />

        {/* Careers / Hiring */}
        <Careers />

        {/* Lead Generation */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
