import { motion } from "framer-motion";
import { GraduationCap, Globe, Briefcase, Clock, DollarSign, Calendar, CheckCircle, ArrowRight, BookOpen, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const benefits = [
  { icon: Globe, title: "Globally Recognized Education", desc: "Earn a degree valued by employers worldwide." },
  { icon: BookOpen, title: "Practical & Industry-Focused Learning", desc: "Hands-on training with real-world projects and internships." },
  { icon: Users, title: "Global Exposure & Confidence Building", desc: "Build a diverse network and develop cross-cultural skills." },
  { icon: Briefcase, title: "Part-Time Work Opportunities", desc: "Earn while you learn with flexible work options." },
  { icon: TrendingUp, title: "Better Career Prospects", desc: "Access global job markets and higher earning potential." },
];

const destinations = [
  { country: "United Kingdom", flag: "🇬🇧", duration: "3 Years", cost: "£15,000 - £30,000/year", intakes: "Sept, Jan, May", benefits: ["World-renowned universities", "Post-study work visa (2 years)", "Multicultural environment"] },
  { country: "United States", flag: "🇺🇸", duration: "4 Years", cost: "$30,000 - $60,000/year", intakes: "Sept, Jan, May", benefits: ["Ivy League options", "OPT work program", "Research opportunities"] },
  { country: "Germany", flag: "🇩🇪", duration: "3 Years", cost: "Low/No tuition (public) · €43,000 total", intakes: "Oct, April", benefits: ["Minimal tuition fees", "Strong engineering programs", "18-month post-study work visa"] },
  { country: "Australia", flag: "🇦🇺", duration: "3 Years", cost: "A$80,000 total", intakes: "Feb, Jul, Nov", benefits: ["High quality of life", "Post-study work rights (2-4 yrs)", "Part-time work while studying"] },
  { country: "Canada", flag: "🇨🇦", duration: "4 Years", cost: "CAD 60,000 total", intakes: "Sept, Jan, May", benefits: ["Pathway to PR", "Co-op programs", "Affordable education"] },
];

const eligibility = [
  "Completed 12th grade / Higher Secondary",
  "Minimum 55-60% aggregate (varies by university)",
  "English proficiency: IELTS 6.0+ / TOEFL 80+",
  "Valid passport",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (LOR)",
];

const processSteps = [
  { step: "1", title: "Free Counselling", desc: "Profile evaluation & course shortlisting" },
  { step: "2", title: "University Selection", desc: "Shortlist universities based on profile & budget" },
  { step: "3", title: "Application", desc: "Submit applications with all documents" },
  { step: "4", title: "Offer Letter", desc: "Receive admission offers from universities" },
  { step: "5", title: "Visa Filing", desc: "Complete visa application & interview prep" },
  { step: "6", title: "Pre-Departure", desc: "Travel, forex, accommodation arrangements" },
];

const Bachelors = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <GraduationCap className="absolute top-20 right-16 w-20 h-20 animate-float" />
            <Globe className="absolute bottom-16 left-12 w-16 h-16 animate-float" style={{ animationDelay: "2s" }} />
          </div>
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6">Undergraduate Programs</span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl font-heading font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Bachelor's Degree Abroad
            </motion.h1>
            <motion.p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              Your Gateway to Global Success
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="/contact"><Button variant="golden" size="xl">Start Your Application Today <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Why Study Bachelor's Abroad?
            </motion.h2>
            <motion.p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              A bachelor's degree from an international university opens doors to limitless opportunities.
            </motion.p>
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
              Popular Destinations
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
                      <div className="p-5 space-y-3">
                        <div className="flex items-center gap-2 text-sm"><Clock className="w-4 h-4 text-secondary" /><span className="text-muted-foreground">Duration: <strong className="text-foreground">{d.duration}</strong></span></div>
                        <div className="flex items-center gap-2 text-sm"><DollarSign className="w-4 h-4 text-secondary" /><span className="text-muted-foreground">Cost: <strong className="text-foreground">{d.cost}</strong></span></div>
                        <div className="flex items-center gap-2 text-sm"><Calendar className="w-4 h-4 text-secondary" /><span className="text-muted-foreground">Intakes: <strong className="text-foreground">{d.intakes}</strong></span></div>
                        <div className="pt-2 border-t border-border space-y-1.5">
                          {d.benefits.map((b) => (
                            <div key={b} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{b}</span></div>
                          ))}
                        </div>
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
              Eligibility Requirements
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

        {/* Application Process */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Application Process
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

        {/* CTA */}
        <section className="gradient-primary text-primary-foreground section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto space-y-6">
            <Award className="w-12 h-12 mx-auto text-secondary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Start Your Application Today</h2>
            <p className="text-primary-foreground/80">Take the first step towards your international education dream.</p>
            <Link to="/contact"><Button variant="golden" size="xl">Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bachelors;
