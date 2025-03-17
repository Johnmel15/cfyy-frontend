import Image from "next/image";
import React from "react";

const Container = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-center pt-[120px]">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-gray-600 mb-6">
        Join our team and be part of a compassionate community dedicated to
        providing high-quality care for the elderly. We are looking for
        dedicated professionals who have a passion for helping others and making
        a meaningful impact.
      </p>

      <p className="text-gray-600 mb-6">
        Our caregivers play a vital role in enhancing the lives of seniors by
        assisting with daily activities, offering companionship, and ensuring
        their comfort and well-being. We believe that every elderly individual
        deserves to live with dignity, independence, and joy, and we strive to
        provide a supportive environment for both our clients and our team
        members.
      </p>

      <button
        onClick={() => (window.location.href = "/apply")}
        className="text-white px-6 py-3 rounded-lg font-medium bg-primary transition cursor-pointer"
      >
        Apply Now
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Image
            src="/images/careers/caregiver-1.jpg"
            alt="Caregiver assisting elderly"
            width={400}
            height={250}
            className="rounded-lg"
          />
          <p className="mt-4 text-gray-700 font-medium">
            Caregiver assisting elderly
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Image
            src="/images/careers/caregiver-2.jpg"
            alt="Caregiver with elderly"
            width={400}
            height={250}
            className="rounded-lg"
          />
          <p className="mt-4 text-gray-700 font-medium">
            Caregiver with elderly
          </p>
        </div>
      </div>

      <p className="mt-12 text-gray-600">
        Whether you are an experienced caregiver or looking to start a
        fulfilling career in elderly care, we provide training and a supportive
        work environment.
      </p>

      <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
        View Open Positions
      </button>
    </section>
  );
};

export default Container;
