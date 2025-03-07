import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">HealthCare</h3>
            <p className="mb-4">
              Providing quality healthcare services with compassion and
              excellence since 2000.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<FaFacebookF />} />
              <SocialLink href="#" icon={<FaTwitter />} />
              <SocialLink href="#" icon={<FaLinkedinIn />} />
              <SocialLink href="#" icon={<FaInstagram />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/services" text="Services" />
              <FooterLink to="/team" text="Our Team" />
              <FooterLink to="/contact" text="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services" text="Primary Care" />
              <FooterLink to="/services" text="Emergency Care" />
              <FooterLink to="/services" text="Specialized Medicine" />
              <FooterLink to="/services" text="Diagnostic Services" />
              <FooterLink to="/services" text="Preventive Care" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span>
                  123 Healthcare Street
                  <br />
                  Medical District, City
                  <br />
                  State, ZIP Code
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <a
                  href="mailto:info@healthcare.com"
                  className="hover:text-primary"
                >
                  info@healthcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h3 className="text-white text-lg font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p>Stay updated with our latest news and announcements</p>
            </div>
            <div className="lg:w-1/2">
              <form
                className="flex gap-2 flex-col lg:flex-row md:flex-row sm:flex-col"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© {new Date().getFullYear()} HealthCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="hover:text-primary transition duration-300">
      {text}
    </Link>
  </li>
);

export default Footer;
