import { testimonials } from "@/utils/testimonial-data";
import React, { FC, useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";

const Testimonials: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600">
            Real experiences from our valued patients
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 py-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <div className="flex flex-col items-center">
                      <div className="relative w-20 h-20 mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full text-white">
                          <FaQuoteRight size={16} />
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <FaStar key={index} />
                        ))}
                      </div>

                      <p className="text-gray-600 text-center mb-6 italic">
                        "{testimonial.text}"
                      </p>

                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-primary" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
