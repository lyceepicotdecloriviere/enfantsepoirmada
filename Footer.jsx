import { useTranslation } from 'react-i18next';
import { Heart, Facebook, Phone, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="bg-neutral-900 text-white py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/3abuxkj7_9F6157B7-9741-4167-9E1D-BE91E00D2894.png"
                alt="Logo Lycée Picot de Clorivière"
                className="w-12 h-12 object-contain"
              />
              <span className="font-heading font-bold text-xl">
                Lycée Picot de Clorivière
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t('footer.mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#donate" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  {t('nav.donate')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/261348185069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-green-400 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+261348185069"
                  className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +261 34 81 850 69
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1CxQkqx6nF/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Lycée Picot de Clorivière. {t('footer.rights')}
            </p>
            <p className="font-handwriting text-lg text-neutral-400 italic">
              "{t('hero.title')}"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
