import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import hero images
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const heroSlides = [
  {
    id: 1,
    image: hero1,
    title: 'Modern Luxury Villa',
    subtitle: 'Architectural Excellence in Prime Location',
    description: 'Experience unparalleled sophistication in this stunning contemporary masterpiece.',
  },
  {
    id: 2,
    image: hero2,
    title: 'Oceanfront Penthouse',
    subtitle: 'Panoramic Views & Ultimate Privacy',
    description: 'Indulge in breathtaking ocean vistas from your private sanctuary above the clouds.',
  },
  {
    id: 3,
    image: hero3,
    title: 'Contemporary Estate',
    subtitle: 'Seamless Indoor-Outdoor Living',
    description: 'Where innovative design meets natural beauty in perfect harmony.',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-20">
        <motion.div
          key={`content-${currentSlide}`}
          className="text-center text-white max-w-4xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-body mb-6 text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {heroSlides[currentSlide].subtitle}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl font-body mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {heroSlides[currentSlide].description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button 
              className={cn(
                'gold-button shine-effect text-lg px-8 py-4',
                'hover:shadow-gold focus:ring-2 focus:ring-accent focus:ring-offset-2',
                'focus:ring-offset-transparent'
              )}
            >
              <Eye className="mr-2 h-5 w-5" />
              Explore Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={cn(
          'absolute left-6 top-1/2 -translate-y-1/2 z-10',
          'p-3 rounded-full bg-charcoal-semi backdrop-blur-sm',
          'text-white hover:bg-charcoal hover:scale-110',
          'transition-all duration-300 focus:outline-none focus:ring-2',
          'focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent'
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gold" />
      </button>

      <button
        onClick={nextSlide}
        className={cn(
          'absolute right-6 top-1/2 -translate-y-1/2 z-10',
          'p-3 rounded-full bg-charcoal-semi backdrop-blur-sm',
          'text-white hover:bg-charcoal hover:scale-110',
          'transition-all duration-300 focus:outline-none focus:ring-2',
          'focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent'
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gold" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-accent',
              index === currentSlide
                ? 'bg-accent scale-125'
                : 'bg-white/50 hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;