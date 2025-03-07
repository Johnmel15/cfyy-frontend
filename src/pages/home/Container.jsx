import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaHospital,
  FaAmbulance,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { BrandsSection, TestimonialSection } from "./components";

const heroImages = [
  {
    src: "/images/hero-image.png",
    alt: "Healthcare professionals at work",
  },
  {
    src: "/images/hero-image-2.png",
    alt: "Caring nurse with patient",
  },
  {
    src: "/images/hero-image-3.png",
    alt: "Modern medical facility",
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nursing Care That Comes to You
              </h1>
              <p className="text-lg mb-8">
                Let us provide you with high-quality care! We are licensed,
                bonded and insured.
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Lets Get Started
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              {/* Image Carousel */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] object-contain flex-shrink-0"
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition duration-300"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-primary w-4 h-4" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition duration-300"
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-primary w-4 h-4" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        currentImage === index ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandsSection />
      {/* Features Section */}
      <section className="py-10 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FaUserMd className="text-4xl text-primary" />}
              title="Expert Doctors"
              description="Our team of experienced healthcare professionals is here to help you."
            />
            <FeatureCard
              icon={<FaHospital className="text-4xl text-primary" />}
              title="Modern Facilities"
              description="State-of-the-art medical facilities and equipment for the best care."
            />
            <FeatureCard
              icon={<FaAmbulance className="text-4xl text-primary" />}
              title="Emergency Care"
              description="24/7 emergency services available for immediate medical attention."
            />
            <FeatureCard
              icon={<FaClock className="text-4xl text-primary" />}
              title="Flexible Hours"
              description="Convenient scheduling options to fit your busy lifestyle."
            />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Comprehensive healthcare solutions for you and your family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white mb-8">
            Schedule your appointment today and take the first step towards
            better health.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Component for service cards
const ServiceCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link
        to="/services"
        className="mt-4 inline-block text-primary font-medium hover:text-secondary"
      >
        Learn More →
      </Link>
    </div>
  </div>
);

// Sample services data
const services = [
  {
    title: "Primary Care",
    description: "Comprehensive health care services for patients of all ages.",
    image: "/images/services/service1.jpg", // You'll need to add these images
  },
  {
    title: "Specialized Treatment",
    description: "Expert care in various medical specialties and conditions.",
    image: "/images/services/service2.jpg",
  },
  {
    title: "Preventive Care",
    description: "Proactive health management and preventive services.",
    image: "/images/services/service2.jpg",
  },
];

export default Home;
