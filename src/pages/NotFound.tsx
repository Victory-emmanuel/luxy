import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-heading font-bold text-gold mb-4">
                404
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Page Not Found
            </h2>

            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
              The page you're looking for doesn't exist or has been moved. Let's
              get you back to exploring our luxury properties.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/">
                <Button className="gold-button shine-effect">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Link to="/properties">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View Properties
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
