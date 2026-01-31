import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')`,
          y: backgroundY
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/90" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient">Global Education Journey?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Take the first step towards your dream university. Book a free consultation 
            with our expert counselors and discover the opportunities waiting for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button variant="outlineLight" size="xl">
                Call Us Now
              </Button>
            </a>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            No commitment required. 100% free initial consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
