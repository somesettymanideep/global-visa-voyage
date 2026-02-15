import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, DollarSign, Globe, Award, Building2, Stethoscope, Plane, Users, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import mbbsHero from "@/assets/mbbs-hero.jpg";

const whyStudy = [
  { icon: DollarSign, title: "Affordable Fees", desc: "Much lower tuition compared to private medical colleges in India" },
  { icon: Award, title: "WHO & NMC Recognized", desc: "Degrees recognized by WHO, NMC, and other global bodies" },
  { icon: Globe, title: "English Medium Teaching", desc: "Complete your MBBS in English without language barriers" },
  { icon: Building2, title: "Modern Hospital Training", desc: "Hands-on clinical training at state-of-the-art hospitals" },
  { icon: CheckCircle, title: "No Donation Required", desc: "Transparent admissions with no capitation or donation fees" },
];

const countries = [
  { country: "🇰🇬 Kyrgyzstan", duration: "5+1 Years", fees: "$3,000–$5,000/yr", recognition: "WHO, NMC" },
  { country: "🇰🇿 Kazakhstan", duration: "5+1 Years", fees: "$4,000–$6,000/yr", recognition: "WHO, NMC" },
  { country: "🇺🇿 Uzbekistan", duration: "5+1 Years", fees: "$3,500–$5,500/yr", recognition: "WHO, NMC" },
  { country: "🇷🇺 Russia", duration: "6 Years", fees: "$4,000–$8,000/yr", recognition: "WHO, NMC" },
  { country: "🇬🇪 Georgia", duration: "6 Years", fees: "$5,000–$8,000/yr", recognition: "WHO, NMC" },
  { country: "🇷🇸 Serbia", duration: "6 Years", fees: "$5,000–$7,000/yr", recognition: "WHO, NMC" },
  { country: "🇧🇦 Bosnia", duration: "6 Years", fees: "$4,500–$7,000/yr", recognition: "WHO, NMC" },
];

const eligibility = [
  "50% marks in PCB (Physics, Chemistry, Biology)",
  "NEET Qualified",
  "Age 17+ at the time of admission",
];

const admissionSteps = [
  { step: "01", title: "Counseling", desc: "Free expert counseling for MBBS abroad" },
  { step: "02", title: "University Selection", desc: "Choose the best NMC-recognized university" },
  { step: "03", title: "Admission Letter", desc: "Get your official admission confirmation" },
  { step: "04", title: "Visa Processing", desc: "Complete visa documentation and approval" },
  { step: "05", title: "Travel & Hostel", desc: "Airport pickup, hostel, and settling-in support" },
];

const support = [
  "Free counseling & profile evaluation",
  "Complete admission support",
  "Visa assistance & documentation",
  "Airport pickup on arrival",
  "Hostel & accommodation help",
  "Post-arrival academic guidance",
];

const faqs = [
  { q: "Is studying MBBS abroad safe for Indian students?", a: "Yes, most popular MBBS destinations like Kyrgyzstan, Kazakhstan, Georgia, and Russia have safe campuses with Indian student communities, Indian food, and 24/7 support from university coordinators." },
  { q: "Is the MBBS degree valid in India?", a: "Yes, if you study from a WHO and NMC (National Medical Commission) recognized university and clear the FMGE/NEXT exam, your degree is fully valid to practice medicine in India." },
  { q: "What is the total cost of studying MBBS abroad?", a: "The total cost ranges from ₹15 Lakh to ₹40 Lakh for the complete course (5-6 years), including tuition, hostel, food, and other expenses — significantly less than private colleges in India." },
  { q: "Do I need IELTS or TOEFL for MBBS abroad?", a: "Most universities in countries like Kyrgyzstan, Kazakhstan, and Uzbekistan do not require IELTS or TOEFL as the medium of instruction is English." },
  { q: "Can I practice in India after completing MBBS abroad?", a: "Yes, you need to clear the FMGE (Foreign Medical Graduate Examination) or the upcoming NEXT exam to get your license to practice medicine in India." },
];

const MBBS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-24 h-[280px] md:h-[320px] overflow-hidden">
        <img src={mbbsHero} alt="Study MBBS Abroad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container-custom relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
            >
              Study MBBS Abroad
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
              <span className="text-secondary font-medium">MBBS</span>
            </motion.nav>
          </div>
        </div>
      </section>

      {/* Why Study MBBS Abroad */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Study <span className="text-primary">MBBS Abroad?</span>
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

      {/* MBBS Countries */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Countries</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Top MBBS <span className="text-primary">Destinations</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((dest, i) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:-translate-y-1 transition-transform"
              >
                <h3 className="font-heading font-semibold text-foreground text-xl mb-4">{dest.country}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p><span className="font-medium text-foreground">Duration:</span> {dest.duration}</p>
                  <p><span className="font-medium text-foreground">Fees:</span> {dest.fees}</p>
                  <p><span className="font-medium text-foreground">Recognition:</span> {dest.recognition}</p>
                </div>
                <Link to="/contact">
                  <Button variant="golden" size="sm" className="w-full">Apply Now</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Requirements</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Eligibility <span className="text-primary">Criteria</span>
              </h2>
            </motion.div>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="space-y-4">
                {eligibility.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-muted rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              MBBS Admission <span className="text-primary">Process</span>
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

      {/* End-to-End Support */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Our <span className="text-gradient">End-to-End Support</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {support.map((item, i) => (
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

      {/* Parent FAQs */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Parents' <span className="text-primary">Frequently Asked Questions</span>
              </h2>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6">
                  <AccordionTrigger className="text-foreground font-heading font-semibold text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Start Your Medical Career Abroad Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get expert guidance for MBBS admissions abroad. Free counseling available now.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">Book Free Counseling <ArrowRight className="w-5 h-5" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MBBS;
