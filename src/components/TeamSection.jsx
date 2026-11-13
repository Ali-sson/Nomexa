
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const defaultMembers = [
  {
    name: "Engineering & Technology",
    description: "Designing practical solutions.",
    image: "",
    alt: "Engineering and technology team member",
  },
  {
    name: "Agriculture & Sustainability",
    description: "Supporting productive farms.",
    image: "",
    alt: "Agriculture and sustainability team member",
  },
  {
    name: "Operations & Partnerships",
    description: "Scaling impact together.",
    image: "",
    alt: "Operations and partnerships team member",
  },
];

const TeamSection = ({
  eyebrow = "Our Team",
  title = "A Team Committed to Change",
  description = "Nomexa Solutions is driven by a multidisciplinary team with expertise in engineering, renewable energy, digital technology and agriculture. We are united by a shared commitment to innovation, sustainability and inclusive growth.",
  buttonText = "Meet Our Team",
  buttonLink = "/team",
  showButton = true,
  members = defaultMembers,
}) => {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.8fr] lg:gap-12">

        {/* Left content */}
        <div className="max-w-lg">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#269447]">
            {eyebrow}
          </span>

          <h2 className="max-w-md text-3xl font-extrabold leading-tight text-[#142B20] sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            {description}
          </p>

          {showButton && (
            <Link
              to={buttonLink}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#06452B] px-5 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-[#78BE44] hover:text-[#142B20]"
            >
              {buttonText}

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {members.map((member) => (
            <div key={member.name} className="min-w-0">

              {/* Member image */}
              <div className="overflow-hidden rounded-xl bg-[#EAF3E8]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.alt || member.name}
                    className="aspect-[4/4.2] w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex aspect-[4/4.2] items-center justify-center text-sm font-medium text-[#52735B]">
                    Team image
                  </div>
                )}
              </div>

              {/* Member details */}
              <div className="mt-3 text-center">
                <h3 className="text-xs font-bold leading-snug text-[#142B20] sm:text-sm">
                  {member.name}
                </h3>

                <p className="mt-1 text-[11px] leading-relaxed text-gray-500 sm:text-xs">
                  {member.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
