import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Heart, Users, Briefcase } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: '1295', label: t('stats.students') },
    { icon: Briefcase, value: '70', label: t('stats.staff') },
    { icon: GraduationCap, value: '4', label: t('stats.levels') },
    { icon: Heart, value: '14', label: t('stats.years') },
  ];

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-handwriting text-2xl md:text-3xl text-primary-600 mb-2 block">
            Notre Histoire
          </span>
          <h2
            data-testid="about-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t('about.title')}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary-200 rounded-3xl transform -rotate-3" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-300 rounded-3xl transform rotate-3" />
            <img
              src="https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/xftcgprx_D62FC3D0-D33F-4586-AAD3-A40C9E1CDA04.jpeg"
              alt="Élèves du Lycée Picot de Clorivière"
              data-testid="about-image"
              className="relative w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900 mb-2">
                {t('about.sisterTitle')}
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                {t('about.sisterRole')}
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                {t('about.sisterDescription')}
              </p>
              <p className="text-neutral-700 leading-relaxed mb-8">
                {t('about.description')}
              </p>

              {/* Quote */}
              <div className="bg-secondary-50 border-l-4 border-secondary-500 rounded-r-2xl p-6">
                <p className="font-handwriting text-xl md:text-2xl text-secondary-800 italic">
                  "{t('about.quote')}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              data-testid={`stat-${index}`}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <p className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
