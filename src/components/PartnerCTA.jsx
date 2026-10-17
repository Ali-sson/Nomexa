import BackgroundImage from "../assets/ctaimg.png";
import { FaArrowRight } from "react-icons/fa";

const PartnerCTA = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
        {/* Background Image */}
        <img
          src={BackgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#031D12]/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12 md:py-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#66B56B] sm:text-sm">
              Let's Build a Better Tomorrow
            </p>

            <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Partner With Us for
              <br className="hidden sm:block" /> Climate-Resilient Agriculture
            </h2>

            <p className="max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              We welcome farmers, agribusinesses, development organisations,
              research institutions, and technology providers. Let’s work
              together to build a more sustainable and food-secure future.
            </p>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <a
              href="/contact"
              className="inline-flex min-w-44 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-[#046B12] hover:text-white"
            >
              Get in Touch
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;