
const Hero = ({
  eyebrow = "CLIMATE-SMART AGRICULTURE",
  title,
  description,
  backgroundImage,
  primaryButtonText = "Explore Our Technology",
  primaryButtonLink = "/technology",
  secondaryButtonText = "Partner With Us",
  secondaryButtonLink = "/partnerships",
  badgeTitle = "Clean Energy. Productive Farms.",
  badgeDescription = "Resilient Communities.",
}) => {
  return (
    <section
      className="relative flex min-h-[540px] items-center overflow-hidden bg-cover bg-center md:min-h-[600px] lg:min-h-[620px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark gradient behind the text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/10" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
          {eyebrow}
        </p>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-100 sm:text-base sm:leading-7">
            {description}
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={primaryButtonLink}
              className="inline-flex items-center gap-3 rounded-full bg-[#78BE44] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#046B12]"
            >
              {primaryButtonText}
              <span aria-hidden="true">→</span>
            </a>

            <a
              href={secondaryButtonLink}
              className="inline-flex items-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-[#78BE44] hover:bg-[#78BE44] hover:text-white"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>

      {/* Sustainability badge */}
      <div className="absolute bottom-5 right-5 z-10 hidden max-w-[235px] items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg sm:flex md:bottom-8 md:right-8">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF5E3] text-xl">
          🌱
        </div>

        <div>
          <p className="text-xs font-bold text-gray-900">
            {badgeTitle}
          </p>
          <p className="mt-1 text-xs text-gray-600">
            {badgeDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
