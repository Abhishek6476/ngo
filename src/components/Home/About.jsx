
import { useNavigate } from "react-router-dom";
import mainImg from "../../assets/LandImg.png";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-white to-yellow-50 pt-0 pb-16">
      
      <div className="max-w-7xl mx-auto pl-6 md:pl-12 pr-0 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* TOP LINE */}
          <div className="flex items-center gap-3 mb-6">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              HAVE FAITH SOLUTION
            </h4>
          </div>

          {/* TEXT */}
          <div className="max-w-xl">

            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
              At <span className="text-[#C89A31]">Have Faith Solution</span>,
              we work towards building a better{" "}
              <span className="text-[#C89A31]">future</span>
            </h1>

            <p className="text-gray-600 mb-6">
              We are committed to bringing positive change in society by
              supporting communities, empowering individuals, and creating
              opportunities for growth and development.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">

              <button
                onClick={() => navigate("/about")}
                className="px-5 py-2 border border-[#C89A31] text-[#C89A31] rounded-md hover:bg-[#C89A31] hover:text-white transition"
              >
                Know More
              </button>

              <button
                onClick={() => navigate("/donate")}
                className="px-5 py-2 bg-[#C89A31] text-white rounded-md hover:bg-[#a67c25] transition"
              >
                Donate
              </button>

            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-end">
          <img
            src={mainImg}
            alt="About"
            className="w-full max-w-none object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutPage;