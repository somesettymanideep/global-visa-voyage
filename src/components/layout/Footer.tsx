import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#why-choose-us" },
    { name: "Services", path: "/#services" },
    { name: "Countries", path: "/#countries" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Course Selection Guidance",
    "Career Counselling",
    "Application & Document Assistance",
    "Visa Processing & Interview Preparation",
    "Scholarship & Financial Guidance",
    "Pre-Departure & Post-Arrival Support",
    "Accommodation Assistance",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1AT1j1Ljys/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/pravaasinternational?igsh=Z2lzMTNuaGt2NXVi", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-6">
            <img src={logo} alt="Pravaas International" className="h-20 w-auto" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in achieving global education dreams. We guide students towards world-class universities with personalized support.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  SS Complex, Above Hyundai Car showroom,<br />
                  Vidyanagar, Bhadradri Kotthagudem,<br />
                  Telangana, 507101
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@pravaasinternational.com" className="text-primary-foreground/80 hover:text-secondary transition-colors block">
                    info@pravaasinternational.com
                  </a>
                  <a href="mailto:admissions@pravaasinternational.com" className="text-primary-foreground/80 hover:text-secondary transition-colors block">
                    admissions@pravaasinternational.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-secondary">
        <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-secondary-foreground">
          <p>All Rights Reserved &copy; {new Date().getFullYear()} by Pravaas International Education Consultancy Developed By DigiNex</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary-foreground/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
