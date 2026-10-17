
import {
  Droplets,
  Cloud,
  Sprout,
  ArrowRight,
} from "lucide-react";

import IrrigationImage from "../assets/irrigation.png";
import IotImage from "../assets/iot.png";
import HorticultureImage from "../assets/irrigation.png";

const focusAreas = [
  {
    title: "Irrigation",
    description:
      "Reliable, solar-powered irrigation solutions that help farmers access water, improve productivity and build resilience to climate change.",
    image: IrrigationImage,
    icon: Droplets,
    alt: "Solar-powered irrigation system on a farm",
  },
  {
    title: "IoT / Cloud Computing for Climate-Smart Agriculture",
    description:
      "Smart monitoring, data-driven insights and cloud-based tools to optimise water use, monitor farm conditions and support better decision-making.",
    image: IotImage,
    icon: Cloud,
    alt: "Digital technology monitoring agricultural crops",
  },
  {
    title: "Horticulture",
    description:
      "Modern growing systems, including hydroponics, to enable efficient, high-quality and year-round food production.",
    image: HorticultureImage,
    icon: Sprout,
    alt: "Green leafy vegetables growing in a modern greenhouse",
  },
];

const FocusAreas = () => {
  return (
    <section className="bg-light-green-tint px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-dark-green">
            Our Focus Areas
          </span>

          <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Integrated Solutions for Modern Agriculture
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            We combine renewable energy, digital technology and
            modern growing systems to support sustainable and
            productive food systems.
          </p>
        </div>

        {/* Focus area cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
  key={area.title}
  className="group rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
>
  {/* Image */}
  <div className="relative h-52 overflow-visible sm:h-56">
    <img
      src={area.image}
      alt={area.alt}
      className="h-full w-full rounded-t-xl object-cover transition duration-500 group-hover:scale-105"
    />

    {/* Overlapping icon */}
    <div className="absolute bottom-0 left-5 z-20 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-md">
      <Icon size={23} strokeWidth={2} />
    </div>
  </div>

                {/* Card content */}
                <div className="px-5 pb-6 pt-9 sm:px-6">
                  <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900">
                    {area.title}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-gray-600">
                    {area.description}
                  </p>

                  <a
                    href="/solutions"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-dark-green transition-colors hover:text-primary"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
