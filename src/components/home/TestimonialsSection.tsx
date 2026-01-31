import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  {
    id: 5,
    name: "Ananya Desai",
    country: "Canada",
    university: "University of Toronto",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    feedback: "The scholarship guidance from Pravaas saved me thousands of dollars. Their team knows exactly what universities look for in applications.",
  },
  {
    id: 6,
    name: "Vikram Singh",
    country: "Germany",
    university: "Technical University of Munich",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    feedback: "Studying in Germany seemed complicated, but Pravaas made it seamless. From language prep to blocked account setup, they handled everything!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate max index based on items per page
  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Reset index when switching between mobile/desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  // Autoplay - faster on mobile (4s) vs desktop (8s)
  useEffect(() => {
    const timer = setInterval(nextSlide, isMobile ? 4000 : 8000);
    return () => clearInterval(timer);
  }, [maxIndex, isMobile]);

  // Get current visible testimonials
  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
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

        {/* Testimonials Grid - 3 at a time */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 flex flex-col h-full"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full gradient-golden flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-secondary-foreground" />
                </div>

                {/* Feedback */}
                <p className="text-foreground/80 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                  "{testimonial.feedback}"
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary text-sm font-medium">
                      {testimonial.university}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-secondary w-8"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
