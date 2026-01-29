import { motion } from "framer-motion";
import { CheckCircle2, Shield, Handshake, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "10+ Years Experience",
    description: "Over a decade of expertise in international education consulting with proven track record.",
  },
  {
    icon: CheckCircle2,
    title: "98% Visa Success Rate",
    description: "Industry-leading visa approval rates backed by meticulous documentation and preparation.",
  },
  {
    icon: Handshake,
    title: "50+ University Partners",
    description: "Exclusive partnerships with top-ranked universities in UK, Australia, and other destinations.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description: "From university selection to post-arrival assistance, we're with you every step of the way.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your Success is Our{" "}
              <span className="text-primary">Priority</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Pravaas International, we don't just process applications – we build futures. 
              Our dedicated team of counselors brings together expertise, empathy, and a 
              genuine commitment to seeing every student succeed.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary rounded-2xl p-8 text-center text-primary-foreground"
              >
                <div className="text-5xl font-heading font-bold mb-2">5000+</div>
                <div className="text-primary-foreground/80">Students Placed</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary rounded-2xl p-8 text-center text-secondary-foreground"
              >
                <div className="text-5xl font-heading font-bold mb-2">10+</div>
                <div className="text-secondary-foreground/80">Years Experience</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary rounded-2xl p-8 text-center text-secondary-foreground"
              >
                <div className="text-5xl font-heading font-bold mb-2">50+</div>
                <div className="text-secondary-foreground/80">Partner Universities</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary rounded-2xl p-8 text-center text-primary-foreground"
              >
                <div className="text-5xl font-heading font-bold mb-2">98%</div>
                <div className="text-primary-foreground/80">Visa Success</div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
