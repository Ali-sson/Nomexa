
import {
  Sprout,
  Droplet,
  Cloud,
  Users,
} from "lucide-react";

const impactAreas = [
  {
    title: "Higher Productivity",
    description:
      "Supporting improved yields and food security.",
    icon: Sprout,
  },
  {
    title: "Efficient Water Use",
    description:
      "Helping farmers do more with less water.",
    icon: Droplet,
  },
  {
    title: "Lower Emissions",
    description:
      "Promoting clean energy solutions.",
    icon: Cloud,
  },
  {
    title: "Stronger Communities",
    description:
      "Creating opportunities for farmers, women and youth.",
    icon: Users,
  },
];

const Impact = () => {
  return (
    <section className="relative overflow-hidden bg-[#032E20] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032E20]/95 via-[#06452C]/85 to-[#021F17]/95" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('/images/impact-bg.jpg')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#80C995] sm:text-xs">
            Our Impact
          </span>

          <h2 className="text-xl font-extrabold leading-tight sm:text-2xl lg:text-3xl">
            Technology for People, Farms and the Planet
          </h2>
        </div>

        {/* Impact items */}
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className={`px-4 sm:px-6 ${
                  index % 2 === 0
                    ? "border-r border-white/10 md:border-r"
                    : "md:border-r md:border-white/10"
                } ${
                  index === 3
                    ? "border-r-0"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="mb-4 text-[#42C875]">
                  <Icon size={27} strokeWidth={2.3} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-sm font-bold leading-snug sm:text-base">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="max-w-[190px] text-xs leading-5 text-white/75 sm:text-sm">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
