import {
  FaBookOpen,
  FaHeartbeat,
  FaFemale,
  FaHandsHelping,
} from "react-icons/fa";

const impactData = [
  {
    id: 1,
    amount: "₹500",
    title: "Educate a Child",
    description:
      "Provides school supplies and essential learning materials for one child.",
    icon: FaBookOpen,
  },
  {
    id: 2,
    amount: "₹1,000",
    title: "Healthcare Support",
    description:
      "Helps provide medical care and health checkups for families.",
    icon: FaHeartbeat,
  },
  {
    id: 3,
    amount: "₹2,500",
    title: "Women Empowerment",
    description:
      "Supports vocational training and skill development for women.",
    icon: FaFemale,
  },
  {
    id: 4,
    amount: "₹5,000",
    title: "Community Growth",
    description:
      "Contributes to sustainable welfare and development projects.",
    icon: FaHandsHelping,
  },
];

const DonationImpact = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              YOUR IMPACT
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
            Why Your
            <span className="text-[#C89A31]"> Donation Matters</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Every contribution helps transform lives, empower communities,
            and create lasting change.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-5 group-hover:bg-[#C89A31] transition-all duration-500">
                  <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
                </div>

                {/* Amount */}
                <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-[#C89A31] font-bold text-base mb-4">
                  {item.amount}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;