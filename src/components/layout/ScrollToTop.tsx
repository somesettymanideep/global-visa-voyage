import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:brightness-110 transition-all duration-300 flex items-center justify-center hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <Plane className="w-6 h-6 -rotate-45" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
