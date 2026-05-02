import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserSecret } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50 to-white py-12 md:py-14 px-4">
        {/* Background Blur Effects */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#C89A31]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C89A31]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#C89A31]/10 text-[#C89A31] font-semibold mb-5"
              >
                <FaShieldAlt className="text-base" />
                Your Privacy Matters
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                Privacy
                <span className="block text-[#C89A31]">Policy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-base text-gray-600 leading-relaxed max-w-xl"
              >
                Protecting your personal information with transparency,
                security, and complete confidentiality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-yellow-100">
                  <FaLock className="text-[#C89A31]" />
                  <span className="text-sm font-medium text-gray-700">
                    Secure Data
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-yellow-100">
                  <FaUserSecret className="text-[#C89A31]" />
                  <span className="text-sm font-medium text-gray-700">
                    Confidential
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-yellow-100 p-6 md:p-8">
                <div className="w-16 h-16 rounded-full bg-[#C89A31]/10 flex items-center justify-center mx-auto mb-5">
                  <FaShieldAlt className="text-3xl text-[#C89A31]" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
                  Trust & Security
                </h3>

                <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed mb-5">
                  Your information is encrypted, protected, and handled
                  responsibly.
                </p>

                <div className="space-y-2">
                  {[
                    "Encrypted Data",
                    "No Data Sharing",
                    "Regular Security Updates",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-yellow-50"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C89A31]"></div>
                      <span className="text-sm text-gray-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white text-gray-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Privacy Policy
          </h2>

          <p className="mb-6 text-lg leading-relaxed">
            At Startup Yogdan, we prioritize your privacy and are committed to
            protecting your personal data.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            1. Information We Collect
          </h3>
          <p className="mb-6 leading-relaxed">
            We collect information that you provide directly to us, such as when
            you create an account, update your profile, request customer
            support, or communicate with us.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            2. How We Use Your Information
          </h3>
          <p className="mb-6 leading-relaxed">
            We use the information we collect to provide, maintain, and improve
            our services, including communicating with you, responding to your
            requests, and delivering excellent customer support.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            3. Sharing of Information
          </h3>
          <p className="mb-6 leading-relaxed">
            We may share your information with trusted third-party vendors,
            service providers, contractors, or agents who perform services on
            our behalf while maintaining strict confidentiality.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            4. Security
          </h3>
          <p className="mb-6 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information against unauthorized access, disclosure,
            alteration, or destruction.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            5. Changes to This Policy
          </h3>
          <p className="mb-6 leading-relaxed">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page, and we encourage you to review it regularly.
          </p>

          <p className="mt-12 text-lg">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
  href="mailto:contact@havefaithsolution.com"
  className="inline-flex items-center gap-2 mt-2 text-[#C89A31] font-semibold hover:text-[#b88924] transition-colors duration-300 group"
>
  <span className="border-b-2 border-transparent group-hover:border-[#C89A31] transition-all duration-300">
    contact@havefaithsolution.com
  </span>
</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
