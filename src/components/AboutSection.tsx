import { motion } from 'framer-motion';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Home, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '$2B+', label: 'Sales Volume' },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About Luxury Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Luxury Showcase has been the premier destination for discerning clients 
            seeking exceptional properties. Our commitment to excellence and personalized service has 
            established us as leaders in the luxury real estate market.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gold-foreground" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="font-body text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;