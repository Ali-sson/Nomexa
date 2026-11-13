
import {
  Target,
  Sprout,
  Lightbulb,
  Users,
  Leaf,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const coreValues = [
  {
    title: "Innovation",
    description: "Practical solutions for real challenges.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    description: "Creating measurable change for people and the planet.",
    icon: Users,
  },
  {
    title: "Sustainability",
    description: "Responsible use of resources for long-term value.",
    icon: Leaf,
  },
  {
    title: "Collaboration",
    description: "Working with partners to achieve shared goals.",
    icon: Handshake,
  },
  {
    title: "Integrity",
    description: "Doing the right thing with transparency and accountability.",
    icon: ShieldCheck,
  },
];

function VisionMissionValues() {
  return (
    <section className="bg-[#F1F7F0] px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:items-center">

          {/* Section heading */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Our Purpose
            </p>

            <h2 className="max-w-sm text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Our Vision, Mission and Values
            </h2>
          </div>

          {/* Vision and Mission cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Vision */}
            <div className="flex gap-4 rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                <Target size={21} />
              </div>

              <div>
                <h3 className="mb-2 font-bold text-slate-900">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  A future where every farming community in Africa can
                  produce food sustainably and thrive despite climate
                  challenges.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex gap-4 rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                <Sprout size={21} />
              </div>

              <div>
                <h3 className="mb-2 font-bold text-slate-900">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  To empower farmers with affordable, solar-powered and
                  IoT-enabled agricultural technologies that improve
                  productivity, optimise resource use and strengthen
                  climate-resilient food systems.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Core values */}
        <div className="mt-12 border-t border-green-900/10 pt-8">

          <h3 className="mb-7 text-lg font-bold text-slate-900">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h4 className="mb-1 text-sm font-bold text-slate-900">
                      {value.title}
                    </h4>

                    <p className="text-xs leading-relaxed text-slate-600">
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
}

export default VisionMissionValues;
