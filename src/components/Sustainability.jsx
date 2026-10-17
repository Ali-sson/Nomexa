
import {
  Sprout,
  Sun,
  Droplet,
  Users,
  ArrowRight,
} from "lucide-react";
import BackgroundImage from "../assets/farmland.png";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Sustainable Food Systems",
    description:
      "More resilient and productive farming systems.",
    icon: Sprout,
  },
  {
    title: "Clean Energy Adoption",
    description:
      "Renewable energy for sustainable agriculture.",
    icon: Sun,
  },
  {
    title: "Resource Efficiency",
    description:
      "Smarter use of water and inputs.",
    icon: Droplet,
  },
  {
    title: "Inclusive Growth",
    description:
      "Opportunities for farmers, youth and rural communities.",
    icon: Users,
  },
];

const Sustainability = ({
  backgroundImage = BackgroundImage,
  eyebrow = "",
  title = "A More Sustainable and Food-Secure Africa",
  description = "We envision a future where every farming community has access to the technology, knowledge and support they need to produce food sustainably and thrive despite climate challenges.",
}) => {
  return (
    <section className="relative overflow-hidden bg-[#073B26] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      {/* Background image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#052719]/95 via-[#052719]/80 to-[#052719]/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <div className="max-w-xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#9DDEA8]">
            {eyebrow}
          </span>

          <h2 className="max-w-lg text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
            {description}
          </p>

          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#36B65B] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#269447]"
          >
            Our Impact
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Right solution cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="flex min-h-32 items-start gap-4 rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition duration-300 hover:bg-white/15 sm:min-h-36 sm:p-5"
              >
                <div className="shrink-0 text-[#E0F4E4]">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-sm font-bold leading-snug text-white sm:text-base">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
