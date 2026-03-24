import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Copy, Heart, Building2, Smartphone, CheckCircle, Users, GraduationCap, Bed, ExternalLink, Utensils, Scissors, Home, TreePine, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export const DonateSection = () => {
  const { t } = useTranslation();

  const copyToClipboard = async (text, label) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      toast.success(t('donate.copySuccess'), {
        description: label,
        duration: 2000,
      });
    } catch (err) {
      console.error('Copy failed:', err);
      toast.error('Erreur lors de la copie');
    }
  };

  const bankDetails = {
    accountName: "Association Filles du Cœur de Marie",
    bankName: "BNI Madagascar",
    iban: "MG46 00005 00015 32625590200 90",
    address: "lot 304 B 180, Antsongo, 110 Antsirabe"
  };

  const sponsorshipLevels = [
    { level: t('donate.sponsorship.preschool'), students: '216', priceMonth: '2€', priceYear: '24€' },
    { level: t('donate.sponsorship.primary'), students: '537', priceMonth: '2€', priceYear: '24€' },
    { level: t('donate.sponsorship.secondary1'), students: '368', priceMonth: '3€', priceYear: '36€' },
    { level: t('donate.sponsorship.secondary2'), students: '197', priceMonth: '5€', priceYear: '60€' },
  ];

  const bookingUrl = "https://www.booking.com/Share-APAkqfd";

  const freeDonatioNeeds = [
    { icon: Utensils, label: "Cuisine", description: "Équipements et fournitures" },
    { icon: Scissors, label: "Atelier couture", description: "Machines et matériel" },
    { icon: Home, label: "Établissement", description: "Rénovations intérieures" },
    { icon: TreePine, label: "Terrain", description: "Aménagement extérieur" },
    { icon: Wrench, label: "Bâtiments", description: "Entretien et construction" },
  ];

  return (
    <section
      id="donate"
      data-testid="donate-section"
      className="py-24 md:py-32 bg-primary-50"
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
          <span className="font-handwriting text-2xl md:text-3xl text-primary-600 mb-2 block">
            Votre Générosité
          </span>
          <h2
            data-testid="donate-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t('donate.title')}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t('donate.subtitle')}
          </p>
        </motion.div>

        {/* Booking.com Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="booking-card"
            className="block bg-gradient-to-r from-accent to-accent/80 rounded-3xl p-8 md:p-10 shadow-xl max-w-4xl mx-auto hover:shadow-2xl transition-all hover:-translate-y-1 group"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Bed className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <span>Soutenez-nous en séjournant</span>
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                  Hostels Picot de Clorivière
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-4">
                  Réservez sur Booking.com - 100% des bénéfices sont reversés à l'établissement scolaire
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white font-medium">
                  <span>Réserver sur Booking.com</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Free Donation Section - NEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-3xl p-8 md:p-10 shadow-xl max-w-4xl mx-auto text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                <Heart className="w-4 h-4" />
                <span>Don libre</span>
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">
                Aidez à améliorer l'établissement
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Vos dons libres servent à financer les améliorations suivantes
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {freeDonatioNeeds.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-white/70 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm mb-4">
                Contactez-nous pour faire un don libre du montant de votre choix
              </p>
              <Button
                asChild
                data-testid="free-donation-whatsapp"
                className="bg-white text-secondary-700 hover:bg-white/90 rounded-full px-8 shadow-lg hover:-translate-y-1 active:scale-95 transition-all"
              >
                <a
                  href="https://wa.me/261348185069?text=Bonjour,%20je%20souhaite%20faire%20un%20don%20libre%20pour%20aider%20l%27%C3%A9tablissement."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Faire un don libre
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Sponsorship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900">
                  {t('donate.sponsorship.title')}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t('donate.sponsorship.description')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {sponsorshipLevels.map((item, index) => (
                <div
                  key={index}
                  className="bg-background-alt rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-2xl font-bold text-primary-600 mb-0">{item.priceMonth}</p>
                  <p className="text-xs text-neutral-500 mb-2">/ mois</p>
                  <p className="text-sm font-medium text-neutral-700 mb-1">{item.priceYear} / an</p>
                  <p className="text-sm text-neutral-600 mb-2">{item.level.split(':')[0]}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-neutral-500">
                    <Users className="w-3 h-3" />
                    <span>{item.students} élèves</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Instructions virement permanent */}
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">Comment parrainer un enfant ?</h4>
                  <p className="text-sm text-neutral-700 mb-3">
                    Mettez en place un <strong>virement permanent mensuel</strong> auprès de votre banque vers notre compte :
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1 mb-3">
                    <li>1. Connectez-vous à votre espace bancaire en ligne</li>
                    <li>2. Créez un virement permanent avec la fréquence "mensuelle"</li>
                    <li>3. Utilisez l'IBAN ci-dessous comme bénéficiaire</li>
                    <li>4. Indiquez en référence : "Parrainage + votre nom"</li>
                  </ul>
                  <p className="text-xs text-neutral-500 italic">
                    Contactez-nous par WhatsApp pour confirmer votre parrainage et recevoir des nouvelles de votre filleul(e).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Donation Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* TapTap Send Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="taptap-card"
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
          >
            {/* Recommended Badge */}
            <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Recommandé
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900">
                  {t('donate.taptap.title')}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t('donate.taptap.description')}
                </p>
              </div>
            </div>

            <p className="text-neutral-700 mb-6 leading-relaxed">
              {t('donate.taptap.instructions')}
            </p>

            <div className="bg-primary-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Numéro de téléphone</p>
                  <p className="font-bold text-lg text-primary-700">+261 34 81 850 69</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  data-testid="copy-taptap-phone"
                  onClick={() => copyToClipboard('+261348185069', 'Numéro TapTap Send')}
                  className="hover:bg-primary-100 border-primary-200"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-primary-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Transfert rapide et sécurisé</span>
            </div>
          </motion.div>

          {/* Bank Transfer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="bank-card"
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-secondary-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900">
                  {t('donate.bank.title')}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t('donate.bank.description')}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Account Name */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{t('donate.bank.accountName')}</p>
                    <p className="font-medium text-neutral-800">{bankDetails.accountName}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-account-name"
                    onClick={() => copyToClipboard(bankDetails.accountName, t('donate.bank.accountName'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Bank Name */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{t('donate.bank.bankName')}</p>
                    <p className="font-medium text-neutral-800">{bankDetails.bankName}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-bank-name"
                    onClick={() => copyToClipboard(bankDetails.bankName, t('donate.bank.bankName'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* IBAN */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{t('donate.bank.iban')}</p>
                    <p className="font-medium text-neutral-800 text-sm">{bankDetails.iban}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-iban"
                    onClick={() => copyToClipboard(bankDetails.iban, t('donate.bank.iban'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Address */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Adresse</p>
                    <p className="font-medium text-neutral-800 text-sm">{bankDetails.address}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-address"
                    onClick={() => copyToClipboard(bankDetails.address, 'Adresse')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact for Donations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-4">{t('donate.contactDonate')}</p>
          <Button
            asChild
            data-testid="donate-whatsapp-btn"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 shadow-lg shadow-green-600/20 hover:-translate-y-1 active:scale-95 transition-all"
          >
            <a
              href="https://wa.me/261348185069"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="w-4 h-4 mr-2" />
              WhatsApp: +261 34 81 850 69
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
