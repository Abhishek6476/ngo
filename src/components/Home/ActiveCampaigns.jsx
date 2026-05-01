// import { FaHeart, FaArrowRight } from "react-icons/fa";
// import campaign1 from "../assets/campaign1.jpg";
// import campaign2 from "../assets/campaign2.jpg";
// import campaign3 from "../assets/campaign3.jpg";

// const campaigns = [
//   {
//     id: 1,
//     image: campaign1,
//     title: "Sponsor a Child's Education",
//     description:
//       "Help underprivileged children access quality education, school supplies, and a brighter future.",
//     raised: 75000,
//     goal: 100000,
//   },
//   {
//     id: 2,
//     image: campaign2,
//     title: "Food Distribution Drive",
//     description:
//       "Provide nutritious meals to families facing hunger and financial hardship in vulnerable communities.",
//     raised: 52000,
//     goal: 80000,
//   },
//   {
//     id: 3,
//     image: campaign3,
//     title: "Healthcare Support Initiative",
//     description:
//       "Deliver essential medical care, health checkups, and medicines to underserved communities.",
//     raised: 68000,
//     goal: 120000,
//   },
// ];

// const ActiveCampaigns = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <hr className="w-16 border-[#C89A31]" />
//             <h4 className="text-[#C89A31] italic text-sm md:text-base">
//               ACTIVE CAMPAIGNS
//             </h4>
//             <hr className="w-16 border-[#C89A31]" />
//           </div>

//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
//             Support Our
//             <span className="text-[#C89A31]"> Ongoing Initiatives</span>
//           </h2>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             Join us in creating meaningful change by supporting our active
//             campaigns and helping communities thrive.
//           </p>
//         </div>

//         {/* Campaign Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {campaigns.map((campaign) => {
//             const progress = (campaign.raised / campaign.goal) * 100;

//             return (
//               <div
//                 key={campaign.id}
//                 className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:-translate-y-3 transition-all duration-500"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={campaign.image}
//                     alt={campaign.title}
//                     className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />

//                   <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
//                     <FaHeart className="text-[#C89A31] text-lg" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {campaign.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed mb-6">
//                     {campaign.description}
//                   </p>

//                   {/* Progress Info */}
//                   <div className="flex justify-between text-sm font-medium mb-3">
//                     <span className="text-gray-700">
//                       Raised: ₹{campaign.raised.toLocaleString()}
//                     </span>
//                     <span className="text-[#C89A31]">
//                       {Math.round(progress)}%
//                     </span>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
//                     <div
//                       className="bg-[#C89A31] h-3 rounded-full transition-all duration-1000"
//                       style={{ width: `${progress}%` }}
//                     />
//                   </div>

//                   {/* Goal */}
//                   <p className="text-sm text-gray-500 mb-6">
//                     Goal: ₹{campaign.goal.toLocaleString()}
//                   </p>

//                   {/* Button */}
//                   <button className="w-full bg-[#C89A31] text-white py-3 rounded-xl font-semibold hover:bg-[#a67c25] transition flex items-center justify-center gap-2">
//                     Donate Now
//                     <FaArrowRight />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ActiveCampaigns;




// import { FaHeart, FaShareAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// import campaign1 from "../assets/campaign1.jpg";
// import campaign2 from "../assets/campaign2.jpg";
// import campaign3 from "../assets/campaign3.jpg";

// const campaigns = [
//   {
//     id: 1,
//     title: "Old Age Home Care",
//     description:
//       "Supporting the elderly with love, dignity, and medical care in old age homes around Delhi.",
//     image: campaign1,
//     raised: 1100,
//     goal: 200000,
//     status: "Active",
//   },
//   {
//     id: 2,
//     title: "Education Under Bridge",
//     description:
//       "Providing books, meals, and a safe learning environment for children living under Delhi bridges.",
//     image: campaign2,
//     raised: 1627,
//     goal: 100000,
//     status: "Active",
//   },
//   {
//     id: 3,
//     title: "Donate Blanket Campaign",
//     description:
//       "Help us provide warmth and comfort to those in need during the winter season.",
//     image: campaign3,
//     raised: 73,
//     goal: 200,
//     status: "Active",
//   },
// ];

// const ActiveCampaigns = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
//             Active <span className="text-[#C89A31]">Campaigns</span>
//           </h2>

//           <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
//             Be a part of our ongoing efforts to make a tangible difference in
//             the lives of those who need it most.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {campaigns.map((campaign, index) => {
//             const progress = (campaign.raised / campaign.goal) * 100;

//             return (
//               <motion.div
//                 key={campaign.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 className="rounded-2xl border border-[#e5e0d3] bg-white p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-[#fdfbf4] hover:to-[#f6e7b5] hover:shadow-xl"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden rounded-xl">
//                   <img
//                     src={campaign.image}
//                     alt={campaign.title}
//                     className="rounded-xl h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
//                   />
//                 </div>

