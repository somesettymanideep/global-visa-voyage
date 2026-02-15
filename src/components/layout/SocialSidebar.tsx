import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, MessageCircle } from "lucide-react";

const socialItems = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1AT1j1Ljys/",
    bg: "bg-[#1877F2]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/pravaasinternational?igsh=Z2lzMTNuaGt2NXVi",
    bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    bg: "bg-[#0A66C2]",
  },
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+911234567890",
    bg: "bg-[#F59E0B]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/911234567890",
    bg: "bg-[#25D366]",
  },
];

const SocialSidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          exit={{ x: -80 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
        >
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center ${item.bg} rounded-r-xl overflow-hidden shadow-lg transition-all duration-300`}
            >
              <div className="p-3 flex items-center justify-center text-white">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-white text-sm font-medium whitespace-nowrap group-hover:pr-4">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialSidebar;
