import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Clock, DollarSign, Briefcase, Brain, TrendingUp, ArrowRight, CheckCircle, Award, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import mastersHero from "@/assets/masters-hero.jpg";

import ukFlag from "@/assets/flags/uk.webp";
import usaFlag from "@/assets/flags/usa.svg";
import canadaFlag from "@/assets/flags/canada.svg";
import australiaFlag from "@/assets/flags/australia.webp";

const whyStudy = [
  { icon: BookOpen, title: "Research-Based Learning", desc: "Engage in cutting-edge research at world-class institutions" },
  { icon: Clock, title: "1–2 Year Courses", desc: "Complete your specialization in a shorter timeframe" },
  { icon: DollarSign, title: "High Salary Opportunities", desc: "Masters graduates earn significantly higher salaries globally" },
  { icon: Briefcase, title: "Post-Study Work Visa", desc: "Stay and work after graduation in many countries" },
];

const programs = [
  { name: "MS in Computer Science", icon: Brain },
  { name: "MBA", icon: TrendingUp },
  { name: "Data Science", icon: BookOpen },
  { name: "Engineering", icon: Globe },
  { name: "Public Health", icon: Users },
  { name: "Artificial Intelligence", icon: Brain },
];

const destinations = [
  { country: "United Kingdom", flag: ukFlag, duration: "1 Year", fees: "£15k–£25k", intakes: "Sep / Jan" },
  { country: "United States", flag: usaFlag, duration: "2 Years", fees: "$20k–$40k", intakes: "Fall / Spring" },
  { country: "Canada", flag: canadaFlag, duration: "1–2 Years", fees: "CAD 15k–30k", intakes: "Jan / Sep" },
  { country: "Australia", flag: australiaFlag, duration: "1.5–2 Years", fees: "AUD 25k–40k", intakes: "Feb / Jul" },
];

const scholarships = [
  { title: "Merit Scholarships", desc: "Based on academic excellence and test scores", icon: Award },
  { title: "Country Scholarships", desc: "Government-funded programs like Chevening, Fulbright", icon: Globe },
  { title: "University Scholarships", desc: "Institution-specific financial aid and grants", icon: GraduationCapIcon },
];

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5"/>
    </svg>
  );
}

const careerOps = [
  { title: "IT & Tech Jobs", desc: "Software engineering, data science roles worldwide" },
  { title: "Management Roles", desc: "Leadership positions in multinational companies" },
  { title: "Research Positions", desc: "Academic and industry research opportunities" },
  { title: "PR Opportunities", desc: "Permanent residency pathways in many countries" },
];

const Masters = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 h-[400px] md:h-[500px] overflow-hidden">
        <img src={mastersHero} alt="Study Masters Abroad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container-custom relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Study Masters Abroad
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Specialize in your career with global education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">Apply Now <ArrowRight className="w-5 h-5" /></Button>
              </Link>
              <Link to="/contact">
                <Button variant="outlineLight" size="xl">Free Counseling</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Study Masters */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Study <span className="text-primary">Masters Abroad?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-golden transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl gradient-golden flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Programs</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Popular <span className="text-primary">Masters Programs</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-5 shadow-soft border border-border/50 flex items-center gap-4 hover:border-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <prog.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading font-semibold text-foreground">{prog.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations - Table */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Destinations</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Top <span className="text-primary">Study Destinations</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="gradient-primary text-primary-foreground">
                    <th className="text-left p-4 font-heading">Country</th>
                    <th className="text-left p-4 font-heading">Duration</th>
                    <th className="text-left p-4 font-heading">Avg Fees</th>
                    <th className="text-left p-4 font-heading">Intakes</th>
                    <th className="text-center p-4 font-heading">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.map((dest, i) => (
                    <tr key={dest.country} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={dest.flag} alt={dest.country} className="w-8 h-6 object-cover rounded" />
                          <span className="font-medium text-foreground">{dest.country}</span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{dest.duration}</td>
                      <td className="p-4 text-muted-foreground">{dest.fees}</td>
                      <td className="p-4 text-muted-foreground">{dest.intakes}</td>
                      <td className="p-4 text-center">
                        <Link to="/contact">
                          <Button variant="golden" size="sm">Apply</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Financial Aid</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Scholarship <span className="text-primary">Opportunities</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {scholarships.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-golden flex items-center justify-center mb-4 mx-auto">
                  <s.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Career Opportunities <span className="text-gradient">After Masters</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerOps.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/10 rounded-xl p-5 text-center"
              >
                <h3 className="font-heading font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
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
              Start Your Masters Journey Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Apply now and get expert guidance for your master's degree abroad.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">Apply Now <ArrowRight className="w-5 h-5" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Masters;
