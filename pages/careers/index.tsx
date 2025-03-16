import React, { Component } from "react";
import Image from "next/image";
import Modal from "../../Layout/Modal";

interface CareersSectionState {
  isModalOpen: boolean;
}

class CareersSection extends Component<{}, CareersSectionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    return (
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Careers
          </h2>
          <p className="text-center text-gray-700 mb-8 leading-relaxed">
            Join our team and be part of a compassionate community dedicated to providing high-quality care for the elderly. We are looking for dedicated professionals who have a passion for helping others and making a meaningful impact.
          </p>
          <div className="text-center mt-4">
            <button
              onClick={() => window.location.href = '/apply'}
              className="bg-primary text-white px-6 py-3 rounded-lg 
                         relative overflow-hidden transition-all duration-300 ease-in-out 
                         hover:bg-secondary hover:scale-110 hover:shadow-2xl 
                         hover:animate-pulse hover:rotate-1"
            >
              Apply Now
            </button>
          </div>
          <hr className="my-8 border-t-2 border-gray-200" />
          <p className="text-center text-gray-700 mb-8 leading-relaxed">
            Our caregivers play a vital role in enhancing the lives of seniors by assisting with daily activities, offering companionship, and ensuring their comfort and well-being. We believe that every elderly individual deserves to live with dignity, independence, and joy, and we strive to provide a supportive environment for both our clients and our team members.
          </p>
          <hr className="my-8 border-t-2 border-gray-200" />
          <p className="text-center text-gray-700 mb-8 leading-relaxed">
            Whether you are an experienced caregiver or someone looking to start a fulfilling career in elderly care, we provide training, development, and a supportive work environment. Join us in making a difference—one life at a time.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Image
              src="/images/careers/caregiver1.jpg"
              alt="Caregiver assisting elderly"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/images/careers/caregiver2.jpg"
              alt="Caregiver with elderly"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
          <hr className="my-8 border-t-2 border-gray-200" />
          <div className="text-center">
            <a
              href="/careers"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300 shadow-lg"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default CareersSection;
