import WorldBank from "../assets/WorldBank.png";
import IFAD from "../assets/ifad.png";
import USAID from "../assets/usaid.png";
import CGIAR from "../assets/cgiar.png";
import UNDP from "../assets/undp.png";

const Partners = () => {
  const partners = [
  
    { name: "IFAD", logo: IFAD },
    { name: "USAID", logo: USAID },
    { name: "CGIAR", logo: CGIAR },
    { name: "UNDP", logo: UNDP },
      { name: "World-Bank", logo: WorldBank },
  ];

  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#046B12]">
            Our Partners
          </p>

          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Stronger Together
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            We collaborate with trusted global organisations and development
            partners to advance agricultural innovation, climate resilience,
            and sustainable growth.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:justify-between lg:gap-x-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-14 w-24 items-center justify-center sm:w-28"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-24 w-full transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;