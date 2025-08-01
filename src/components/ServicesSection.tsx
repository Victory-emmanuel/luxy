import { motion } from 'framer-motion';
import { Home, TrendingUp, Users, FileText, Key, Calculator } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'Property Sales',
      description: 'Expert guidance through every step of buying or selling luxury properties.',
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Comprehensive market insights and property valuations for informed decisions.',
    },
    {
      icon: Users,
      title: 'Personal Consultation',
      description: 'One-on-one consultations tailored to your unique real estate needs.',
    },
    {
      icon: FileText,
      title: 'Legal Support',
      description: 'Complete legal assistance and documentation for seamless transactions.',
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Full-service property management for investment and rental properties.',
    },
    {
      icon: Calculator,
      title: 'Investment Advisory',
      description: 'Strategic investment advice to maximize your real estate portfolio returns.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive real estate services designed to exceed your expectations and 
            deliver exceptional results in the luxury property market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="luxury-card p-8 h-full hover:scale-102 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gold-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;