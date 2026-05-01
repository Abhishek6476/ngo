import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaPaperPlane,
} from "react-icons/fa";

const faqs = [
  {
    question: "How can I volunteer with your organization?",
    answer:
      "You can join our mission by filling out the volunteer form or contacting our team directly. We welcome passionate individuals eager to create positive change.",
  },
  {
    question: "How can I donate to support your programs?",
    answer:
      "Donations can be made securely through our donation page. Every contribution directly supports our community initiatives and outreach programs.",
  },
  {
    question: "Do you collaborate with corporate partners?",
    answer:
      "Absolutely. We actively partner with organizations, businesses, and institutions to expand our impact and reach more communities.",
  },
  {
    question: "Where are your programs currently operating?",
    answer:
      "Our programs operate across multiple regions, focusing on education, healthcare, women empowerment, and disaster relief initiatives.",
  },
];

const ContactPageSections = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-5 py-2 rounded-full bg-[#C89A31]/10 text-[#C89A31] font-semibold mb-5">
                  GET IN TOUCH
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  We'd Love to
                  <span className="text-[#C89A31]"> Hear From You</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Reach out to us for partnerships, volunteering,
                  donations, or any questions about our mission.
                </p>
              </div>

              {[
                {
                  icon: FaMapMarkerAlt,
                  title: "Our Office",
                  value: "123 Hope Street, New Delhi, India",
                },
                {
                  icon: FaPhoneAlt,
                  title: "Call Us",
                  value: "+91 98765 43210",
                },
                {
                  icon: FaEnvelope,
                  title: "Email Us",
                  value: "contact@havefaith.org",
                },
                {
                  icon: FaClock,
                  title: "Working Hours",
                  value: "Mon - Sat : 9:00 AM - 6:00 PM",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center text-[#C89A31] text-2xl shrink-0">
                    <item.icon />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#C89A31] hover:bg-[#C89A31] hover:text-white transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 outline-none"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C89A31] text-white font-semibold hover:bg-[#b78625] transition-all duration-300 shadow-lg"
                >
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our
              <span className="text-[#C89A31]"> Office</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Find us easily and connect with our team in person.
            </p>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-[500px] border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-[#C89A31]/10 text-[#C89A31] font-semibold mb-5">
              FAQ
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="text-[#C89A31]"> Questions</span>
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {faq.question}
                  </h3>

                  <FaChevronDown
                    className={`text-[#C89A31] transition-transform duration-300 ${
                      activeFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C89A31] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Mission Today
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Together, we can create meaningful change and build
            a brighter future for communities everywhere.
          </p>

          <button className="px-10 py-4 rounded-full bg-white text-[#C89A31] font-bold hover:scale-105 transition-transform duration-300 shadow-xl">
            Become a Volunteer
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactPageSections;