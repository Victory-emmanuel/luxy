import { motion } from 'framer-motion';
import { 
  Home, TrendingUp, Users, FileText, Key, Calculator, 
  Search, Shield, Camera, Briefcase, Award, CheckCircle 
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: 'Property Sales',
      description: 'Expert guidance through every step of buying or selling luxury properties with personalized attention.',
      features: ['Market Analysis', 'Property Valuation', 'Negotiation Support', 'Transaction Management'],
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Strategic investment advice to maximize your real estate portfolio returns and long-term wealth.',
      features: ['Portfolio Analysis', 'Market Trends', 'ROI Optimization', 'Risk Assessment'],
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Full-service property management for investment and rental properties with premium care.',
      features: ['Tenant Screening', 'Maintenance Coordination', 'Rent Collection', 'Property Inspections'],
    },
    {
      icon: Users,
      title: 'Personal Consultation',
      description: 'One-on-one consultations tailored to your unique real estate needs and lifestyle goals.',
      features: ['Needs Assessment', 'Custom Solutions', 'Market Education', 'Timeline Planning'],
    },
    {
      icon: FileText,
      title: 'Legal Support',
      description: 'Complete legal assistance and documentation for seamless and secure transactions.',
      features: ['Contract Review', 'Due Diligence', 'Title Services', 'Closing Support'],
    },
    {
      icon: Calculator,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to optimize your real estate investments.',
      features: ['Mortgage Guidance', 'Tax Planning', 'Investment Structuring', 'Wealth Management'],
    },
  ];

  const additionalServices = [
    {
      icon: Search,
      title: 'Property Search',
      description: 'Exclusive access to off-market properties and luxury listings.',
    },
    {
      icon: Shield,
      title: 'Insurance Services',
      description: 'Comprehensive insurance solutions for luxury properties.',
    },
    {
      icon: Camera,
      title: 'Marketing Services',
      description: 'Professional photography and marketing for property sales.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Relocation',
      description: 'Specialized services for corporate clients and relocations.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive consultation to understand your needs, goals, and preferences.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our team develops a customized strategy tailored to your specific requirements and market conditions.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, keeping you informed every step of the way.',
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Our relationship continues beyond the transaction with ongoing support and market insights.',
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
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-xl font-body max-w-3xl mx-auto leading-relaxed opacity-90">
              Comprehensive luxury real estate services designed to exceed your expectations 
              and deliver exceptional results in every transaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Core Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our comprehensive suite of services covers every aspect of luxury real estate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
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
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-body text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A proven methodology that ensures exceptional results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-bold text-gold-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specialized services to support your complete real estate journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="luxury-card p-6 text-center h-full hover:scale-102 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-charcoal to-charcoal-light">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg font-body max-w-2xl mx-auto leading-relaxed opacity-90 mb-8">
              Contact our expert team today to discuss your luxury real estate needs 
              and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gold-button shine-effect">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                View Properties
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;