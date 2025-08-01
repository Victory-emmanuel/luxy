import { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Wifi,
  Dumbbell,
  Shield,
  Camera,
  Heart,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { FaSwimmer } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PropertyDetails = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  // Mock property data
  const property = {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2,850,000",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    parking: 3,
    yearBuilt: 2020,
    description:
      "This stunning modern villa represents the pinnacle of luxury living in Beverly Hills. Featuring contemporary architecture, premium finishes, and breathtaking city views, this property offers an unparalleled lifestyle experience.",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    features: [
      { icon: Wifi, name: "High-Speed Internet" },
      { icon: Dumbbell, name: "Private Gym" },
      { icon: FaSwimmer, name: "Infinity Pool" },
      { icon: Shield, name: "24/7 Security" },
      { icon: Camera, name: "Smart Home System" },
      { icon: Car, name: "Private Garage" },
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@luxuryshowcase.com",
      image: "/api/placeholder/100/100",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24">
        {/* Back Button */}
        <div className="px-6 py-4">
          <div className="container mx-auto">
            <Button variant="ghost" className="font-body">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <section className="px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8"
            >
              <div className="lg:col-span-3">
                <img
                  src={property.images[currentImage]}
                  alt={property.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-xl"
                />
              </div>
              <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
                {property.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className={`w-full h-24 lg:h-32 object-cover rounded-lg cursor-pointer transition-opacity ${
                      currentImage === index
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-80"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Property Information */}
        <section className="px-6 py-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                        {property.title}
                      </h1>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="font-body">{property.location}</span>
                      </div>
                      <p className="text-3xl font-heading font-bold text-gold">
                        {property.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Property Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <Bed className="w-8 h-8 text-gold mx-auto mb-2" />
                      <p className="font-heading font-semibold text-foreground">
                        {property.bedrooms}
                      </p>
                      <p className="font-body text-muted-foreground text-sm">
                        Bedrooms
                      </p>
                    </div>
                    <div className="text-center">
                      <Bath className="w-8 h-8 text-gold mx-auto mb-2" />
                      <p className="font-heading font-semibold text-foreground">
                        {property.bathrooms}
                      </p>
                      <p className="font-body text-muted-foreground text-sm">
                        Bathrooms
                      </p>
                    </div>
                    <div className="text-center">
                      <Square className="w-8 h-8 text-gold mx-auto mb-2" />
                      <p className="font-heading font-semibold text-foreground">
                        {property.area}
                      </p>
                      <p className="font-body text-muted-foreground text-sm">
                        Sq Ft
                      </p>
                    </div>
                    <div className="text-center">
                      <Car className="w-8 h-8 text-gold mx-auto mb-2" />
                      <p className="font-heading font-semibold text-foreground">
                        {property.parking}
                      </p>
                      <p className="font-body text-muted-foreground text-sm">
                        Parking
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                      Description
                    </h2>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                      Features & Amenities
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <feature.icon className="w-5 h-5 text-gold" />
                          <span className="font-body text-muted-foreground">
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Agent Card */}
                  <Card className="luxury-card p-6 mb-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      Contact Agent
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src={property.agent.image}
                        alt={property.agent.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {property.agent.name}
                        </h4>
                        <p className="font-body text-muted-foreground text-sm">
                          Luxury Property Specialist
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <p className="font-body text-muted-foreground">
                        {property.agent.phone}
                      </p>
                      <p className="font-body text-muted-foreground">
                        {property.agent.email}
                      </p>
                    </div>
                    <Button className="gold-button w-full mb-3">
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Viewing
                    </Button>
                  </Card>

                  {/* Contact Form */}
                  <Card className="luxury-card p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      Request Information
                    </h3>
                    <form className="space-y-4">
                      <Input placeholder="Your Name" className="font-body" />
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="font-body"
                      />
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        className="font-body"
                      />
                      <Textarea
                        placeholder="Message..."
                        className="font-body min-h-[100px]"
                      />
                      <Button className="gold-button w-full">
                        Send Message
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
