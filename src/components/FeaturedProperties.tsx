import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,850,000",
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      featured: true,
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Penthouse Suite",
      location: "Manhattan, NY",
      price: "$4,200,000",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      featured: true,
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Waterfront Estate",
      location: "Malibu, CA",
      price: "$6,750,000",
      bedrooms: 6,
      bathrooms: 5,
      area: 5500,
      featured: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of exceptional luxury properties
            in the world's most prestigious locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="luxury-card overflow-hidden group hover:scale-102 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {property.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-body text-sm">
                      {property.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.area} sq ft</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-heading font-bold text-gold">
                      {property.price}
                    </p>
                    <Link to={`/property/${property.id}`}>
                      <Button className="gold-button">View Details</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/properties">
            <Button className="gold-button shine-effect">
              View All Properties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
