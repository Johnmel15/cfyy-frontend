import { brands } from "@/utils/brand-data";
import React from "react";
import Marquee from "react-fast-marquee";

interface BrandProps {
  name: string;
  icon: string;
}

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
          gradientColor={"bg-gray-50"} // matches bg-gray-50
          speed={40}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-16 py-4">
            {brands.map((brand: BrandProps, index: number) => (
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
