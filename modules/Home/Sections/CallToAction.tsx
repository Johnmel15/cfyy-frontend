import React, { FC } from "react";
import Link from "next/link";

const CallToAction: FC = () => {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-white mb-8">
          Schedule your appointment today and take the first step towards better
          health.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
