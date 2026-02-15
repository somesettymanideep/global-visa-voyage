import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import {
  Compass, Briefcase, FileCheck, BookOpen, Award, Plane, Home,
  ArrowRight, Star, GraduationCap, Globe, ShieldCheck, Eye,
  Handshake, HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroStudents from "@/assets/hero-students-global.png";
import ukFlag from "@/assets/flags/uk.webp";
import australiaFlag from "@/assets/flags/australia.webp";
import usaFlag from "@/assets/flags/usa.svg";
import canadaFlag from "@/assets/flags/canada.svg";
import germanyFlag from "@/assets/flags/germany.png";
import finlandFlag from "@/assets/flags/finland.png";
import singaporeFlag from "@/assets/flags/singapore.png";
import malaysiaFlag from "@/assets/flags/malaysia.svg";

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
  { name: "Finland", flag: finlandFlag },
  { name: "Singapore", flag: singaporeFlag },
  { name: "Malaysia", flag: malaysiaFlag },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Trusted Expert Guidance" },
  { icon: Eye, title: "Transparent Process" },
  { icon: Award, title: "Scholarship Support" },
  { icon: Globe, title: "Visa Success Experts" },
  { icon: Handshake, title: "Personalized Counseling" },
  { icon: Compass, title: "Complete End-to-End Support" },
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
                    <div className="w-16 h-11 mx-auto mb-4 rounded-lg overflow-hidden shadow-md">
                      <img src={dest.flag} alt={`${dest.name} flag`} className="w-full h-full object-cover" />
                    </div>
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

      <Footer />
    </div>
  );
};

export default Services;
