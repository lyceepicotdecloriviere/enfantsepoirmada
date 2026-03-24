import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Facebook, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="font-handwriting text-2xl md:text-3xl text-secondary-600 mb-2 block">
            Restons en Contact
          </span>
          <h2
            data-testid="contact-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t('contact.title')}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/261348185069"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            data-testid="contact-whatsapp"
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
              WhatsApp
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              {t('contact.whatsapp')}
            </p>
            <p className="font-medium text-green-600">+261 34 81 850 69</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+261348185069"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-testid="contact-phone"
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
              {t('contact.phone')}
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              {t('contact.director')}
            </p>
            <p className="font-medium text-primary-600">+261 34 81 850 69</p>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/share/1CxQkqx6nF/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-testid="contact-facebook"
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Facebook className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
              Facebook
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              {t('contact.facebook')}
            </p>
            <p className="font-medium text-blue-600">Notre page</p>
          </motion.a>
        </div>

        {/* Sister Viviane Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl shadow-primary-600/30">
            <img 
              src="https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/fm3wi2g4_411CB88D-1E4B-4860-B074-51CB29695E6F.jpeg"
              alt="Sœur Viviane - Directrice"
              className="w-28 h-28 mx-auto mb-6 object-cover rounded-full border-4 border-white/30 shadow-lg"
            />
            <h3 className="font-heading font-bold text-2xl mb-2">
              Sœur Viviane
            </h3>
            <p className="text-primary-100 mb-2">Directrice de l'établissement</p>
            <p className="text-primary-200 text-sm mb-6">Nazaretakely Antsongo 110, Antsirabe</p>
            <Button
              asChild
              data-testid="contact-main-whatsapp"
              className="bg-white text-primary-700 hover:bg-primary-50 rounded-full px-8 shadow-lg hover:-translate-y-1 active:scale-95 transition-all"
            >
              <a
                href="https://wa.me/261348185069"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('contact.whatsapp')}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
