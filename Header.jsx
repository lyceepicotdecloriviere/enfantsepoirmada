import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#donate', label: t('nav.donate') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            data-testid="logo-link"
            className="flex items-center gap-2 group"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/3abuxkj7_9F6157B7-9741-4167-9E1D-BE91E00D2894.png"
              alt="Logo Lycée Picot de Clorivière"
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-xs sm:text-sm md:text-lg text-neutral-900">
                Lycée Picot
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm md:text-lg text-primary-700">
                de Clorivière
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.href.replace('#', '')}`}
                className="px-4 py-2 text-sm font-medium text-neutral-800 hover:text-primary-600 transition-colors rounded-full hover:bg-primary-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid="language-selector"
                  className="flex items-center gap-2 text-neutral-800 hover:bg-primary-50"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{currentLang.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    data-testid={`lang-${lang.code}`}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-2 cursor-pointer ${
                      i18n.language === lang.code ? 'bg-primary-50 text-primary-700' : ''
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Donate Button */}
            <Button
              asChild
              data-testid="header-donate-btn"
              className="hidden sm:flex bg-primary-600 hover:bg-primary-700 text-white rounded-full px-6 shadow-lg shadow-primary-600/20 hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <a href="#donate">
                <Heart className="w-4 h-4 mr-2" />
                {t('nav.donate')}
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              data-testid="mobile-menu-btn"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-200"
          >
            <nav className="flex flex-col px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={`mobile-nav-${item.href.replace('#', '')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-neutral-800 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                data-testid="mobile-donate-btn"
                className="mt-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full"
              >
                <a href="#donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Heart className="w-4 h-4 mr-2" />
                  {t('nav.donate')}
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
