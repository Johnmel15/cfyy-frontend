import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Contact Information */}
      <section className="py-16 bg-white pt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<FaPhone />}
                  title="Phone"
                  content={[
                    "Emergency: (123) 456-7890",
                    "Reception: (123) 456-7891",
                  ]}
                />
                <ContactInfo
                  icon={<FaEnvelope />}
                  title="Email"
                  content={[
                    "info@healthcare.com",
                    "appointments@healthcare.com",
                  ]}
                />
                <ContactInfo
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  content={[
                    "123 Healthcare Street",
                    "Medical District, City",
                    "State, ZIP Code",
                  ]}
                />
                <ContactInfo
                  icon={<FaClock />}
                  title="Hours"
                  content={[
                    "Monday - Friday: 8:00 AM - 8:00 PM",
                    "Saturday: 8:00 AM - 2:00 PM",
                    "Sunday: Closed",
                  ]}
                />
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=..." // Add your Google Maps embed URL
                  className="w-full h-64 rounded-lg shadow-md"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">24/7 Emergency Contact</h2>
          <p className="text-xl">Call us at: (123) 456-7890</p>
        </div>
      </section>
    </div>
  );
};

const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="text-primary text-xl mt-1 mr-4">{icon}</div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      {content.map((item, index) => (
        <p key={index} className="text-gray-600">
          {item}
        </p>
      ))}
    </div>
  </div>
);

export default Contact;
