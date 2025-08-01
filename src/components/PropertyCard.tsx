import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  index: number;
}

const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  index,
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="luxury-card overflow-hidden group hover:scale-102 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <Heart className="w-5 h-5 text-white" />
          </Button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold">
              For Sale
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
            {title}
          </h3>

          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="font-body text-sm">{location}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{bedrooms}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{bathrooms}</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{area} sq ft</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-heading font-bold text-gold">{price}</p>
            <Link to={`/property/${id}`}>
              <Button className="gold-button">View Details</Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
