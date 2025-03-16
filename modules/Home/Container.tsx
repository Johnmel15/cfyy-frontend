import React, { useState } from 'react';
import {
  BrandsSection,
  CallToActionSection,
  FeaturesSection,
  HeroSection,
  ServiceSection,
  TestimonialSection,
} from "./Sections";
import Modal from '../../Layout/Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <HeroSection />
      <BrandsSection />
      <FeaturesSection />
      <ServiceSection />
      <TestimonialSection />
      <CallToActionSection />

      <button
        onClick={toggleModal}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary hover:scale-105 transition duration-300 transform"
      >
        Schedule Appointment
      </button>

      {/* Modal Popup */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Schedule Appointment
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your phone"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
