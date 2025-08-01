import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to find your dream property? Contact our expert team today for personalized assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="font-body text-foreground mb-1">{info.details}</p>
                    <p className="font-body text-muted-foreground text-sm">{info.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="luxury-card p-8">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="font-body" />
                  <Input placeholder="Last Name" className="font-body" />
                </div>
                <Input placeholder="Email Address" type="email" className="font-body" />
                <Input placeholder="Phone Number" type="tel" className="font-body" />
                <Textarea 
                  placeholder="Tell us about your property needs..." 
                  className="font-body min-h-[120px]" 
                />
                <Button className="gold-button shine-effect w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;