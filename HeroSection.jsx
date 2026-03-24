import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/ndziy6fd_2A6A4111-336F-4981-ABC3-2B37A374AB1A.png"
          alt="Élèves du Lycée Picot de Clorivière"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            <span>Madagascar</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            data-testid="hero-title"
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            data-testid="hero-subtitle"
            className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              data-testid="hero-donate-btn"
              className="bg-primary-600 hover:bg-primary-700 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-primary-600/30 hover:-translate-y-1 active:scale-95 transition-all"
            >
              <a href="#donate">
                <Heart className="w-5 h-5 mr-2" />
                {t('hero.cta')}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-testid="hero-learn-btn"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg backdrop-blur-sm hover:-translate-y-1 active:scale-95 transition-all"
            >
              <a href="#about">
                {t('hero.learnMore')}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            data-testid="scroll-indicator"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
