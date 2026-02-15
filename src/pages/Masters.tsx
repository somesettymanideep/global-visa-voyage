import { motion } from "framer-motion";
import { GraduationCap, Globe, Briefcase, Clock, DollarSign, Calendar, CheckCircle, ArrowRight, BookOpen, Users, TrendingUp, Award, Lightbulb, FlaskConical, Laptop, Heart, BarChart3 } from "lucide-react";
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
  { icon: BookOpen, title: "Advanced Knowledge & Specialization", desc: "Deepen expertise in your chosen field with cutting-edge curricula." },
  { icon: Users, title: "Global Networking Opportunities", desc: "Connect with professionals and peers from around the world." },
  { icon: TrendingUp, title: "Enhanced Career Opportunities", desc: "Stand out with a master's degree from a top international university." },
  { icon: FlaskConical, title: "Research & Innovation Focus", desc: "Access world-class labs, research grants, and faculty mentorship." },
  { icon: Briefcase, title: "Post-Study Work Options", desc: "Stay back and work in your host country after graduation." },
];

const destinations = [
  { country: "United Kingdom", flag: "🇬🇧", duration: "1 Year", cost: "£15,000 - £30,000/year", intakes: "Jan, May, Sept", highlights: ["Fastest master's globally", "2-year post-study work visa", "Russell Group universities"] },
  { country: "United States", flag: "🇺🇸", duration: "2 Years", cost: "$30,000 - $60,000/year", intakes: "Jan, May, Sept", highlights: ["Top-ranked programs", "OPT & STEM OPT", "Teaching/Research assistantships"] },
  { country: "Germany", flag: "🇩🇪", duration: "2 Years", cost: "€28,800 total", intakes: "April, Sept", highlights: ["Low tuition at public unis", "Strong in STEM & Business", "18-month job seeker visa"] },
  { country: "Australia", flag: "🇦🇺", duration: "1.5 - 2 Years", cost: "A$50,000 total", intakes: "Feb, Jul, Nov", highlights: ["High employability", "Post-study work (2-4 years)", "Research excellence"] },
  { country: "Canada", flag: "🇨🇦", duration: "1.5 - 2 Years", cost: "CAD 30,000 total", intakes: "Jan, May, Sept", highlights: ["Pathway to PR", "PGWP program", "Co-op opportunities"] },
];

const popularFields = [
  { icon: BarChart3, name: "MBA / Business" },
  { icon: Laptop, name: "Data Science & AI" },
  { icon: FlaskConical, name: "Engineering" },
  { icon: Heart, name: "Healthcare" },
  { icon: Globe, name: "International Relations" },
  { icon: Lightbulb, name: "Computer Science" },
];

const scholarships = [
  "Chevening Scholarships (UK)",
  "DAAD Scholarships (Germany)",
  "Fulbright Program (USA)",
  "Australia Awards",
  "Vanier Canada Graduate Scholarships",
  "University-specific merit scholarships",
];

const Masters = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <GraduationCap className="absolute top-20 left-16 w-20 h-20 animate-float" />
            <Globe className="absolute bottom-16 right-12 w-16 h-16 animate-float" style={{ animationDelay: "2s" }} />
          </div>
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6">Postgraduate Programs</span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl font-heading font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Master's Degree Abroad
            </motion.h1>
            <motion.p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              Elevate Your Career with World-Class Education
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="/contact"><Button variant="golden" size="xl">Schedule Free Counselling <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Benefits of Pursuing Master's Abroad
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
              Destination Comparison
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
                          {d.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{h}</span></div>
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

        {/* Popular Fields */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Popular Fields of Study
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {popularFields.map((f, i) => (
                <motion.div key={f.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="border-none shadow-card hover:shadow-lg transition-all duration-300 text-center">
                    <CardContent className="p-5 space-y-2">
                      <f.icon className="w-8 h-8 text-primary mx-auto" />
                      <p className="text-sm font-medium text-foreground">{f.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="section-padding bg-muted">
          <div className="container-custom max-w-4xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Scholarship Opportunities
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="border-none shadow-card">
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {scholarships.map((s, i) => (
                      <div key={i} className="flex items-start gap-3"><Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{s}</span></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-primary text-primary-foreground section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto space-y-6">
            <GraduationCap className="w-12 h-12 mx-auto text-secondary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Schedule Free Counselling</h2>
            <p className="text-primary-foreground/80">Let our experts help you choose the right master's program abroad.</p>
            <Link to="/contact"><Button variant="golden" size="xl">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Masters;
