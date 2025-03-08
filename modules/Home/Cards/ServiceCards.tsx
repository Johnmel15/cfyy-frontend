import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCards: FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Image
        src={image}
        alt={title}
        width={800}
        height={384}
        className="w-full h-48 object-cover"
        priority
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link
          href="/services"
          className="mt-4 inline-block text-primary font-medium hover:text-secondary"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
