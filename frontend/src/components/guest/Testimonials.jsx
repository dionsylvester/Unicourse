import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    text: "Unicourse has completely transformed the way I learn. The courses are comprehensive and the instructors are top-notch!",
    author: "Jane Doe",
  },
  {
    text: "I've gained so much knowledge and skills from Unicourse. The platform is user-friendly and the community is very supportive.",
    author: "John Smith",
  },
  {
    text: "The variety of courses available on Unicourse is amazing. I've found courses on almost every topic I'm interested in.",
    author: "Emily Johnson",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-gray-50 py-20 font-satoshi">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          What People Say About Unicourse
        </h2>
        <Carousel
          showArrows={false}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          selectedItem={currentTestimonial}
          onChange={handleTestimonialChange}
          className="testimonial-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
                <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                <p className="text-right font-semibold">- {testimonial.author}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
