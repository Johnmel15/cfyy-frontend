import React, { FC, ReactNode } from "react";

interface ValueProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Value: FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Value;
