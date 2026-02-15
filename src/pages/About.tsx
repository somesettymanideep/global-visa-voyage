import { motion } from "framer-motion";
import { Eye, Target, UserCheck, BookOpen, FileText, ShieldCheck, Plane, GraduationCap, Globe, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import logo from "@/assets/logo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const whyChoosePoints = [
  { icon: UserCheck, title: "Free Profile Evaluation & Career Counselling", desc: "Get expert assessment of your profile and personalized career guidance at no cost." },
  { icon: BookOpen, title: "Course & University Selection Guidance", desc: "Find the perfect course and university that aligns with your goals and budget." },
  { icon: FileText, title: "Application & Documentation Support", desc: "End-to-end help with applications, SOPs, LORs, and all required documents." },
  { icon: ShieldCheck, title: "Visa Guidance & Interview Preparation", desc: "Comprehensive visa filing support and mock interview sessions for confidence." },
  { icon: Plane, title: "Pre-departure Support & Assistance", desc: "Travel, accommodation, and settling-in guidance so you arrive prepared." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <GraduationCap className="absolute top-20 left-10 w-20 h-20 animate-float" />
            <Globe className="absolute top-32 right-16 w-16 h-16 animate-float" style={{ animationDelay: "2s" }} />
            <Plane className="absolute bottom-16 left-1/4 w-14 h-14 animate-float" style={{ animationDelay: "4s" }} />
            <BookOpen className="absolute bottom-24 right-1/3 w-12 h-12 animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container-custom text-center relative z-10">
            <motion.img src={logo} alt="Pravaas International" className="h-20 mx-auto mb-6 brightness-0 invert" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
            <motion.h1 className="text-4xl md:text-5xl font-heading font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              About Pravaas International
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              Guiding Your Journey to Global Education
            </motion.p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Eye, title: "Our Vision", text: "To guide students with transparency and integrity towards globally recognized education and successful international careers." },
                { icon: Target, title: "Our Mission", text: "To provide honest, personalized, and end-to-end study abroad guidance, helping students make informed academic and career decisions." },
              ].map((item, i) => (
                <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="h-full border-none shadow-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Pravaas */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose Pravaas?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We provide comprehensive, transparent guidance at every step of your study abroad journey.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChoosePoints.map((point, i) => (
                <motion.div key={point.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="h-full border-none shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center">
                        <point.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">{point.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="gradient-primary text-primary-foreground section-padding">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
              <GraduationCap className="w-12 h-12 mx-auto text-secondary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Start Your Global Education Journey</h2>
              <p className="text-primary-foreground/80">Get in touch with our expert counsellors for a free consultation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="golden" size="lg">Book Free Consultation</Button>
                </Link>
                <a href="mailto:info@pravaasinternational.com">
                  <Button variant="outlineLight" size="lg"><Mail className="w-4 h-4 mr-2" /> Email Us</Button>
                </a>
              </div>
              <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" /> www.pravaasinternational.com
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
