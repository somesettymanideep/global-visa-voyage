import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const branches = [
  {
    type: "Head Office",
    location: "Kothagudem, Khammam",
    address: "SS Complex, Above Hyundai Car showroom, Vidyanagar, Bhadradri Kotthagudem, Telangana, 507101",
    isHead: true,
  },
  { location: "Hyderabad" },
  { location: "Karimnagar" },
  { location: "Warangal" },
  { location: "Nalgonda" },
];

const courses = [
  "Engineering",
  "Medicine / MBBS",
  "Business / MBA",
  "Computer Science / IT",
  "Arts & Humanities",
  "Law",
  "Nursing",
  "Other",
];

const intakeMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const currentYear = new Date().getFullYear();
const intakeYears = Array.from({ length: 5 }, (_, i) => currentYear + i);
const passingYears = Array.from({ length: 15 }, (_, i) => currentYear - i);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    intakeMonth: "",
    intakeYear: "",
    passingYear: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      mobile: "",
      email: "",
      course: "",
      intakeMonth: "",
      intakeYear: "",
      passingYear: "",
    });
    setIsSubmitting(false);
  };

  const selectClasses =
    "w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 gradient-hero">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Get in touch with our expert counselors and start your journey to studying abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Branches */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                        Mobile Number *
                      </label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Course *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className={selectClasses}
                    >
                      <option value="">Select a course</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Intake (Month & Year) *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          name="intakeMonth"
                          value={formData.intakeMonth}
                          onChange={handleChange}
                          required
                          className={selectClasses}
                        >
                          <option value="">Month</option>
                          {intakeMonths.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
                        <select
                          name="intakeYear"
                          value={formData.intakeYear}
                          onChange={handleChange}
                          required
                          className={selectClasses}
                        >
                          <option value="">Year</option>
                          {intakeYears.map((y) => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="passingYear" className="block text-sm font-medium text-foreground mb-2">
                        Year of Passing (Highest Qualification) *
                      </label>
                      <select
                        id="passingYear"
                        name="passingYear"
                        value={formData.passingYear}
                        onChange={handleChange}
                        required
                        className={selectClasses}
                      >
                        <option value="">Select year</option>
                        {passingYears.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="golden"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Branches */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
                  Our Branches
                </h2>

                <div className="space-y-5">
                  {branches.map((branch, index) => (
                    <motion.div
                      key={branch.location}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-start gap-4 p-5 rounded-2xl border ${
                        branch.isHead
                          ? "bg-primary/5 border-primary/20"
                          : "bg-muted border-border/50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          branch.isHead ? "gradient-golden" : "bg-primary/10"
                        }`}
                      >
                        {branch.isHead ? (
                          <Building2 className="w-6 h-6 text-secondary-foreground" />
                        ) : (
                          <MapPin className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div>
                        {branch.isHead && (
                          <span className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1 block">
                            Head Office
                          </span>
                        )}
                        <p className="font-heading font-semibold text-foreground">
                          📍 {branch.location}
                        </p>
                        {branch.address && (
                          <p className="text-sm text-muted-foreground mt-1">{branch.address}</p>
                        )}
                        {!branch.isHead && (
                          <p className="text-sm text-muted-foreground mt-1">We are also available here</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                  Contact Details
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="mailto:info@pravaasinternational.com" className="text-foreground hover:text-primary transition-colors block">
                        info@pravaasinternational.com
                      </a>
                      <a href="mailto:admissions@pravaasinternational.com" className="text-foreground hover:text-primary transition-colors block">
                        admissions@pravaasinternational.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Call us directly for urgent queries or to book an appointment.
                </p>
                <a href="tel:+1234567890">
                  <Button variant="secondary" className="w-full">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
