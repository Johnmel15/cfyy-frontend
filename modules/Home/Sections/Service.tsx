import React, { FC } from "react";
import { ServiceCards } from "../Cards";
import { services } from "@/utils/services-data";

const Service: FC = () => {
  return (
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
            <ServiceCards key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
