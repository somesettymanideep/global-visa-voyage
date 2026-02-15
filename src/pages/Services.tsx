import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import {
  Compass, Briefcase, FileCheck, BookOpen, Award, Plane, Home,
  ArrowRight, Star, GraduationCap, Globe, ShieldCheck, Eye,
  Handshake, HeartHandshake, Quote, ChevronLeft, ChevronRight,
  Phone, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroStudents from "@/assets/hero-students-global.png";
import ukFlag from "@/assets/flags/uk.webp";
import australiaFlag from "@/assets/flags/australia.webp";
import usaFlag from "@/assets/flags/usa.svg";
import canadaFlag from "@/assets/flags/canada.svg";
import germanyFlag from "@/assets/flags/germany.png";

/* ─── Data ──────────────────────────────────────────── */

const coreServices = [
  { icon: Compass, title: "Course Selection Guidance", description: "Personalized help choosing the right course based on academic background and career goals." },
  { icon: Briefcase, title: "Career Counselling", description: "Professional counseling sessions to help students make informed career decisions." },
  { icon: FileCheck, title: "Application & Document Assistance", description: "Complete support for applications, SOP, LOR, CV, and document review." },
  { icon: BookOpen, title: "Visa Processing & Interview Preparation", description: "Expert visa filing guidance with mock interview training." },
  { icon: Award, title: "Scholarship & Financial Guidance", description: "Help finding scholarships, education loans, and budget planning." },
  { icon: Plane, title: "Pre-Departure & Post-Arrival Support", description: "Orientation before travel and continued help after arrival." },
  { icon: Home, title: "Accommodation Assistance", description: "Help finding safe, affordable housing near universities." },
];

const achievements = [
  { label: "Years Experience", value: 6, suffix: "+", icon: Star },
  { label: "Visa Success Rate", value: 100, suffix: "%", icon: ShieldCheck },
  { label: "University Partners", value: 50, suffix: "+", icon: Globe },
];

const programs = [
  { title: "Master's (MS) Programs", description: "Advance your career with postgraduate studies at top global universities.", icon: GraduationCap },
  { title: "Bachelor's Programs", description: "Begin your higher education journey with world-class undergraduate degrees.", icon: BookOpen },
  { title: "MBBS Programs", description: "Pursue your dream of becoming a doctor at internationally recognized medical universities.", icon: HeartHandshake },
];

const destinations = [
  { name: "United Kingdom", flag: ukFlag },
  { name: "United States", flag: usaFlag },
  { name: "Australia", flag: australiaFlag },
  { name: "Canada", flag: canadaFlag },
  { name: "Germany", flag: germanyFlag },
  { name: "Finland & Europe", flag: null },
  { name: "Singapore", flag: null },
  { name: "Malaysia", flag: null },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Trusted Expert Guidance" },
  { icon: Eye, title: "Transparent Process" },
  { icon: Award, title: "Scholarship Support" },
  { icon: Globe, title: "Visa Success Experts" },
  { icon: Handshake, title: "Personalized Counseling" },
  { icon: Compass, title: "Complete End-to-End Support" },
];

const testimonials = [
  { id: 1, name: "Priya Sharma", country: "United Kingdom", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", feedback: "Pravaas made my UK admission process simple and stress-free. I couldn't have done it without their support!", rating: 5 },
  { id: 2, name: "Rahul Patel", country: "Australia", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", feedback: "Their scholarship guidance saved me thousands. The team is professional, transparent, and genuinely caring.", rating: 5 },
  { id: 3, name: "Sneha Reddy", country: "Canada", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", feedback: "From application to arrival, Pravaas handled everything. I'm now living my dream of studying abroad!", rating: 5 },
  { id: 4, name: "Arjun Mehta", country: "Germany", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", feedback: "The visa interview prep was outstanding. I felt fully prepared and confident. Highly recommended!", rating: 4 },
];

/* ─── Counter Hook ──────────────────────────────────── */

const useCounter = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
};

/* ─── Counter Component ─────────────────────────────── */

const Counter = ({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: typeof Star }) => {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-full gradient-golden flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-secondary-foreground" />
      </div>
      <p className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
        {count}{suffix}
      </p>
      <p className="text-primary-foreground/80 mt-2 font-medium">{label}</p>
    </motion.div>
  );
};

/* ─── Page Component ────────────────────────────────── */

const Services = () => {
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
    const timer = setInterval(() => setCurrentSlide((p) => (p >= maxSlide ? 0 : p + 1)), 6000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  const visibleTestimonials = testimonials.slice(currentSlide * perSlide, currentSlide * perSlide + perSlide);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── 1. Hero Banner ────────────────────────────── */}
      <section className="relative pt-24 h-[280px] md:h-[320px] overflow-hidden">
        <motion.img
          src={heroStudents}
          alt="Students abroad - Pravaas Education Services"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/85" />
        <div className="container-custom relative z-10 h-full flex items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
            >
              Our Study Abroad Services
            </motion.h1>
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base"
            >
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-secondary font-medium">Services</span>
            </motion.nav>
          </div>
        </div>
      </section>

      {/* ── 2. Core Services ──────────────────────────── */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              End-to-End Support for Your{" "}
              <span className="text-primary">Global Education Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From the first consultation to your arrival at your dream university, we provide comprehensive support at every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 h-full border border-border/50 hover:border-secondary/30">
                  <div className="w-16 h-16 rounded-xl gradient-golden flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Achievements ───────────────────────────── */}
      <section className="section-padding gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Achievements That Speak
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {achievements.map((a) => (
              <Counter key={a.label} value={a.value} suffix={a.suffix} label={a.label} icon={a.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Programs We Support ────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Programs We Support
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-golden flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <program.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Study Destinations ─────────────────────── */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Study Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Where You Can <span className="text-primary">Study Abroad</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link to="/contact">
                  <div className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 text-center">
                    {dest.flag ? (
                      <div className="w-16 h-11 mx-auto mb-4 rounded-lg overflow-hidden shadow-md">
                        <img src={dest.flag} alt={`${dest.name} flag`} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-16 h-11 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      {dest.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-center gap-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-medium">View Universities</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Choose Pravaas ─────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Choose <span className="text-primary">Pravaas?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-golden hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-golden flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Student Testimonials ───────────────────── */}
      <section className="section-padding bg-accent/50 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                      <Star key={s} className={`w-4 h-4 ${s < t.rating ? "text-secondary fill-secondary" : "text-border"}`} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-secondary" />
                    <div>
                      <p className="font-heading font-semibold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground text-sm">{t.country}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

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

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-secondary w-8" : "bg-border hover:bg-muted-foreground"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ──────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary/80" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Start Your Study Abroad Journey<br />with Pravaas Today
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Get expert guidance from our experienced counselors. Your dream of studying abroad is just one step away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="golden" size="xl" className="group">
                  Book Free Counseling
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://wa.me/918008249666" target="_blank" rel="noopener noreferrer">
                <Button variant="outlineLight" size="xl" className="group">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
