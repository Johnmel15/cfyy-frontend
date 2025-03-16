import Image from "next/image";
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Compassionate Home Health Care Services
          </h2>
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
    <Image
      src={image}
      alt={title}
      width={800}
      height={384}
      className="w-full h-48 object-cover"
    />
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
    title: "Experienced Caregivers",
    description: "Our team of caregivers are experienced in providing high-quality care to our clients. They are trained to handle a variety of medical conditions and are equipped with the skills and knowledge to provide compassionate care.",
    image: "/images/services/service2.jpg",
  },
  {
    title: "Flexible Care Plans",
    description: "At Caring 4 You and Yours, we understand that each client has unique needs and preferences. That's why we offer flexible care plans that can be customized to meet the specific needs of each client.",
    image: "/images/services/service1.jpg",
  },
  {
    title: "Professional Services",
    description: "We are dedicated to providing professional and reliable home health care services. Our caregivers are licensed, insured, and undergo regular training to ensure that they are up-to-date with the latest medical practices and techniques.",
    image: "/images/services/service2.jpg",
  },
  {
    title: "24/7 Availability",
    description: "We are available 24/7 to provide support and care to our clients. Our caregivers are always just a phone call away, and we are committed to providing prompt and reliable services.",
    image: "/images/services/service1.jpg",
  },
  {
    title: "Affordable Care",
    description: "We believe that everyone should have access to high-quality home health care services. That's why we offer affordable care options that are designed to meet the needs and budgets of our clients.",
    image: "/images/services/service2.jpg",
  },
  {
    title: "Client-Centered Care",
    description: "At Caring 4 You and Yours, we prioritize the needs and preferences of our clients. We work closely with our clients and their families to develop care plans that are tailored to meet their unique needs and goals.",
    image: "/images/services/service1.jpg",
  },
];

export default Container;
