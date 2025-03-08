import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Next.js router instead of useLocation

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Our Team", path: "/team" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
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
                className={`px-3 py-2 text-[16px] transition-colors duration-200
                  ${
                    isActiveLink(link.path)
                      ? "text-primary-500 font-[700]"
                      : "text-gray-700 hover:font-[700] hover:text-primary"
                  }
                `}
              >
                {link.title}
              </Link>
            ))}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
