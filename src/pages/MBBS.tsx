import { motion } from "framer-motion";
import { Stethoscope, Globe, GraduationCap, CheckCircle, ArrowRight, Building2, Clock, DollarSign, BookOpen, ShieldCheck, Users, Award, HelpCircle, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const benefits = [
  { icon: GraduationCap, title: "World-Class Medical Education", desc: "Study at WHO/NMC-recognized universities with modern curricula." },
  { icon: Heart, title: "International Clinical Exposure", desc: "Train in hospitals across diverse healthcare systems." },
  { icon: Building2, title: "Advanced Research Facilities", desc: "Access cutting-edge labs and medical research infrastructure." },
  { icon: Globe, title: "Global Medical Licensing", desc: "Eligible to practice in multiple countries after qualifying exams." },
  { icon: DollarSign, title: "Affordable Compared to Private Colleges", desc: "Quality medical education at a fraction of private college costs." },
];

const destinations = [
  { country: "Russia", flag: "🇷🇺", duration: "6 Years", fees: "$3,000 - $8,000/year", living: "$200 - $400/month", medium: "English", recognition: "WHO, NMC", neet: "Required" },
  { country: "Philippines", flag: "🇵🇭", duration: "5.5 Years", fees: "$3,000 - $5,000/year", living: "$300 - $500/month", medium: "English", recognition: "WHO, NMC", neet: "Required" },
  { country: "Georgia", flag: "🇬🇪", duration: "6 Years", fees: "$4,000 - $8,000/year", living: "$250 - $400/month", medium: "English", recognition: "WHO, NMC", neet: "Required" },
  { country: "Bangladesh", flag: "🇧🇩", duration: "5 Years", fees: "$3,500 - $5,500/year", living: "$150 - $300/month", medium: "English", recognition: "WHO, NMC", neet: "Required" },
  { country: "China", flag: "🇨🇳", duration: "6 Years (incl. 1 yr internship)", fees: "$3,000 - $10,000/year", living: "$200 - $500/month", medium: "English (+ Chinese clinical)", recognition: "WHO, NMC", neet: "Required" },
  { country: "Caribbean Islands", flag: "🏝️", duration: "5-6 Years", fees: "$5,000 - $15,000/year", living: "$500 - $800/month", medium: "English", recognition: "WHO, ECFMG", neet: "Required" },
];

const eligibility = [
  "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th grade",
  "NEET qualification (mandatory for Indian students)",
  "Minimum age: 17 years at time of admission",
  "Valid passport",
  "Medical fitness certificate",
  "No upper age limit in most countries",
];

const processSteps = [
  { step: "1", title: "NEET & Counselling", desc: "Qualify NEET and get a free profile assessment" },
  { step: "2", title: "University Selection", desc: "Choose from NMC-approved universities" },
  { step: "3", title: "Application & Admission", desc: "Submit documents and receive invitation letter" },
  { step: "4", title: "Visa Processing", desc: "Student visa application with our support" },
  { step: "5", title: "Travel & Arrival", desc: "Pre-departure briefing and travel assistance" },
  { step: "6", title: "University Enrollment", desc: "Registration, accommodation, and orientation" },
];

const whyDifferent = [
  { icon: ShieldCheck, title: "Only NMC/WHO Approved Universities", desc: "We never recommend unrecognized institutions." },
  { icon: Users, title: "Dedicated MBBS Counsellors", desc: "Medical education specialists guide your journey." },
  { icon: TrendingUp, title: "95%+ Visa Success Rate", desc: "Proven track record in medical student visas." },
  { icon: Award, title: "Post-Admission Support", desc: "Continued assistance throughout your MBBS journey." },
];

const faqs = [
  { q: "Is NEET mandatory to study MBBS abroad?", a: "Yes, NEET qualification is mandatory for Indian students seeking MBBS admission abroad as per NMC regulations." },
  { q: "Can I practice in India after completing MBBS abroad?", a: "Yes, you need to clear the FMGE (Foreign Medical Graduate Examination) or NExT to practice in India." },
  { q: "What is the medium of instruction?", a: "Most recommended universities offer MBBS programs in English. Some countries may require learning the local language for clinical rotations." },
  { q: "Are the degrees recognized globally?", a: "All universities we recommend are WHO and NMC recognized, making the degree valid for licensing exams in India and many other countries." },
  { q: "What is the total cost of studying MBBS abroad?", a: "Total costs range from $15,000 to $50,000 for the entire program depending on the country, significantly lower than private medical colleges in India." },
  { q: "Is it safe for students to study abroad?", a: "All our partner universities are in safe cities with dedicated hostel facilities and Indian food options. We provide 24/7 support." },
];

const MBBS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Stethoscope className="absolute top-20 right-16 w-20 h-20 animate-float" />
            <GraduationCap className="absolute bottom-16 left-12 w-16 h-16 animate-float" style={{ animationDelay: "2s" }} />
          </div>
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6">Medical Programs</span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl font-heading font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Study MBBS Abroad
            </motion.h1>
            <motion.p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              Fulfill Your Medical Dreams with Affordable, World-Class Education
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="/contact"><Button variant="golden" size="xl">Book MBBS Counselling Session <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Why Study Medicine Abroad?
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div key={b.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="h-full border-none shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center">
                        <b.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">{b.title}</h4>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Top Destinations for MBBS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {destinations.map((d, i) => (
                <motion.div key={d.country} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="h-full border-none shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="gradient-primary p-4 text-primary-foreground flex items-center gap-3">
                        <span className="text-3xl">{d.flag}</span>
                        <h4 className="font-heading font-semibold text-lg">{d.country}</h4>
                      </div>
                      <div className="p-5 space-y-2.5 text-sm">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary flex-shrink-0" /><span className="text-muted-foreground">Duration: <strong className="text-foreground">{d.duration}</strong></span></div>
                        <div className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-secondary flex-shrink-0" /><span className="text-muted-foreground">Fees: <strong className="text-foreground">{d.fees}</strong></span></div>
                        <div className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-secondary flex-shrink-0" /><span className="text-muted-foreground">Living: <strong className="text-foreground">{d.living}</strong></span></div>
                        <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-secondary flex-shrink-0" /><span className="text-muted-foreground">Medium: <strong className="text-foreground">{d.medium}</strong></span></div>
                        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary flex-shrink-0" /><span className="text-muted-foreground">Recognition: <strong className="text-foreground">{d.recognition}</strong></span></div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /><span className="text-muted-foreground">NEET: <strong className="text-foreground">{d.neet}</strong></span></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Eligibility Criteria
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="border-none shadow-card">
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {eligibility.map((e, i) => (
                      <div key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{e}</span></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Admission Process
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((s, i) => (
                <motion.div key={s.step} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="h-full border-none shadow-card text-center">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-full gradient-primary text-primary-foreground flex items-center justify-center mx-auto font-heading font-bold text-lg">{s.step}</div>
                      <h4 className="font-heading font-semibold text-foreground">{s.title}</h4>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              What Makes Us Different for MBBS Guidance?
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyDifferent.map((w, i) => (
                <motion.div key={w.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="h-full border-none shadow-card">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <w.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">{w.title}</h4>
                        <p className="text-sm text-muted-foreground">{w.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted">
          <div className="container-custom max-w-3xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <HelpCircle className="w-8 h-8 inline-block mr-2 text-secondary" />
              Frequently Asked Questions
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="border-none shadow-card">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-primary text-primary-foreground section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto space-y-6">
            <Stethoscope className="w-12 h-12 mx-auto text-secondary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Book MBBS Counselling Session</h2>
            <p className="text-primary-foreground/80">Take the first step towards your medical career. Our MBBS specialists are here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact"><Button variant="golden" size="xl">Get Free Counselling <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            </div>
            <div className="flex justify-center gap-8 pt-4 text-sm text-primary-foreground/60">
              <span>🎓 500+ Students Placed</span>
              <span>🏥 50+ Partner Universities</span>
              <span>✅ 95% Visa Success</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MBBS;
