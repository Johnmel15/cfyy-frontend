import React, { FC } from "react";

interface StatProps {
  number: string;
  text: string;
}

const Stat: FC<StatProps> = ({ number, text }) => {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm">{text}</div>
    </div>
  );
};

export default Stat;
