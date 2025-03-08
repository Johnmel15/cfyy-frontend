import React, { FC } from "react";
import { FaAward, FaHeartbeat, FaHospital, FaUsers } from "react-icons/fa";
import { StatCard, ValueCard } from "./Cards";

const Container: FC = () => {
  return (
    <div>
      {/* Mission & Vision Section */}
      <section className="py-16 bg-white pt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Column */}
            <div className="rounded-lg p-8">
              <div className="flex flex-col h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 flex-grow">
                  To provide exceptional healthcare services that improve the
                  quality of life for our patients and communities through
                  compassionate care, cutting-edge technology, and continuous
                  innovation.
                </p>
              </div>
            </div>

            {/* Vision Column */}
            <div className="rounded-lg p-8">
              <div className="flex flex-col h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 flex-grow">
                  To be the leading healthcare provider, recognized for
                  excellence in patient care, medical expertise, and community
                  wellness programs.
                </p>
              </div>
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

export default Container;
