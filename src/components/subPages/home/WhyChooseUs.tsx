import Container from "@/components/container/Container";
import SectionHeader from "@/components/layouts/SectionHeader";
import { FaTrophy, FaRoad, FaTag, FaMapMarkerAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <Container>
      <SectionHeader
        title="Why Choose Us"
        subtitle="We are committed to providing exceptional service and ensuring your experience is exceptional"
      />
      <section className=" text-white py-16 px-4 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-16">
            <div className="flex  items-center gap-6">
              <div className="bg-green-500 p-3 rounded-lg">
                <FaTrophy size={46} e className=" text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">First class services</h3>
                <p className="text-gray-400">
                  Where luxury meets exceptional care, creating unforgettable
                  moments and exceeding your every expectation.
                </p>
              </div>
            </div>

            <div className="flex items-center  gap-6">
              <div className="bg-green-500 p-3 rounded-lg">
                <FaRoad size={46} className=" text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 road assistance</h3>
                <p className="text-gray-400">
                  Reliable support when you need it most, keeping you on the
                  move with confidence and peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative">
            <img
              src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car-2.png"
              alt="Mercedes-Benz Luxury Car"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-16">
            <div className="flex flex-row-reverse items-center gap-6 text-right">
              <div className="bg-green-500 p-3 rounded-lg">
                <FaTag size={46} className=" text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Quality at Minimum Expense
                </h3>
                <p className="text-gray-400">
                  Unlocking affordable brilliance with elevating quality while
                  minimizing costs for maximum value.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center gap-6 text-right">
              <div className="bg-green-500 p-3 rounded-lg">
                <FaMapMarkerAlt size={46} className=" text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Free Pick-Up & Drop-Off
                </h3>
                <p className="text-gray-400">
                  Enjoy free pickup and drop-off services, adding an extra layer
                  of ease to your car rental experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhyChooseUs;