//                 {/* Status */}
//                 <div className="mt-4">
//                   <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full inline-flex items-center gap-2">
//                     <span className="w-2 h-2 bg-white rounded-full"></span>
//                     {campaign.status}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="mt-4">
//                   <h3 className="font-bold text-2xl text-gray-900">
//                     {campaign.title}
//                   </h3>

//                   <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                     {campaign.description}
//                   </p>

//                   {/* Progress */}
//                   <div className="mt-6">
//                     <div className="flex justify-between text-sm mb-2">
//                       <span className="text-gray-700 font-medium">
//                         Progress
//                       </span>
//                       <span className="text-[#C89A31] font-bold">
//                         ₹{campaign.raised.toLocaleString()} / ₹
//                         {campaign.goal.toLocaleString()}
//                       </span>
//                     </div>

//                     <div className="w-full bg-yellow-100 rounded-full h-3">
//                       <div
//                         className="bg-[#C89A31] h-3 rounded-full transition-all duration-700"
//                         style={{ width: `${progress}%` }}
//                       />
//                     </div>
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex gap-3 mt-6">
//                     <button className="group flex-1 flex items-center justify-center gap-2 font-semibold py-3 rounded-xl transition-all duration-300 bg-yellow-50 text-[#C89A31] border border-yellow-400 hover:bg-[#C89A31] hover:text-white">
//                       <FaHeart className="group-hover:scale-110 transition" />
//                       Donate Now
//                     </button>

//                     <button className="w-12 flex items-center justify-center rounded-xl transition-all duration-300 bg-[#C89A31] text-white hover:scale-105">
//                       <FaShareAlt />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* View All */}
//         <div className="flex justify-center mt-12">
//           <button className="px-8 py-3 rounded-xl font-semibold bg-yellow-100 text-[#C89A31] border border-yellow-300 hover:bg-[#C89A31] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//             View All Campaigns
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ActiveCampaigns;


import { FaHeart, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import campaign1 from "../../assets/campaign1.jpg";
import campaign2 from "../../assets/campaign2.jpg";
import campaign3 from "../../assets/campaign3.jpg";

const campaigns = [
  {
    id: 1,
    title: "Feed Hungry Children",
    description:
      "Join us in providing nutritious meals, quality education, and essential care to underprivileged children across communities.",
    image: campaign1,
    raised: 1100,
    goal: 200000,
  },
  {
    id: 2,
    title: "Support Women Empowerment",
    description:
      "Help women gain financial independence through skill development, education, and sustainable livelihood opportunities.",
    image: campaign2,
    raised: 1627,
    goal: 100000,
  },
  {
    id: 3,
    title: "Healthcare For Everyone",
    description:
      "Together, we can deliver free medical camps, life-saving medicines, and healthcare support to vulnerable families.",
    image: campaign3,
    raised: 73,
    goal: 200,
  },
];

const ActiveCampaigns = () => {
  const navigate = useNavigate();

  const handleShare = (campaign) => {
    if (navigator.share) {
      navigator.share({
        title: campaign.title,
        text: campaign.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Campaign link copied to clipboard!");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
            Active <span className="text-[#C89A31]">Campaigns</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Be a part of our ongoing efforts to create meaningful change and
            transform lives through compassion, education, and care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => {
            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#e5e0d3] bg-white p-4 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-[#fdfbf4] hover:to-[#f6e7b5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="h-44 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {campaign.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[72px]">
                    {campaign.description}
                  </p>

                  {/* Progress */}
                  <div className="mt-5">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">
                        Progress
                      </span>

                      <span className="text-[#C89A31] font-bold text-xs">
                        ₹{campaign.raised.toLocaleString()} / ₹
                        {campaign.goal.toLocaleString()}
                      </span>
                    </div>

                    <div className="w-full h-2.5 bg-yellow-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#C89A31] rounded-full transition-all duration-700"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => navigate("/donate")}
                      className="group flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold bg-yellow-50 text-[#C89A31] border border-yellow-400 hover:bg-[#C89A31] hover:text-white transition-all duration-300"
                    >
                      <FaHeart className="group-hover:scale-110 transition" />
                      Donate Now
                    </button>

                    <button
                      onClick={() => handleShare(campaign)}
                      className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#C89A31] text-white hover:scale-105 transition-all duration-300"
                    >
                      <FaShareAlt />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/campaigns")}
            className="px-8 py-3 rounded-xl font-semibold bg-yellow-100 text-[#C89A31] border border-yellow-300 hover:bg-[#C89A31] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View All Campaigns
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActiveCampaigns;