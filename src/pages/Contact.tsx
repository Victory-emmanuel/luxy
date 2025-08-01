import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Call us anytime',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@luxuryshowcase.com',
      subtitle: 'Send us a message',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Luxury Ave, Premium District',
      subtitle: 'Visit our showroom',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-7PM',
      subtitle: 'Weekend by appointment',
    },
  ];

  const offices = [
    {
      city: 'Beverly Hills',
      address: '123 Luxury Ave, Beverly Hills, CA 90210',
      phone: '+1 (555) 123-4567',
      email: 'beverlyhills@luxuryshowcase.com',
      image: '/api/placeholder/400/300',
    },
    {
      city: 'Manhattan',
      address: '456 Park Avenue, New York, NY 10022',
      phone: '+1 (555) 234-5678',
      email: 'manhattan@luxuryshowcase.com',
      image: '/api/placeholder/400/300',
    },
    {
      city: 'Miami Beach',
      address: '789 Ocean Drive, Miami Beach, FL 33139',
      phone: '+1 (555) 345-6789',
      email: 'miami@luxuryshowcase.com',
      image: '/api/placeholder/400/300',
    },
  ];

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
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-xl font-body max-w-2xl mx-auto leading-relaxed opacity-90">
              Ready to find your dream property? Get in touch with our expert team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-gold-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-body text-foreground mb-1">{info.details}</p>
                <p className="font-body text-muted-foreground text-sm">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <Card className="luxury-card p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="font-body" />
                    <Input placeholder="Last Name" className="font-body" />
                  </div>
                  <Input placeholder="Email Address" type="email" className="font-body" />
                  <Input placeholder="Phone Number" type="tel" className="font-body" />
                  <Input placeholder="Subject" className="font-body" />
                  <Textarea 
                    placeholder="Tell us about your property needs..." 
                    className="font-body min-h-[150px]" 
                  />
                  <Button className="gold-button shine-effect w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Find Us
              </h2>
              <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
                <p className="font-body text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Locations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Visit our luxury showrooms in prime locations across the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="luxury-card overflow-hidden">
                  <img
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="font-body text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="font-body text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="font-body text-sm">{office.email}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;