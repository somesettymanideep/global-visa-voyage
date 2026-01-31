import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    shortName: "UK",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    shortName: "Australia",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    shortName: "USA",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    shortName: "Canada",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    shortName: "Germany",
  },
];

const CountriesSection = () => {
  return (
    <section id="countries" className="section-padding bg-muted">
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
            Study Destinations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Top Countries to{" "}
            <span className="text-primary">Study Abroad</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore world-class education opportunities in our partner countries with proven pathways to success.
          </p>
        </motion.div>

        {/* Countries Grid - Flag Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to="/contact">
                <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border/50 text-center p-6 hover:-translate-y-2">
                  {/* Flag */}
                  <span className="text-6xl md:text-7xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </span>
                  
                  {/* Country Name */}
                  <h3 className="text-lg md:text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {country.shortName}
                  </h3>
                  
                  {/* Explore indicator */}
                  <div className="mt-3 flex items-center justify-center gap-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <Button variant="golden" size="lg" className="group">
              Get Free Counselling
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CountriesSection;
