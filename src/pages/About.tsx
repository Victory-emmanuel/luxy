import { motion } from 'framer-motion';
import { Award, Users, Home, TrendingUp, Target, Eye, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Home, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '$2B+', label: 'Sales Volume' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/400',
      bio: 'With over 15 years in luxury real estate, Sarah founded Luxury Showcase to redefine the premium property experience.',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Property Advisor',
      image: '/api/placeholder/300/400',
      bio: 'Michael specializes in high-end residential properties and has facilitated over $500M in luxury transactions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Investment Specialist',
      image: '/api/placeholder/300/400',
      bio: 'Emily helps clients build exceptional real estate portfolios with strategic investment guidance.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, ensuring exceptional service and results for our clients.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Honest communication and clear processes build trust and lasting relationships.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Our ethical approach and commitment to doing right by our clients guides every decision.',
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
              About Luxury Showcase
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-xl font-body max-w-3xl mx-auto leading-relaxed opacity-90">
              Redefining luxury real estate through exceptional service, market expertise, 
              and an unwavering commitment to our clients' success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mb-6 rounded-full" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Founded in 2008, Luxury Showcase emerged from a vision to transform the luxury 
                real estate experience. We recognized that discerning clients deserved more than 
                traditional real estate services – they needed a partner who understood their 
                unique needs and aspirations.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Today, we stand as a premier luxury real estate firm, having facilitated over 
                $2 billion in transactions while maintaining our commitment to personalized 
                service and exceptional results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/api/placeholder/600/400"
                alt="Luxury Showcase Office"
                className="w-full h-96 object-cover rounded-xl shadow-luxury"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* Values Section */}
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
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide our approach to luxury real estate and client relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="luxury-card p-8 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-gold-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our experienced professionals are dedicated to delivering exceptional results 
              for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="luxury-card overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="font-body text-gold mb-4">{member.role}</p>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
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

export default About;