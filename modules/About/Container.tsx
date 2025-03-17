import React, { FC } from "react";
import { FaAward, FaHeartbeat, FaHospital, FaUsers } from "react-icons/fa";
import { StatCard, ValueCard } from "./Cards";

const Container: FC = () => {
  return (
    <div>
      {/* Who We Are Section */}
      <section className="py-16 bg-light pt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Caregivers You Can Trust */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Caregivers You Can Trust
              </h3>
              <p className="text-gray-600">
                It's heartbreaking to see your love one's health decline. We
                know the pain and suffering the patient and family go through as
                their love one slip away. At Caring 4 You and Yours, we want to
                be there for you and your family as we provide you with the care
                and compassion your love one deserve.
              </p>
            </div>

            {/* Experienced and Supportive */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experienced and Supportive
              </h3>
              <p className="text-gray-600">
                We understand that not one care plan fits all. Daily services
                can include anything from meal preparation, hygiene, cleaning,
                and supervision. We will take the time to get to know you and
                develop an individualized care plan that fits your specific
                needs. We offer a complimentary in-home visit to assess your
                family's needs.
              </p>
            </div>

            {/* Experienced Home Health Aids */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experienced Home Health Aids
              </h3>
              <p className="text-gray-600">
                Companionship is key to a trusted relationship with our
                caregivers. We not only strive to help you with everyday tasks
                but want to develop a caring relationship with you. We provide
                one-on-one attention and care that cannot compare in other
                settings. Our caregivers are fully certified with years of
                experience. Rest assured Caring 4 You and Yours will be with you
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

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
