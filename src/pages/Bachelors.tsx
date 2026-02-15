import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, GraduationCap, Briefcase, MessageSquare, TrendingUp, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import bachelorsHero from "@/assets/bachelors-hero.jpg";

import ukFlag from "@/assets/flags/uk.webp";
import usaFlag from "@/assets/flags/usa.svg";
import canadaFlag from "@/assets/flags/canada.svg";
import australiaFlag from "@/assets/flags/australia.webp";
import germanyFlag from "@/assets/flags/germany.png";

const whyStudy = [
  { icon: Globe, title: "Global Exposure", desc: "Experience diverse cultures and build an international network" },
  { icon: GraduationCap, title: "International Degree", desc: "Earn a globally recognized degree from top universities" },
  { icon: Briefcase, title: "Internship Opportunities", desc: "Gain hands-on experience with global companies" },
  { icon: MessageSquare, title: "English Communication", desc: "Master English in an immersive environment" },
  { icon: TrendingUp, title: "Better Career Growth", desc: "Access global job markets with higher earning potential" },
  { icon: Award, title: "Scholarship Options", desc: "Merit-based scholarships to reduce financial burden" },
];

const destinations = [
  { country: "United Kingdom", flag: ukFlag, duration: "3 Years", fees: "£12k–£25k/year", intakes: "Sep / Jan" },
  { country: "United States", flag: usaFlag, duration: "4 Years", fees: "$20k–$50k/year", intakes: "Fall / Spring" },
  { country: "Canada", flag: canadaFlag, duration: "4 Years", fees: "CAD 15k–30k/year", intakes: "Sep / Jan" },
  { country: "Australia", flag: australiaFlag, duration: "3 Years", fees: "AUD 20k–40k/year", intakes: "Feb / Jul" },
  { country: "Germany", flag: germanyFlag, duration: "3–4 Years", fees: "€0–€15k/year", intakes: "Oct / Apr" },
];

const topCourses = [
  "Engineering", "Business Administration", "Computer Science", "Hotel Management", "Arts & Design", "Nursing",
];

const admissionSteps = [
  { step: "01", title: "Free Counseling", desc: "Expert guidance on course & university" },
  { step: "02", title: "Course Selection", desc: "Choose the right program for your goals" },
  { step: "03", title: "Apply to Universities", desc: "We handle your complete application" },
  { step: "04", title: "Offer Letter", desc: "Receive admission from top universities" },
  { step: "05", title: "Visa Process", desc: "Full visa documentation support" },
  { step: "06", title: "Fly Abroad ✈️", desc: "Pre-departure briefing & travel support" },
];

const whyChoose = [
  "Free profile evaluation",
  "Complete visa support",
  "Scholarship guidance",
  "Accommodation assistance",
  "Pre-departure briefing",
  "Post-arrival support",
];

const Bachelors = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-24 h-[280px] md:h-[320px] overflow-hidden">
        <img src={bachelorsHero} alt="Study Bachelors Abroad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container-custom relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
            >
              Study Bachelors Abroad
            </motion.h1>
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm md:text-base"
            >
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary-foreground/60">Study Abroad</span>
              <span>/</span>
              <span className="text-secondary font-medium">Bachelors</span>
            </motion.nav>
          </div>
        </div>
      </section>

      {/* Why Study Bachelors Abroad */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Study <span className="text-primary">Bachelors Abroad?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyStudy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-golden transition-shadow group"
              >
                <div className="w-14 h-14 rounded-xl gradient-golden flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Destinations</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Popular <span className="text-primary">Study Destinations</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:-translate-y-1 transition-transform"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={dest.flag} alt={dest.country} className="w-10 h-7 object-cover rounded" />
                    <h3 className="font-heading font-semibold text-foreground text-lg">{dest.country}</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p><span className="font-medium text-foreground">Duration:</span> {dest.duration}</p>
                    <p><span className="font-medium text-foreground">Tuition Fees:</span> {dest.fees}</p>
                    <p><span className="font-medium text-foreground">Intakes:</span> {dest.intakes}</p>
                  </div>
                  <Link to="/contact">
                    <Button variant="golden" size="sm" className="w-full">Apply Now</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Courses</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Top Courses for <span className="text-primary">Bachelors</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topCourses.map((course, i) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-5 shadow-soft border border-border/50 flex items-center gap-4 hover:border-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading font-semibold text-foreground">{course}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Admission <span className="text-primary">Process</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card rounded-2xl p-6 shadow-card border border-border/50"
              >
                <span className="text-5xl font-heading font-bold text-secondary/20 absolute top-4 right-4">{step.step}</span>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Why Choose <span className="text-gradient">Pravaas International?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Book Free Counseling Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step toward your bachelor's degree abroad. Our expert counselors are ready to guide you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bachelors;
