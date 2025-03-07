import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      {/* Department Sections */}
      {departments.map((dept, index) => (
        <section
          key={index}
          className={`py-16 pt-[120px] ${
            index % 2 === 0 ? "bg-white" : "bg-light"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {dept.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dept.members.map((member, idx) => (
                <TeamMemberCard key={idx} {...member} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

const TeamMemberCard = ({
  name,
  role,
  image,
  specialization,
  bio,
  contact,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm mb-3">{specialization}</p>
      <p className="text-gray-600 mb-4">{bio}</p>
      <div className="flex space-x-4">
        <a href={contact.linkedin} className="text-gray-600 hover:text-primary">
          <FaLinkedin size={20} />
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="text-gray-600 hover:text-primary"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href={`tel:${contact.phone}`}
          className="text-gray-600 hover:text-primary"
        >
          <FaPhone size={20} />
        </a>
      </div>
    </div>
  </div>
);

const departments = [
  {
    name: "Primary Care Physicians",
    members: [
      {
        name: "Dr. John Johnson",
        role: "Chief Medical Officer",
        specialization: "Family Medicine",
        image: "/images/team/dr1.jpg",
        bio: "Dr. Johnson has over 15 years of experience in family medicine and preventive care.",
        contact: {
          linkedin: "#",
          email: "john.johnson@healthcare.com",
          phone: "+1234567890",
        },
      },
      // Add more team members...
    ],
  },
  {
    name: "Specialists",
    members: [
      {
        name: "Dr. Michael Chen",
        role: "Cardiologist",
        specialization: "Cardiovascular Medicine",
        image: "/images/team/dr2.jpg",
        bio: "Dr. Chen is a renowned cardiologist with expertise in advanced cardiac procedures.",
        contact: {
          linkedin: "#",
          email: "michael.chen@healthcare.com",
          phone: "+1234567890",
        },
      },
      // Add more specialists...
    ],
  },
];

export default Team;
