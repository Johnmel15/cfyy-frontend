import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

interface Contact {
  linkedin: string;
  email: string;
  phone: string;
}

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  image: string;
  bio: string;
  contact: Contact;
}

interface Department {
  name: string;
  members: TeamMember[];
}

interface TeamMemberCardProps extends TeamMember {}

const TeamMemberCard = ({
  name,
  role,
  image,
  specialization,
  bio,
  contact,
}: TeamMemberCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="relative h-64 w-full">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm mb-3">{specialization}</p>
      <p className="text-gray-600 mb-4 flex-grow">{bio}</p>
      <div className="flex space-x-4 mt-auto">
        <a
          href={contact.linkedin}
          className="text-gray-600 hover:text-primary transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="text-gray-600 hover:text-primary transition-colors duration-300"
          aria-label={`Email ${name}`}
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href={`tel:${contact.phone}`}
          className="text-gray-600 hover:text-primary transition-colors duration-300"
          aria-label={`Call ${name}`}
        >
          <FaPhone size={20} />
        </a>
      </div>
    </div>
  </div>
);

const departments: Department[] = [
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
          linkedin: "https://linkedin.com/in/dr-johnson",
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
          linkedin: "https://linkedin.com/in/dr-chen",
          email: "michael.chen@healthcare.com",
          phone: "+1234567890",
        },
      },
      // Add more specialists...
    ],
  },
];

const Container = () => {
  return (
    <div className="bg-gradient-to-b from-white to-light">
      {departments.map((dept, index) => (
        <section
          key={dept.name}
          className={`py-16 ${index === 0 ? "pt-[120px]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {dept.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dept.members.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Container;
