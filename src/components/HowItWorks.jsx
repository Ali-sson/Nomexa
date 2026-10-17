
import {
  Users,
  Settings2,
  ChartNoAxesCombined,
  Handshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Needs",
    description:
      "We assess farm conditions and objectives.",
    icon: Users,
  },
  {
    number: "02",
    title: "Design & Deploy",
    description:
      "We customise and install the right solutions.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Monitor & Optimise",
    description:
      "We use data and insights to improve performance.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "04",
    title: "Support & Grow",
    description:
      "We provide ongoing support and training.",
    icon: Handshake,
  },
];

const HowItWorks = ({
  eyebrow = "HOW IT WORKS",
  title = "From Innovation to Impact",
  description = "We take a practical, end-to-end approach to deliver solutions that work for farmers.",
}) => {
  return (
    <section className="bg-light-green-tint px-5 py-16 sm:px-8 sm:py-20 md:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-7xl text-center">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#046B12]">
            {eyebrow}
          </span>

          <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            {description}
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex gap-4 lg:block lg:px-3"
              >
                {/* Step icon */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EC] text-[#087D3D] sm:h-16 sm:w-16 lg:mb-5">
                  <Icon size={29} strokeWidth={1.7} />

                  {/* Number badge */}
                  <span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#087D3D] text-[10px] font-bold text-white ring-2 ring-white">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="max-w-xs text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow: desktop only */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-5 hidden -translate-x-1/2 text-[#8ABF96] lg:block">
                    <ArrowRight size={22} strokeWidth={1.5} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
