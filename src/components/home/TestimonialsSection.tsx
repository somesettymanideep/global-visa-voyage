import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    country: "United Kingdom",
    university: "University of Manchester",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    feedback: "Pravaas International made my dream of studying in the UK a reality. Their guidance throughout the visa process was exceptional. I'm now pursuing my Master's at Manchester!",
  },
  {
    id: 2,
    name: "Rahul Patel",
    country: "Australia",
    university: "University of Sydney",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    feedback: "The team's expertise in Australian universities helped me secure admission with a scholarship. Their end-to-end support from application to arrival was incredible.",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    country: "United Kingdom",
    university: "Imperial College London",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    feedback: "I was confused about my career path, but the counselors at Pravaas helped me find the perfect program. Now I'm studying at one of the world's top universities!",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    country: "Australia",
    university: "University of Melbourne",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    feedback: "From IELTS preparation to visa interview coaching, every step was handled professionally. I highly recommend Pravaas to anyone planning to study abroad.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Success Stories from{" "}
            <span className="text-primary">Our Students</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from students who achieved their dreams with our guidance.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-full gradient-golden flex items-center justify-center mb-8 mx-auto">
                  <Quote className="w-8 h-8 text-secondary-foreground" />
                </div>

                {/* Feedback */}
                <p className="text-lg md:text-xl text-foreground/80 text-center leading-relaxed mb-8">
                  "{testimonials[currentIndex].feedback}"
                </p>

                {/* Student Info */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-secondary"
                  />
                  <h4 className="font-heading font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-secondary font-medium">
                    {testimonials[currentIndex].university}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-border hover:bg-muted-foreground"
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

export default TestimonialsSection;
