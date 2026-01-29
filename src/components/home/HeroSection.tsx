import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const stats = [
  { icon: Users, value: "5000+", label: "Students Placed" },
  { icon: Globe, value: "50+", label: "Partner Universities" },
  { icon: GraduationCap, value: "98%", label: "Visa Success Rate" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Your Trusted Education Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
            >
              Your Gateway to{" "}
              <span className="text-gradient">Global Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
            >
              Transform your dreams into reality with expert guidance. We help students 
              navigate the path to world-class universities in the UK, Australia, and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/#services">
                <Button variant="outlineLight" size="xl">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-background/10 backdrop-blur-lg rounded-3xl p-8 border border-primary-foreground/20">
              <h3 className="text-primary-foreground text-xl font-heading font-semibold mb-8 text-center">
                Our Success Story
              </h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 bg-background/10 rounded-xl p-4"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-golden flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-primary-foreground">
                        {stat.value}
                      </div>
                      <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
