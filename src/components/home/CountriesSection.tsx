import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Home to world-renowned universities like Oxford, Cambridge, and Imperial College. Experience quality education with rich cultural heritage.",
    universities: "150+ Partner Universities",
    duration: "1-2 Year Programs",
    highlight: "Post-Study Work Visa Available",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    description: "Discover exceptional education in a vibrant, multicultural environment. Top universities with excellent research facilities and work opportunities.",
    universities: "40+ Partner Universities",
    duration: "2-4 Year Programs",
    highlight: "Work While You Study",
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

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border/50 h-full">
                {/* Header with flag */}
                <div className="relative bg-primary p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{country.flag}</span>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary-foreground">
                        {country.name}
                      </h3>
                      <span className="text-primary-foreground/80 text-sm">
                        {country.universities}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {country.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="inline-block bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full">
                      {country.duration}
                    </span>
                    <span className="inline-block bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full font-medium">
                      {country.highlight}
                    </span>
                  </div>

                  <Link to="/contact" className="block pt-2">
                    <Button variant="outlinePrimary" className="w-full group/btn">
                      Explore {country.name}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
