import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

interface FooterLinkProps {
  href: string;
  text: string;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a
    href={href}
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <li>
    <Link href={href} className="hover:text-primary transition duration-300">
      {text}
    </Link>
  </li>
);

const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Care 4 Your and Yours</h3>
            <p className="mb-4">
             Warmth and comfort of care that brings healing to your home.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<FaFacebookF />} />
              <SocialLink href="https://twitter.com" icon={<FaTwitter />} />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} />
              <SocialLink href="https://instagram.com" icon={<FaInstagram />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/team" text="Our Team" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services#primary" text="Primary Care" />
              <FooterLink href="/services#emergency" text="Emergency Care" />
              <FooterLink
                href="/services#specialized"
                text="Specialized Medicine"
              />
              <FooterLink
                href="/services#diagnostic"
                text="Diagnostic Services"
              />
              <FooterLink href="/services#preventive" text="Preventive Care" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <address className="not-italic">
                Gaithersburg
                  <br />
                  MD, United States, Maryland
                  {/* <br />
                  State, ZIP Code */}
                </address>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:(301)792-5236" className="hover:text-primary">
                    (301) 792-5236
                  </a>
                  <a href="tel:(301)250-6559" className="hover:text-primary mt-1">
                    (301) 250-6559
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <a
                  href="mailto:info@caring4youandyours.com"
                  className="hover:text-primary"
                >
                 info@caring4youandyours.com
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
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                  required
                  aria-label="Email for newsletter"
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

export default Footer;
