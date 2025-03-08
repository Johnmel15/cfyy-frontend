import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
}

const Container = () => {
  return (
    <div>
      {/* Services Grid */}
      <section className="py-16 bg-light pt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Expert Medical Team"
              description="Our healthcare professionals are highly qualified and experienced."
            />
            <FeatureCard
              title="Modern Technology"
              description="We use the latest medical equipment and technologies."
            />
            <FeatureCard
              title="Personalized Care"
              description="Treatment plans tailored to your specific needs."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description, image }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-primary font-medium flex items-center hover:text-secondary">
        Learn More <FaArrowRight className="ml-2" />
      </button>
    </div>
  </div>
);

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="text-center p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const services = [
  {
    title: "Primary Care",
    description: "Comprehensive health services for patients of all ages.",
    image: "/images/services/service2.jpg",
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services for urgent health needs.",
    image: "/images/services/service1.jpg",
  },
  {
    title: "Specialized Medicine",
    description: "Expert care in various medical specialties.",
    image: "/images/services/service2.jpg",
  },
  {
    title: "Diagnostic Services",
    description: "Advanced diagnostic testing and imaging services.",
    image: "/images/services/service1.jpg",
  },
  {
    title: "Preventive Care",
    description: "Regular check-ups and preventive health services.",
    image: "/images/services/service2.jpg",
  },
  {
    title: "Rehabilitation",
    description: "Physical therapy and rehabilitation programs.",
    image: "/images/services/service1.jpg",
  },
];

export default Container;
