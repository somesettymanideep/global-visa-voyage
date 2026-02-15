import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Target,
  Quote,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import founderImg from "@/assets/founder.jpg";
import { useState, useEffect } from "react";

const whyPravaasFeatures = [
  { title: "Expert UK & Global Admission Guidance", icon: Globe },
  { title: "100% Transparent Process", icon: CheckCircle },
  { title: "Visa Success Support", icon: Target },
  { title: "Scholarship Assistance", icon: Star },
  { title: "End-to-End Student Support", icon: ArrowRight },
  { title: "Trusted by Hundreds of Students", icon: MessageSquare },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    feedback: "Pravaas made my UK admission process simple and stress-free. I couldn't have done it without their support!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Patel",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    feedback: "Their scholarship guidance saved me thousands. The team is professional, transparent, and genuinely caring.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Reddy",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    feedback: "From application to arrival, Pravaas handled everything. I'm now living my dream of studying abroad!",
    rating: 5,
  },
  {
    id: 4,
    name: "Arjun Mehta",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    feedback: "The visa interview prep was outstanding. I felt fully prepared and confident. Highly recommended!",
    rating: 4,
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perSlide = isMobile ? 1 : 2;
  const maxSlide = Math.ceil(testimonials.length / perSlide) - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p >= maxSlide ? 0 : p + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  const visibleTestimonials = testimonials.slice(
    currentSlide * perSlide,
    currentSlide * perSlide + perSlide
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* 1. Hero About Section */}
      <section className="relative pt-24 h-[400px] md:h-[480px] overflow-hidden">
        <motion.img
          src={aboutHero}
          alt="International campus students - About Pravaas Education"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/85" />
        <div className="container-custom relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4"
            >
              About <span className="text-gradient">Pravaas Education</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8"
            >
              Helping students achieve global dreams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Book Free Counseling
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Vision & Mission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card border-2 border-secondary/30 hover:border-secondary/60 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl gradient-golden flex items-center justify-center mb-5">
                <Globe className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Become a trusted global education partner guiding students to top universities worldwide.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card border-2 border-secondary/30 hover:border-secondary/60 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl gradient-golden flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provide transparent guidance, expert counseling, and end-to-end support for students to study abroad successfully.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Founder Message */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-primary rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 flex justify-center p-8 md:p-10"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-golden">
                  <img
                    src={founderImg}
                    alt="Founder of Pravaas Education"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-3 p-8 md:p-10"
              >
                <Quote className="w-10 h-10 text-secondary mb-4" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
                  Message from Our Founder
                </h2>
                <p className="text-primary-foreground/85 leading-relaxed text-lg mb-6">
                  "At Pravaas, we believe every student deserves global opportunities. Our goal is to simplify the journey from dreams to admissions. We are committed to walking alongside every student, making world-class education accessible and achievable."
                </p>
                <div>
                  <p className="font-heading font-bold text-secondary text-lg">Founder</p>
                  <p className="text-primary-foreground/70 text-sm">
                    Founder & CEO, Pravaas Education
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Pravaas? */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Choose <span className="text-primary">Pravaas?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyPravaasFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-golden hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-golden flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="section-padding bg-accent/50 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What Our Students Say
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                >
                  <Quote className="w-8 h-8 text-secondary mb-3" />
                  <p className="text-foreground/80 leading-relaxed mb-4">"{t.feedback}"</p>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s < t.rating ? "text-secondary fill-secondary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                    />
                    <div>
                      <p className="font-heading font-semibold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground text-sm">{t.country}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Nav buttons */}
            <button
              onClick={() => setCurrentSlide((p) => (p <= 0 ? maxSlide : p - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((p) => (p >= maxSlide ? 0 : p + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "bg-secondary w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
