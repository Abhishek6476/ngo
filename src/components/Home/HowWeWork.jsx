import {
  FaSearch,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";

const processSteps = [
  {
    id: 1,
    icon: FaSearch,
    title: "Identify Needs",
    description:
      "We carefully assess community challenges and understand the real needs of the people we serve.",
  },
  {
    id: 2,
    icon: FaLightbulb,
    title: "Create Solutions",
    description:
      "Our team designs sustainable programs that address problems effectively and create lasting change.",
  },
  {
    id: 3,
    icon: FaHandsHelping,
    title: "Take Action",
    description:
      "Dedicated volunteers and partners work together to implement impactful initiatives on the ground.",
  },
  {
    id: 4,
    icon: FaChartLine,
    title: "Measure Impact",
    description:
      "We continuously evaluate our efforts to ensure transparency, accountability, and meaningful results.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              HOW WE MAKE IT HAPPEN
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
            Turning Compassion Into
            <span className="text-[#C89A31]"> Meaningful Impact</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our approach is built on understanding, innovation, collaboration,
            and measurable outcomes that create lasting positive change.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-[#C89A31]/10">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
                  <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;