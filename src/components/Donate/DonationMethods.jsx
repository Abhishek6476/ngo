// import {
//   FaUniversity,
//   FaBuilding,
//   FaLandmark,
//   FaHashtag,
//   FaCode,
//   FaMapMarkerAlt,
//   FaInfoCircle,
//   FaQrcode,
//   FaMobileAlt,
//   FaCheckCircle,
// } from "react-icons/fa";

// import qrImage from "../../assets/qr.jpeg";

// const DonationMethods = () => {
//   const bankDetails = [
//     {
//       icon: FaBuilding,
//       label: "Account Name",
//       value: "Have Faith Foundation",
//     },
//     {
//       icon: FaLandmark,
//       label: "Bank Name",
//       value: "State Bank of India",
//     },
//     {
//       icon: FaHashtag,
//       label: "Account Number",
//       value: "1234567890123456",
//     },
//     {
//       icon: FaCode,
//       label: "IFSC Code",
//       value: "SBIN0001234",
//     },
//     {
//       icon: FaMapMarkerAlt,
//       label: "Branch Address",
//       value: "Connaught Place, New Delhi, India",
//     },
//   ];

//   const steps = [
//     "Open any UPI App",
//     "Scan the QR Code",
//     "Complete Your Donation",
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <hr className="w-16 border-[#C89A31]" />
//             <h4 className="text-[#C89A31] italic text-sm md:text-base">
//               DONATE NOW
//             </h4>
//             <hr className="w-16 border-[#C89A31]" />
//           </div>

//           <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
//             Choose Your
//             <span className="text-[#C89A31]"> Donation Method</span>
//           </h2>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             Select the donation method that works best for you and help us
//             continue transforming lives.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Bank Details */}
//           <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31]" />

//             <div className="p-8">
//               <div className="text-center mb-8">
//                 <div className="w-20 h-20 mx-auto rounded-3xl bg-[#C89A31]/10 flex items-center justify-center mb-5 group-hover:bg-[#C89A31] transition-all duration-500">
//                   <FaUniversity className="text-4xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   Bank Account Details
//                 </h3>

//                 <p className="text-gray-500">
//                   Secure direct bank transfer
//                 </p>
//               </div>

//               <div className="space-y-5">
//                 {bankDetails.map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={index}
//                       className="p-4 rounded-2xl bg-yellow-50 border border-yellow-100 hover:border-[#C89A31]/30 transition-all duration-300"
//                     >
//                       <div className="flex items-start gap-4">
//                         <div className="w-11 h-11 rounded-xl bg-[#C89A31]/10 flex items-center justify-center flex-shrink-0">
//                           <Icon className="text-[#C89A31] text-lg" />
//                         </div>

//                         <div>
//                           <p className="text-sm text-gray-500 mb-1">
//                             {item.label}
//                           </p>
//                           <h4 className="font-semibold text-gray-900 break-words">
//                             {item.value}
//                           </h4>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="mt-8 p-5 rounded-2xl bg-[#C89A31]/10 border border-[#C89A31]/20">
//                 <div className="flex items-start gap-3">
//                   <FaInfoCircle className="text-[#C89A31] text-xl mt-1 flex-shrink-0" />
//                   <p className="text-gray-700 leading-relaxed">
//                     Please share your payment details with us after donating
//                     to receive your official donation receipt.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* QR Code */}
//           <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31]" />

//             <div className="p-8 text-center">
//               <div className="w-20 h-20 mx-auto rounded-3xl bg-[#C89A31]/10 flex items-center justify-center mb-5 group-hover:bg-[#C89A31] transition-all duration-500">
//                 <FaQrcode className="text-4xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 Scan & Pay
//               </h3>

//               <p className="text-gray-500 mb-8">
//                 Quick and secure UPI donation
//               </p>

//               {/* QR Image */}
//               <div className="inline-block p-4 rounded-3xl bg-yellow-50 border border-yellow-100 shadow-md">
//                 <img
//                   src={qrImage}
//                   alt="UPI QR Code"
//                   className="w-64 h-64 object-contain rounded-2xl"
//                 />
//               </div>

//               {/* Steps */}
//               <div className="mt-8 text-left space-y-4">
//                 {steps.map((step, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4 p-4 rounded-2xl bg-yellow-50 border border-yellow-100"
//                   >
//                     <div className="w-10 h-10 rounded-full bg-[#C89A31] text-white flex items-center justify-center font-bold flex-shrink-0">
//                       {index + 1}
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <FaMobileAlt className="text-[#C89A31]" />
//                       <span className="font-medium text-gray-800">
//                         {step}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 flex items-center justify-center gap-3 text-[#C89A31] font-semibold">
//                 <FaCheckCircle />
//                 Safe, Secure & Instant Payment
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DonationMethods;



import {
  FaUniversity,
  FaBuilding,
  FaLandmark,
  FaHashtag,
  FaCode,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaQrcode,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import qrImage from "../../assets/qr.jpeg";

const DonationMethods = () => {
  const bankDetails = [
    {
      icon: FaBuilding,
      label: "Account Name",
      value: "Have Faith Foundation",
    },
    {
      icon: FaLandmark,
      label: "Bank Name",
      value: "State Bank of India",
    },
    {
      icon: FaHashtag,
      label: "Account Number",
      value: "1234567890123456",
    },
    {
      icon: FaCode,
      label: "IFSC Code",
      value: "SBIN0001234",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Branch Address",
      value: "Sector-63, Noida, India",
    },
  ];

  const steps = [
    "Open any UPI App",
    "Scan the QR Code",
    "Complete Your Donation",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              DONATE NOW
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your
            <span className="text-[#C89A31]"> Donation Method</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Select the donation method that works best for you.
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Bank Card */}
          <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31]" />

            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89A31] transition-all duration-500">
                  <FaUniversity className="text-3xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Bank Account Details
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Secure bank transfer
                </p>
              </div>

              <div className="space-y-3">
                {bankDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="p-3 rounded-2xl bg-yellow-50 border border-yellow-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C89A31]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-[#C89A31] text-base" />
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            {item.label}
                          </p>
                          <h4 className="font-semibold text-sm text-gray-900">
                            {item.value}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 p-4 rounded-2xl bg-[#C89A31]/10 border border-[#C89A31]/20">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-[#C89A31] text-lg mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Share payment details after donation for receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Card */}
          <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31]" />

            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89A31] transition-all duration-500">
                <FaQrcode className="text-3xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                Scan & Pay
              </h3>

              <p className="text-sm text-gray-500 mt-1 mb-6">
                Quick UPI Donation
              </p>

              {/* QR */}
              <div className="inline-block p-3 rounded-2xl bg-yellow-50 border border-yellow-100 shadow-sm">
                <img
                  src={qrImage}
                  alt="UPI QR Code"
                  className="w-52 h-52 object-contain rounded-xl"
                />
              </div>

              {/* Steps */}
              <div className="mt-6 text-left space-y-3">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-yellow-50 border border-yellow-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#C89A31] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>

                    <FaMobileAlt className="text-[#C89A31] text-sm" />

                    <span className="text-sm font-medium text-gray-800">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[#C89A31] font-semibold text-sm">
                <FaCheckCircle />
                Safe & Secure Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationMethods;