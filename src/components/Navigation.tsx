import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-luxury border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-heading font-bold text-gold"
              >
                Luxury Showcase
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-body font-medium transition-colors duration-200 relative group ${
                    isActive(item.path)
                      ? "text-gold"
                      : isScrolled
                      ? "text-foreground hover:text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
                      isActive(item.path) ? "w-full" : ""
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm">
                <div
                  className={`flex items-center space-x-1 ${
                    isScrolled ? "text-muted-foreground" : "text-white/80"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-body">+1 (555) 123-4567</span>
                </div>
                <div
                  className={`flex items-center space-x-1 ${
                    isScrolled ? "text-muted-foreground" : "text-white/80"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-body">info@luxuryshowcase.com</span>
                </div>
              </div>
              <Button className="gold-button shine-effect">
                Schedule Viewing
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border lg:hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-2 font-body font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-gold"
                          : "text-foreground hover:text-gold"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4 border-t border-border"
                >
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span className="font-body">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span className="font-body">info@luxuryshowcase.com</span>
                    </div>
                  </div>
                  <Button className="gold-button w-full">
                    Schedule Viewing
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
