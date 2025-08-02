import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Grid,
  List,
  MapPin,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Properties = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock property data
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop&crop=center",
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,850,000",
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center",
      title: "Penthouse Suite",
      location: "Manhattan, NY",
      price: "$4,200,000",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop&crop=center",
      title: "Waterfront Estate",
      location: "Malibu, CA",
      price: "$6,750,000",
      bedrooms: 6,
      bathrooms: 5,
      area: 5500,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&crop=center",
      title: "Contemporary Mansion",
      location: "Miami Beach, FL",
      price: "$3,950,000",
      bedrooms: 4,
      bathrooms: 4,
      area: 3800,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&crop=center",
      title: "Historic Townhouse",
      location: "Boston, MA",
      price: "$2,100,000",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
      title: "Mountain Retreat",
      location: "Aspen, CO",
      price: "$5,200,000",
      bedrooms: 5,
      bathrooms: 4,
      area: 4800,
    },
  ];

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-r from-charcoal to-charcoal-light">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Luxury Properties
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-xl font-body max-w-2xl mx-auto leading-relaxed opacity-90">
              Discover exceptional properties in the world's most prestigious
              locations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search properties or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-body"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="font-body">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>

              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} {...property} index={index} />
            ))}
          </motion.div>

          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg font-body text-muted-foreground">
                No properties found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
