import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string[];
  links?: string[];
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactInfo = ({ icon, title, content, links }: ContactInfoProps) => (
  <div className="flex items-start group">
    <div className="text-primary text-xl mt-1 mr-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      {content.map((item, index) => (
        <p key={item} className="text-gray-600">
          {links?.[index] ? (
            <a
              href={links[index]}
              className="hover:text-primary transition-colors duration-300"
              target={links[index].startsWith("http") ? "_blank" : undefined}
              rel={
                links[index].startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {item}
            </a>
          ) : (
            item
          )}
        </p>
      ))}
    </div>
  </div>
);

const Container = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section className="py-16 pt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {Object.entries({
                  name: "Name",
                  email: "Email",
                  phone: "Phone",
                  subject: "Subject",
                }).map(([key, label]) => (
                  <div key={key}>
                    <label htmlFor={key} className="block text-gray-700 mb-2">
                      {label}
                    </label>
                    <input
                      id={key}
                      type={
                        key === "email"
                          ? "email"
                          : key === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={key}
                      value={formData[key as keyof FormData]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
                      required={key !== "phone"}
                      disabled={isSubmitting}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<FaPhone />}
                  title="Phone"
                  content={[
                    "Emergency: (123) 456-7890",
                    "Reception: (123) 456-7891",
                  ]}
                  links={["tel:+11234567890", "tel:+11234567891"]}
                />
                <ContactInfo
                  icon={<FaEnvelope />}
                  title="Email"
                  content={[
                    "info@healthcare.com",
                    "appointments@healthcare.com",
                  ]}
                  links={[
                    "mailto:info@healthcare.com",
                    "mailto:appointments@healthcare.com",
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
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=..." // Add your Google Maps embed URL
                  className="w-full h-64"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">24/7 Emergency Contact</h2>
          <a
            href="tel:+11234567890"
            className="text-xl hover:text-gray-200 transition-colors duration-300"
          >
            Call us at: (123) 456-7890
          </a>
        </div>
      </section>
    </div>
  );
};

export default Container;
