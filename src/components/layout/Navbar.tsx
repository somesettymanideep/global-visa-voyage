import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Study Abroad",
    path: "#",
    children: [
      { name: "Bachelors", path: "/study-abroad/bachelors" },
      { name: "Masters", path: "/study-abroad/masters" },
      { name: "MBBS", path: "/study-abroad/mbbs" },
    ],
  },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-end items-center gap-6 text-sm">
          <a href="tel:+918008249666" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="w-4 h-4" />
            +91 80082 49666
          </a>
          <a href="mailto:info@pravaasinternational.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="w-4 h-4" />
            info@pravaasinternational.com
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Pravaas International" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="relative flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors group"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-card border border-border/50 overflow-hidden z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent font-medium transition-colors text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path.startsWith("/#") ? "/" : link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="relative text-foreground/80 hover:text-primary font-medium transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="golden" size="lg">
                Download Brochure
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex items-center justify-between w-full text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                onClick={() => handleNavClick(child.path)}
                                className="block text-foreground/70 hover:text-primary font-medium transition-colors py-2 text-sm"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path.startsWith("/#") ? "/" : link.path}
                      onClick={() => handleNavClick(link.path)}
                      className="block text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="golden" className="w-full mt-4">
                    Download Brochure
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
