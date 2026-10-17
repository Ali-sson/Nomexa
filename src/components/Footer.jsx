import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/Logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Technology", path: "/technology" },
    { name: "Impact", path: "/impact" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Contact", path: "/contact" },
  ];

  const focusAreas = [
    { name: "Irrigation", path: "/focus-areas" },
    { name: "IoT / Cloud Agriculture", path: "/focus-areas" },
    { name: "Horticulture", path: "/focus-areas" },
  ];

  return (
    <footer className="bg-[#031B19] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={Logo}
                alt="Nomexa Solutions"
                className="mb-4 h-12 w-auto object-contain"
              />
            </Link>

            <p className="max-w-xs text-sm leading-6 text-gray-300">
              Intelligent technology for climate-resilient agriculture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 transition hover:text-[#66B56B]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Our Focus Areas
            </h3>

            <ul className="space-y-2">
              {focusAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.path}
                    className="text-sm text-gray-300 transition hover:text-[#66B56B]"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-2 text-sm text-gray-300">
              <a
                href="mailto:info@nomexa.com"
                className="block transition hover:text-[#66B56B]"
              >
                info@nomexa.com
              </a>

              <a
                href="tel:+2348000000000"
                className="block transition hover:text-[#66B56B]"
              >
                +234 800 000 0000
              </a>

              <p>Nigeria</p>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#66B56B] hover:bg-[#046B12]"
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#66B56B] hover:bg-[#046B12]"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#66B56B] hover:bg-[#046B12]"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Nomexa Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              to="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-white/30">|</span>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;