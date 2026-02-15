import { motion } from "framer-motion";
import { BookOpen, Briefcase, FileCheck, Plane, Award, Home, Compass } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Course Selection Guidance",
    description: "Personalized assistance in choosing the right course based on your academic background and career goals.",
  },
  {
    icon: Briefcase,
    title: "Career Counselling",
    description: "Professional counselling to help you make informed decisions about your future.",
  },
  {
    icon: FileCheck,
    title: "Application & Document Assistance",
    description: "Complete support in preparing and submitting applications, including documentation review.",
  },
  {
    icon: BookOpen,
    title: "Visa Processing & Interview Preparation",
    description: "Expert guidance for visa applications along with mock interview sessions.",
  },
  {
    icon: Award,
    title: "Scholarship & Financial Guidance",
    description: "Assistance in identifying scholarship opportunities and planning finances.",
  },
  {
    icon: Plane,
    title: "Pre-Departure & Post-Arrival Support",
    description: "Orientation sessions before departure and continued assistance after arrival.",
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    description: "Help in securing safe and comfortable accommodation near your university.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Support for Your{" "}
            <span className="text-primary">Study Abroad Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From the first consultation to your arrival at your dream university, 
            we provide end-to-end support at every step.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 h-full border border-border/50 hover:border-secondary/30">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl gradient-golden flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-secondary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
