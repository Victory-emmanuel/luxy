import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Property Investor',
      content: 'Luxury Showcase exceeded all expectations. Their attention to detail and market expertise helped us find the perfect investment property.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Michael Chen',
      role: 'Homeowner',
      content: 'The team\'s professionalism and dedication made our home buying journey seamless. Truly exceptional service from start to finish.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Real Estate Developer',
      content: 'Outstanding market knowledge and negotiation skills. They secured an excellent deal for our luxury development project.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
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
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover what our valued clients say about their experience with Luxury Showcase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="luxury-card p-8 h-full relative">
                <Quote className="w-8 h-8 text-gold absolute top-6 right-6 opacity-20" />
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>

                <p className="font-body text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;