import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const NavItem = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => scrollToSection(id)}
      className="text-gray-700 hover:text-indigo-600 transition-colors"
      aria-label={label}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Primary Navigation"
      >
        <div className="flex justify-between items-center h-16">
          <a
            href="/"
            aria-label="Altravionix Home"
            className="flex items-center"
          >
            <img
              src="https://mixed-yellow-gull.myfilebase.com/ipfs/QmWZegzxfgNPyiDyYE1pxY9Dfw9SwHHB4o1a2bH52Tw3mT"
              alt="Altravionix software company logo"
              className="h-12 w-auto object-contain"
              loading="eager"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavItem id="home" label="Home" />
            <NavItem id="services" label="Services" />
            <NavItem id="process" label="Process" />
            <NavItem id="about" label="About" />
            <NavItem id="contact" label="Contact" />

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Free Consultation
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <NavItem id="home" label="Home" />
            <NavItem id="services" label="Services" />
            <NavItem id="process" label="Process" />
            <NavItem id="about" label="About" />
            <NavItem id="contact" label="Contact" />
          </div>
        )}
      </nav>
    </header>
  );
}
