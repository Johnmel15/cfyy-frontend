import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  {
    name: "Mayo Clinic",
    icon: "/images/brands/brand1.png",
  },
  {
    name: "Blue Cross",
    icon: "/images/brands/brand1.png",
  },
  {
    name: "United Healthcare",
    icon: "/images/brands/brand1.png",
  },
  {
    name: "Cigna",
    icon: "/images/brands/brand1.png",
  },
  {
    name: "Anthem",
    icon: "/images/brands/brand1.png",
  },
  {
    name: "Kaiser Permanente",
    icon: "/images/brands/brand1.png",
  },
  // Add more brands as needed
];

const Brands = () => {
  return (
    <section className="pt-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-gray-600 text-lg font-semibold">
            Trusted by Leading Healthcare Organizations
          </h2>
        </div>

        <Marquee
          gradient={true}
          gradientColor={[249, 250, 251]} // matches bg-gray-50
          speed={40}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-16 py-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8"
              >
                <img
                  src={brand.icon}
                  alt={`${brand.name} logo`}
                  className="h-[6rem] w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
