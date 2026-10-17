import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Technology", path: "/technology" },
    { name: "Impact", path: "/impact" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={Logo}
            alt="Nomexa Solutions"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`whitespace-nowrap text-sm font-semibold pb-2 transition-colors duration-200 ${
                link.name === "Home"
                  ? "text-[#046B12]"
                  : "text-gray-800 hover:text-[#046B12] hover:border-b-4 hover:border-[#046B12] pb-2"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Get in Touch Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-3 rounded-full bg-[#064E3B] pb-2 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#046B12] lg:inline-flex"
        >
          Get in Touch
          <span aria-hidden="true" className="text-lg">
            →
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 transition-colors hover:bg-gray-100 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-green-50 hover:text-[#046B12] ${
                  link.name === "Home"
                    ? "text-[#046B12]"
                    : "text-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Get in Touch Button */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-3 rounded-full bg-[#064E3B] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#046B12]"
            >
              Get in Touch
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;