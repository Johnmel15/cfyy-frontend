import { FaHeartbeat, FaAward, FaUsers, FaHospital } from "react-icons/fa";
const About = () => {
  return (
    <div>
      {/* Mission & Vision Section */}
      <section className="py-16 bg-white pt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/about-image.jpg" // Add your image
                alt="Medical facility"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                To provide exceptional healthcare services that improve the
                quality of life for our patients and communities through
                compassionate care, cutting-edge technology, and continuous
                innovation.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the leading healthcare provider, recognized for excellence
                in patient care, medical expertise, and community wellness
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="20+" text="Years Experience" />
            <StatCard number="50+" text="Medical Specialists" />
            <StatCard number="10k+" text="Happy Patients" />
            <StatCard number="24/7" text="Emergency Care" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<FaHeartbeat />}
              title="Patient-Centered Care"
              description="We put our patients first in everything we do."
            />
            <ValueCard
              icon={<FaAward />}
              title="Excellence"
              description="We strive for the highest standards in medical care."
            />
            <ValueCard
              icon={<FaUsers />}
              title="Compassion"
              description="We treat everyone with kindness and understanding."
            />
            <ValueCard
              icon={<FaHospital />}
              title="Innovation"
              description="We embrace advanced medical technologies and practices."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ number, text }) => (
  <div>
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-sm">{text}</div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="text-primary text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
