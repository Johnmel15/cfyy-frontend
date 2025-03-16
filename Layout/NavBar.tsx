import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "./Modal"; // Adjust the path accordingly
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Our Team", path: "/team" },
    { title: "Careers", path: "/careers" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const isActiveLink = (path: string) => {
    return path === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/cfyy.png"
                  alt="logo"
                  width={120}
                  height={40}
                  className="w-[120px]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200
                    ${
                      isActiveLink(link.path)
                        ? "text-primary-500"
                        : "text-gray-700 hover:text-primary"
                    }
                  `}
                >
                  {link.title}
                </Link>
              ))}
              {/* Schedule Appointment Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary hover:scale-105 transition duration-300 transform"
              >
                Schedule Appointment
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className={`block px-3 py-2 text-base font-medium
                    ${
                      isActiveLink(link.path)
                        ? "text-primary font-bold"
                        : "text-gray-700 hover:text-primary"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Appointment Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
    </>
  );
};

export default Navbar;
