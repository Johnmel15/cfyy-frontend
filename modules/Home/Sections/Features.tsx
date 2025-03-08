import React, { FC } from "react";
import { FeaturedCards } from "../Cards";
import { FaAmbulance, FaClock, FaHospital, FaUserMd } from "react-icons/fa";

const Features: FC = () => {
  return (
    <section className="py-10 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeaturedCards
            icon={<FaUserMd className="text-4xl text-primary" />}
            title="Expert Doctors"
            description="Our team of experienced healthcare professionals is here to help you."
          />
          <FeaturedCards
            icon={<FaHospital className="text-4xl text-primary" />}
            title="Modern Facilities"
            description="State-of-the-art medical facilities and equipment for the best care."
          />
          <FeaturedCards
            icon={<FaAmbulance className="text-4xl text-primary" />}
            title="Emergency Care"
            description="24/7 emergency services available for immediate medical attention."
          />
          <FeaturedCards
            icon={<FaClock className="text-4xl text-primary" />}
            title="Flexible Hours"
            description="Convenient scheduling options to fit your busy lifestyle."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
