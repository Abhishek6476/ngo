import CountUp from "react-countup";
import {
  FaHandsHelping,
  FaUsers,
  FaGlobeAsia,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: FaHandsHelping,
    number: 10000,
    suffix: "+",
    label: "Lives Impacted",
  },
  {
    id: 2,
    icon: FaUsers,
    number: 500,
    suffix: "+",
    label: "Active Volunteers",
  },
  {
    id: 3,
    icon: FaGlobeAsia,
    number: 120,
    suffix: "+",
    label: "Communities Served",
  },
  {
    id: 4,
    icon: FaAward,
    number: 15,
    suffix: "+",
    label: "Years of Service",
  },
];

const ImpactStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              OUR IMPACT
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
            Transforming Lives Through
            <span className="text-[#C89A31]"> Compassion & Action</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Every number represents a life touched, a community empowered,
            and a future transformed through our collective efforts.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="group bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-2xl border border-gray-100 hover:-translate-y-3 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center group-hover:bg-[#C89A31] transition-all duration-500">
                  <Icon className="text-4xl text-[#C89A31] group-hover:text-white transition duration-500" />
                </div>

                {/* Counter */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  <CountUp
                    end={stat.number}
                    duration={3}
                    separator=","
                    suffix={stat.suffix}
                  />
                </h3>

                {/* Label */}
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;