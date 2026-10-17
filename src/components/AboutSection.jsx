
import { Sprout, Leaf, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutImage from "../assets/aboutImage.png";

const values = [
  {
    title: "Innovation",
    description: "Practical, real-world solutions",
    icon: Sprout,
  },
  {
    title: "Sustainability",
    description: "People, planet and progress",
    icon: Leaf,
  },
  {
    title: "Inclusion",
    description: "Opportunities for all farmers",
    icon: Users,
  },
];

const AboutSection = ({
  eyebrow = "ABOUT NOMEXA SOLUTIONS",
  title = "Driving Change Through Innovation",
  description = "Nomexa Solutions is a climate-smart agricultural technology company committed to transforming agriculture in Africa. We develop practical, scalable and sustainable solutions that empower farmers, optimise resource use and strengthen resilience to climate change.",
  image = AboutImage,
  imageAlt = "Agricultural professional using digital technology in a greenhouse",
}) => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

        {/* Left: Image */}
        <div className="relative">
          <div className="h-[320px] overflow-hidden rounded-2xl sm:h-[400px] lg:h-[470px]">
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image overlay card */}
          <div className="absolute bottom-5 left-4 flex max-w-[250px] items-center gap-3 rounded-xl bg-white p-4 shadow-lg sm:bottom-7 sm:left-7 sm:p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#046B12]">
              <Sprout size={25} />
            </div>

            <p className="text-sm font-bold leading-snug text-gray-800">
              Innovating for a more resilient agri-food system.
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#046B12]">
            {eyebrow}
          </span>

          <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-[42px]">
            {title}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            {description}
          </p>

          {/* CTA */}
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#087D3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#046B12]"
          >
            Our Story
            <ArrowRight size={16} />
          </Link>

          {/* Core values */}
          <div className="mt-9 grid grid-cols-1 gap-5 border-t border-gray-100 pt-7 sm:grid-cols-3 sm:gap-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 shrink-0 text-[#087D3D]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {value.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
